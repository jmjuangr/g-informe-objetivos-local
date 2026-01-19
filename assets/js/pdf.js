(function () {
var app = window.App || (window.App = {});

const generatePdf = async ({ header, selections }) => {
  if (!window.PDFLib) {
    throw new Error("La librería PDF no está disponible");
  }

  const safeText = (value) =>
    String(value ?? "")
      .replace(/[\r\n\t]+/g, " ")
      .replace(/\s+/g, " ")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\x20-\x7E]/g, "")
      .trim();

  const { PDFDocument, StandardFonts, rgb } = window.PDFLib;
  const pdfDoc = await PDFDocument.create();
  const pageSize = [841.89, 595.28];
  let page = pdfDoc.addPage(pageSize);
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold || StandardFonts.Helvetica);

  const margin = 50;
  const separatorColor = rgb(0.85, 0.85, 0.85);
  const separatorWidth = 0.5;
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

  const drawSeparator = () => {
    const y = cursorY + 6;
    page.drawLine({
      start: { x: margin, y },
      end: { x: pageSize[0] - margin, y },
      color: separatorColor,
      thickness: separatorWidth
    });
    cursorY -= 2;
  };


  drawLine("Informe de objetivos 2026", { size: 18, bold: true, spacing: 10 });
  drawLine(`Entidad: ${safeText(header.entity)}`);
  drawLine(`Gestor: ${safeText(header.manager)}`);
  drawLine(" ");

  const grouped = selections.reduce((acc, item) => {
    const instruction = safeText(item.instruction) || "Sin instrucción";
    if (!acc[instruction]) {
      acc[instruction] = [];
    }
    acc[instruction].push(item);
    return acc;
  }, {});

  Object.entries(grouped).forEach(([instruction, items]) => {
    ensureSpace(30);
    drawLine(instruction, { size: 14, bold: true, spacing: 8 });

    items.forEach((item, index) => {
      const title = safeText(item.title);
      const plazo = safeText(item.plazo);
      const observations = safeText(item.observations);
      const hasExtra = Boolean(plazo || observations);
      ensureSpace(hasExtra ? 42 : 24);
      drawLine(`- ${title}`, { size: 11, spacing: hasExtra ? 4 : 8 });
      if (plazo) {
        drawLine(`Plazo: ${plazo}`, { size: 10, spacing: observations ? 4 : 8 });
      }
      if (observations) {
        drawLine(`Observaciones: ${observations}`, { size: 10, spacing: 8 });
      }
      if (index < items.length - 1) {
        drawSeparator();
      }
    });
  });

  return pdfDoc.save();
};

app.pdf = { generatePdf };
})();
