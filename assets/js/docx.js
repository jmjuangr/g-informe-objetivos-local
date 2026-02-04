(function () {
var app = window.App || (window.App = {});

const generateDocx = async ({ header, selections }) => {
  if (!window.docx) {
    throw new Error("La librería DOCX no está disponible");
  }

  const {
    AlignmentType,
    BorderStyle,
    Document,
    HeightRule,
    ImageRun,
    Packer,
    PageOrientation,
    Paragraph,
    ShadingType,
    Table,
    TableCell,
    TableRow,
    TextRun,
    VerticalAlign,
    WidthType
  } = window.docx;

  const safeText = (value) =>
    String(value ?? "")
      .replace(/[\r\n\t]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();

  const getLabels = () => {
    const language = app.state?.getLanguage ? app.state.getLanguage() : "es";
    const labelsByLanguage = {
      es: { entity: "Entidad", plazo: "Plazo", manager: "Gestor/a" },
      ca: { entity: "Entitat", plazo: "Termini", manager: "Gestor/a" },
      va: { entity: "Entitat", plazo: "Termini", manager: "Gestor/a" }
    };
    return labelsByLanguage[language] || labelsByLanguage.es;
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

  const base64ToBytes = (base64) => {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i += 1) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
  };

  const getLogoBytes = (logoKey) => {
    const base64 =
      (logoKey && window.App?.logoBase64 && window.App.logoBase64[logoKey]) ||
      window.App?.logoPngBase64;
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
  const tableBorders = {
    top: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    bottom: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    left: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    right: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    insideHorizontal: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" },
    insideVertical: { style: BorderStyle.NONE, size: 0, color: "FFFFFF" }
  };

  const headerTitle = new Paragraph({
    alignment: AlignmentType.CENTER,
    children: [
      new TextRun({
        text: "Informe de objetivos 2026",
        bold: true,
        size: 36
      })
    ]
  });

  const logoBytes = getLogoBytes(header.logo);
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
      borders: tableBorders,
      rows: [
        new TableRow({
          height: { value: 500, rule: HeightRule.ATLEAST },
          children: [
            new TableCell({
              width: { size: 20, type: WidthType.PERCENTAGE },
              verticalAlign: VerticalAlign.CENTER,
              shading: { type: ShadingType.CLEAR, color: "auto", fill: "F2F2F2" },
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [new Paragraph({ children: [logo] })]
            }),
            new TableCell({
              width: { size: 80, type: WidthType.PERCENTAGE },
              verticalAlign: VerticalAlign.CENTER,
              shading: { type: ShadingType.CLEAR, color: "auto", fill: "F2F2F2" },
              margins: { top: 120, bottom: 120, left: 120, right: 120 },
              children: [headerTitle]
            })
          ]
        })
      ]
    });
    children.push(headerTable);
  } else {
    children.push(headerTitle);
  }

  const labels = getLabels();

  children.push(
    new Paragraph({
      children: [new TextRun({ text: `${labels.entity}: ${safeText(header.entity)}`, size: 22 })]
    })
  );
  children.push(
    new Paragraph({
      children: [new TextRun({ text: `${labels.manager}: ${safeText(header.manager)}`, size: 22 })]
    })
  );
  children.push(new Paragraph({ text: " " }));

  Object.entries(grouped).forEach(([instruction, items]) => {
    children.push(
      new Paragraph({
        children: [
          new TextRun({
            text: instruction,
            bold: true,
            size: 28
          })
        ],
        spacing: { after: 120 }
      })
    );

    const rows = items.sort(compareItemsByWorkLine).map((item, index) => {
      const plazo = safeText(item.plazo);
      const observations = safeText(item.observations);
      const rowShade = index % 2 === 1 ? "F7F7F7" : null;

      const titleCell = new TableCell({
        width: { size: 60, type: WidthType.PERCENTAGE },
        shading: rowShade ? { type: ShadingType.CLEAR, color: "auto", fill: rowShade } : undefined,
        margins: { top: 120, bottom: 120, left: 120, right: 120 },
        children: [
          new Paragraph({
            children: [new TextRun({ text: safeText(item.title), size: 22 })]
          })
        ]
      });
      const plazoCell = new TableCell({
        width: { size: 20, type: WidthType.PERCENTAGE },
        shading: rowShade ? { type: ShadingType.CLEAR, color: "auto", fill: rowShade } : undefined,
        margins: { top: 120, bottom: 120, left: 120, right: 120 },
        children: [
          new Paragraph({
            children: [new TextRun({ text: plazo ? `${labels.plazo}: ${plazo}` : "", size: 22 })]
          })
        ]
      });
      const obsCell = new TableCell({
        width: { size: 20, type: WidthType.PERCENTAGE },
        shading: rowShade ? { type: ShadingType.CLEAR, color: "auto", fill: rowShade } : undefined,
        margins: { top: 120, bottom: 120, left: 120, right: 120 },
        children: [
          new Paragraph({
            children: [new TextRun({ text: observations ? `Observaciones: ${observations}` : "", size: 22 })]
          })
        ]
      });

      return new TableRow({
        children: [titleCell, plazoCell, obsCell]
      });
    });

    children.push(
      new Table({
        width: { size: 100, type: WidthType.PERCENTAGE },
        borders: tableBorders,
        rows
      })
    );

    children.push(new Paragraph({ text: " " }));
  });

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: {
            font: "Helvetica",
            size: 22
          }
        }
      }
    },
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
