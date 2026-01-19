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

  const loadBinary = (url) =>
    new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open("GET", url, true);
      xhr.responseType = "arraybuffer";
      xhr.onload = () => {
        if (xhr.status >= 200 && xhr.status < 300) {
          resolve(new Uint8Array(xhr.response));
        } else {
          reject(new Error(`No se pudo cargar ${url}`));
        }
      };
      xhr.onerror = () => reject(new Error(`No se pudo cargar ${url}`));
      xhr.send();
    });

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

  const drawWrappedRow = ({ title, plazo, observations, hasExtra }) => {
    const size = 11;
    const lineHeight = size + 4;
    const usableWidth = pageSize[0] - margin * 2;
    const gutter = 12;
    const columnWidth = 170;
    const leftWidth = hasExtra ? usableWidth - columnWidth * 2 - gutter * 2 : usableWidth;

    const avgCharWidth = size * 0.55;
    const leftMaxChars = Math.max(8, Math.floor(leftWidth / avgCharWidth));
    const rightMaxChars = Math.max(8, Math.floor(columnWidth / avgCharWidth));

    const titleLines = wrapText(title, leftMaxChars);
    const plazoLines = hasExtra ? wrapText(plazo, rightMaxChars) : [];
    const obsLines = hasExtra ? wrapText(observations, rightMaxChars) : [];

    const rowLines = Math.max(titleLines.length, plazoLines.length, obsLines.length);
    const rowHeight = rowLines * lineHeight;
    ensureSpace(rowHeight + 8);

    for (let i = 0; i < rowLines; i += 1) {
      const y = cursorY - i * lineHeight;
      const leftText = titleLines[i] || "";
      page.drawText(leftText, { x: margin, y, size, font });

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



  if (isFirstPage) {
    try {
      const logoBytes = await loadBinary("assets/img/Gestiona-RGB.png");
      const logoImage = await pdfDoc.embedPng(logoBytes);
      const logoWidth = 90;
      const scale = logoWidth / logoImage.width;
      const logoHeight = logoImage.height * scale;
      const logoX = margin;
      const logoY = pageSize[1] - margin - logoHeight;
      page.drawImage(logoImage, {
        x: logoX,
        y: logoY,
        width: logoWidth,
        height: logoHeight
      });
      cursorY = Math.min(cursorY, logoY - 12);
    } catch (error) {
      console.warn("No se pudo cargar el logo para el PDF.", error);
    }
  }

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

    items.forEach((item) => {
      const title = safeText(item.title);
      const plazo = safeText(item.plazo);
      const observations = safeText(item.observations);
      const hasExtra = Boolean(plazo || observations);
      drawWrappedRow({
        title: `- ${title}`,
        plazo: plazo ? `Plazo: ${plazo}` : "",
        observations: observations ? `Observaciones: ${observations}` : "",
        hasExtra
      });
    });
  });

  return pdfDoc.save();
};

app.pdf = { generatePdf };
})();
