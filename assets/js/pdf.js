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
  let cursorY = pageSize[1] - margin;
  let isFirstPage = true;

  const base64ToBytes = (base64) => {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };

  const getLogoBytes = () => {
    const base64 = window.App?.logoPngBase64;
    if (!base64) {
      throw new Error("Logo embebido no disponible");
    }
    return base64ToBytes(base64);
  };

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
      isFirstPage = false;
    }
  };

  const wrapText = (text, maxChars) => {
    if (!text) return [""];
    const words = text.split(" ");
    const lines = [];
    let current = "";

    const pushCurrent = () => {
      if (current) lines.push(current);
      current = "";
    };

    words.forEach((word) => {
      if (!current) {
        if (word.length <= maxChars) {
          current = word;
        } else {
          for (let i = 0; i < word.length; i += maxChars) {
            lines.push(word.slice(i, i + maxChars));
          }
        }
        return;
      }

      if (current.length + 1 + word.length <= maxChars) {
        current = `${current} ${word}`;
        return;
      }

      pushCurrent();
      if (word.length <= maxChars) {
        current = word;
      } else {
        for (let i = 0; i < word.length; i += maxChars) {
          lines.push(word.slice(i, i + maxChars));
        }
      }
    });

    pushCurrent();
    return lines.length ? lines : [""];
  };

  const drawSeparator = (spacing = 6) => {
    page.drawLine({
      start: { x: margin, y: cursorY + 2 },
      end: { x: pageSize[0] - margin, y: cursorY + 2 },
      thickness: 1,
      color: rgb(0.85, 0.85, 0.85)
    });
    cursorY -= spacing;
  };

  const drawWrappedRow = ({ title, plazo, observations, hasExtra, rowIndex }) => {
    const size = 11;
    const lineHeight = size + 4;
    const usableWidth = pageSize[0] - margin * 2;
    const gutter = 12;
    const columnWidth = 170;
    const bulletIndent = 12;
    const leftWidth = hasExtra ? usableWidth - columnWidth * 2 - gutter * 2 : usableWidth;
    const leftTextWidth = Math.max(60, leftWidth - bulletIndent);

    const avgCharWidth = size * 0.55;
    const leftMaxChars = Math.max(8, Math.floor(leftTextWidth / avgCharWidth));
    const rightMaxChars = Math.max(8, Math.floor(columnWidth / avgCharWidth));

    const titleLines = wrapText(title, leftMaxChars);
    const plazoLines = hasExtra ? wrapText(plazo, rightMaxChars) : [];
    const obsLines = hasExtra ? wrapText(observations, rightMaxChars) : [];

    const rowLines = Math.max(titleLines.length, plazoLines.length, obsLines.length);
    const rowHeight = rowLines * lineHeight;
    ensureSpace(rowHeight + 8);

    if (rowIndex % 2 === 1) {
      const textAscent = size * 0.8;
      const textDescent = size * 0.2;
      const bgPadding = 2;
      const topY = cursorY + textAscent + bgPadding;
      const bottomY = cursorY - (rowLines - 1) * lineHeight - textDescent - bgPadding;
      page.drawRectangle({
        x: margin,
        y: bottomY,
        width: usableWidth,
        height: topY - bottomY,
        color: rgb(0.97, 0.97, 0.97),
        borderWidth: 0
      });
    }

    for (let i = 0; i < rowLines; i += 1) {
      const y = cursorY - i * lineHeight;
      const leftText = titleLines[i] || "";
      const textX = margin + bulletIndent;
      if (i === 0) {
        page.drawText("-", { x: margin, y, size, font });
      }
      page.drawText(leftText, { x: textX, y, size, font });

      if (hasExtra) {
        const plazoText = plazoLines[i] || "";
        const obsText = obsLines[i] || "";
        const plazoX = margin + leftWidth + gutter;
        const obsX = plazoX + columnWidth + gutter;
        page.drawText(plazoText, { x: plazoX, y, size, font });
        page.drawText(obsText, { x: obsX, y, size, font });
      }
    }

    cursorY -= rowHeight + 8;
  };

  const compareItemsByWorkLine = (a, b) => {
    const orderA = Number.isFinite(a.work_line_sort_order) ? a.work_line_sort_order : Number.MAX_SAFE_INTEGER;
    const orderB = Number.isFinite(b.work_line_sort_order) ? b.work_line_sort_order : Number.MAX_SAFE_INTEGER;
    if (orderA !== orderB) return orderA - orderB;
    const codeA = safeText(a.work_line_code || "");
    const codeB = safeText(b.work_line_code || "");
    if (codeA !== codeB) return codeA.localeCompare(codeB);
    const titleA = safeText(a.title || "");
    const titleB = safeText(b.title || "");
    return titleA.localeCompare(titleB);
  };


  const headerTitle = "Informe de objetivos 2026";
  const headerTitleSize = 18;
  let headerTitleDrawn = false;

  if (isFirstPage) {
    try {
      const headerBandHeight = 70;
      const headerTopY = pageSize[1] - margin;
      const headerBottomY = headerTopY - headerBandHeight;
      page.drawRectangle({
        x: margin,
        y: headerBottomY,
        width: pageSize[0] - margin * 2,
        height: headerBandHeight,
        color: rgb(0.95, 0.95, 0.95),
        borderWidth: 0
      });

      const logoBytes = getLogoBytes();
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const logoHeight = 36;
      const scale = logoHeight / logoImage.height;
      const logoWidth = logoImage.width * scale;
      const logoX = margin;
      const logoY = headerBottomY + (headerBandHeight - logoHeight) / 2;
      page.drawImage(logoImage, {
        x: logoX,
        y: logoY,
        width: logoWidth,
        height: logoHeight
      });
      const titleWidth = fontBold.widthOfTextAtSize(headerTitle, headerTitleSize);
      const centeredTitleX = (pageSize[0] - titleWidth) / 2;
      const minTitleX = logoX + logoWidth + 16;
      const titleX = Math.max(centeredTitleX, minTitleX);
      const titleY = headerBottomY + (headerBandHeight - headerTitleSize) / 2;
      page.drawText(headerTitle, {
        x: titleX,
        y: titleY,
        size: headerTitleSize,
        font: fontBold,
        color: rgb(0, 0, 0)
      });
      cursorY = headerBottomY - 18;
      headerTitleDrawn = true;
    } catch (error) {
      console.warn("No se pudo cargar el logo para el PDF.", error);
    }
  }

  if (!headerTitleDrawn) {
    drawLine(headerTitle, { size: headerTitleSize, bold: true, spacing: 10 });
  }
  drawLine(`Entidad: ${safeText(header.entity)}`);
  drawLine(`Gestor/a: ${safeText(header.manager)}`);
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
    drawLine(instruction, { size: 14, bold: true, spacing: 6 });
    drawSeparator(12);

    items.sort(compareItemsByWorkLine).forEach((item, index) => {
      const title = safeText(item.title);
      const plazo = safeText(item.plazo);
      const observations = safeText(item.observations);
      const hasExtra = Boolean(plazo || observations);
      drawWrappedRow({
        title,
        plazo: plazo ? `Plazo: ${plazo}` : "",
        observations: observations ? `Observaciones: ${observations}` : "",
        hasExtra,
        rowIndex: index
      });
    });
  });

  return pdfDoc.save();
};

app.pdf = { generatePdf };
})();
