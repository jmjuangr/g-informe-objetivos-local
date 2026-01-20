(function () {
var app = window.App || (window.App = {});

const generateDocx = async ({ header, selections }) => {
  if (!window.docx) {
    throw new Error("La librería DOCX no está disponible");
  }

  const {
    AlignmentType,
    Document,
    HeadingLevel,
    ImageRun,
    Packer,
    PageOrientation,
    Paragraph,
    Table,
    TableCell,
    TableRow,
    TextRun,
    WidthType
  } = window.docx;

  const safeText = (value) =>
    String(value ?? "")
      .replace(/[\r\n\t]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

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
      return null;
    }
    return base64ToBytes(base64);
  };

  const grouped = selections.reduce((acc, item) => {
    const instruction = safeText(item.instruction) || "Sin instrucción";
    if (!acc[instruction]) {
      acc[instruction] = [];
    }
    acc[instruction].push(item);
    return acc;
  }, {});

  const children = [];

  const logoBytes = getLogoBytes();
  if (logoBytes) {
    const logo = new ImageRun({
      data: logoBytes,
      transformation: {
        height: 36,
        width: 120
      }
    });
    const headerTable = new Table({
      width: { size: 100, type: WidthType.PERCENTAGE },
      rows: [
        new TableRow({
          children: [
            new TableCell({
              width: { size: 20, type: WidthType.PERCENTAGE },
              children: [new Paragraph({ children: [logo] })]
            }),
            new TableCell({
              width: { size: 80, type: WidthType.PERCENTAGE },
              children: [
                new Paragraph({
                  text: "Informe de objetivos 2026",
                  heading: HeadingLevel.HEADING_1,
                  alignment: AlignmentType.CENTER
                })
              ]
            })
          ]
        })
      ]
    });
    children.push(headerTable);
  } else {
    children.push(
      new Paragraph({
        text: "Informe de objetivos 2026",
        heading: HeadingLevel.HEADING_1,
        alignment: AlignmentType.CENTER
      })
    );
  }

  children.push(
    new Paragraph({
      children: [new TextRun({ text: `Entidad: ${safeText(header.entity)}` })]
    })
  );
  children.push(
    new Paragraph({
      children: [new TextRun({ text: `Gestor/a: ${safeText(header.manager)}` })]
    })
  );
  children.push(new Paragraph({ text: " " }));

  Object.entries(grouped).forEach(([instruction, items]) => {
    children.push(
      new Paragraph({
        text: instruction,
        heading: HeadingLevel.HEADING_2
      })
    );

    const rows = items.sort(compareItemsByWorkLine).map((item) => {
      const plazo = safeText(item.plazo);
      const observations = safeText(item.observations);

      const titleCell = new TableCell({
        width: { size: 60, type: WidthType.PERCENTAGE },
        children: [new Paragraph(safeText(item.title))]
      });
      const plazoCell = new TableCell({
        width: { size: 20, type: WidthType.PERCENTAGE },
        children: [new Paragraph(plazo ? `Plazo: ${plazo}` : "")]
      });
      const obsCell = new TableCell({
        width: { size: 20, type: WidthType.PERCENTAGE },
        children: [new Paragraph(observations ? `Observaciones: ${observations}` : "")]
      });

      return new TableRow({
        children: [titleCell, plazoCell, obsCell]
      });
    });

    children.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        rows
      })
    );

    children.push(new Paragraph({ text: " " }));
  });

  const doc = new Document({
    sections: [
      {
        properties: {
          page: {
            size: { orientation: PageOrientation.LANDSCAPE }
          }
        },
        children
      }
    ]
  });

  return Packer.toBlob(doc);
};

app.docx = { generateDocx };
})();
