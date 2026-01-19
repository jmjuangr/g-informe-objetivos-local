export const generatePdf = async ({ header, selections }) => {
  if (!window.PDFLib) {
    throw new Error("La librería PDF no está disponible");
  }

  const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
  const pdfDoc = await PDFDocument.create();
  const pageSize = [595.28, 841.89];
  let page = pdfDoc.addPage(pageSize);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold || StandardFonts.Helvetica);

  const margin = 50;
  let cursorY = pageSize[1] - margin;

  const drawLine = (text, options = {}) => {
    const size = options.size || 12;
    const fontToUse = options.bold ? fontBold : font;
    page.drawText(text, {
      x: margin,
      y: cursorY,
      size,
      font: fontToUse,
      color: rgb(0, 0, 0)
    });
    cursorY -= size + (options.spacing || 6);
  };

  const ensureSpace = (heightNeeded) => {
    if (cursorY - heightNeeded < margin) {
      page = pdfDoc.addPage(pageSize);
      cursorY = pageSize[1] - margin;
    }
  };

  drawLine("Informe de objetivos 2026", { size: 18, bold: true, spacing: 10 });
  drawLine(`Entidad: ${header.entity || ""}`);
  drawLine(`Gestor: ${header.manager || ""}`);
  drawLine(" ");

  const grouped = selections.reduce((acc, item) => {
    const instruction = item.instruction || "Sin instrucción";
    if (!acc[instruction]) {
      acc[instruction] = {};
    }
    const workLine = item.work_line || "Sin línea";
    if (!acc[instruction][workLine]) {
      acc[instruction][workLine] = [];
    }
    acc[instruction][workLine].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([instruction, workLines]) => {
    ensureSpace(30);
    drawLine(instruction, { size: 14, bold: true, spacing: 8 });

    Object.entries(workLines).forEach(([workLine, items]) => {
      ensureSpace(24);
      drawLine(workLine, { size: 12, bold: true, spacing: 6 });

      items.forEach((item) => {
        ensureSpace(42);
        drawLine(`• ${item.item_code} — ${item.title}`, { size: 11, spacing: 4 });
        drawLine(`Plazo: ${item.plazo}`, { size: 10, spacing: 4 });
        if (item.observations) {
          drawLine(`Observaciones: ${item.observations}`, { size: 10, spacing: 8 });
        } else {
          drawLine("Observaciones: —", { size: 10, spacing: 8 });
        }
      });
    });
  });

  return pdfDoc.save();
};
