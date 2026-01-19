window.App = window.App || {};
window.App.seedData = {
  "schema_version": 1,
  "updated_at": new Date().toISOString(),
  "commissions": [
    {
      "id": "c1",
      "name": "CONFIGURACIÓN Y ADMINISTRACIÓN DE GESTIONA"
    },
    {
      "id": "c2",
      "name": "ESCRITORIO DE TRAMITACIÓN"
    },
    {
      "id": "c3",
      "name": "ATENCIÓN A LA CIUDADANÍA"
    },
    {
      "id": "c4",
      "name": "GESTIÓN DOCUMENTAL"
    },
    {
      "id": "c5",
      "name": "CONTROL INTERNO Y CONTRATACIÓN"
    }
  ],
  "instructions": [
    {
      "id": "i1",
      "commission_id": "c1",
      "name": "CONFIGURACIÓN GENERAL",
      "legacy_instruction_id": "1"
    },
    {
      "id": "i2",
      "commission_id": "c2",
      "name": "MOTOR DE TRAMITACIÓN",
      "legacy_instruction_id": "5"
    },
    {
      "id": "i3",
      "commission_id": "c3",
      "name": "REGISTRO Y ATENCIÓN A LA CIUDADANÍA",
      "legacy_instruction_id": "4"
    },
    {
      "id": "i4",
      "commission_id": "c4",
      "name": "GESTIÓN DOCUMENTAL Y ARCHIVO",
      "legacy_instruction_id": "2"
    },
    {
      "id": "i5",
      "commission_id": "c5",
      "name": "CONTROL INTERNO",
      "legacy_instruction_id": "7"
    },
    {
      "id": "i6",
      "commission_id": "c5",
      "name": "CONTRATACIÓN",
      "legacy_instruction_id": "6"
    },
    {
      "id": "i7",
      "commission_id": "c4",
      "name": "ANALÍTICA DE DATOS",
      "legacy_instruction_id": "3"
    }
  ],
  "matters": [
    {
      "id": "m1",
      "instruction_id": "i1",
      "name": "CONFIGURACIÓN ESENCIAL GESTIONA"
    },
    {
      "id": "m2",
      "instruction_id": "i2",
      "name": "RESOLUCIÓN DE EXPEDIENTES"
    },
    {
      "id": "m3",
      "instruction_id": "i3",
      "name": "ATENCIÓN A LA CIUDADANÍA"
    },
    {
      "id": "m4",
      "instruction_id": "i4",
      "name": "GESTIÓN DOCUMENTAL Y ARCHIVO"
    },
    {
      "id": "m5",
      "instruction_id": "i3",
      "name": "REGISTRO ELECTRÓNICO"
    },
    {
      "id": "m6",
      "instruction_id": "i1",
      "name": "INTEGRACIONES"
    },
    {
      "id": "m7",
      "instruction_id": "i2",
      "name": "TRAMITACIÓN DE EXPEDIENTES"
    },
    {
      "id": "m8",
      "instruction_id": "i5",
      "name": "CONTROL INTERNO"
    },
    {
      "id": "m9",
      "instruction_id": "i6",
      "name": "CONTRATACIÓN"
    },
    {
      "id": "m10",
      "instruction_id": "i7",
      "name": "ANALÍTICA DE DATOS"
    },
    {
      "id": "m11",
      "instruction_id": "i5",
      "name": "INTEGRACIONES"
    }
  ],
  "submatters": [
    {
      "id": "s1",
      "matter_id": "m1",
      "name": "REGULARIZACIÓN NORMATIVA"
    },
    {
      "id": "s2",
      "matter_id": "m1",
      "name": "CONFIGURACIÓN GENERAL"
    },
    {
      "id": "s3",
      "matter_id": "m1",
      "name": "REGISTRO"
    },
    {
      "id": "s4",
      "matter_id": "m2",
      "name": "ÓRGANOS COLEGIADOS"
    },
    {
      "id": "s5",
      "matter_id": "m3",
      "name": "GESTIONA COMUNICA"
    },
    {
      "id": "s6",
      "matter_id": "m4",
      "name": "MÓDULO DE GESTIÓN ARCHIVÍSTICA"
    },
    {
      "id": "s7",
      "matter_id": "m3",
      "name": "TRÁMITES EXTERNOS"
    },
    {
      "id": "s8",
      "matter_id": "m5",
      "name": "REGISTRO ELECTRÓNICO GENERAL"
    },
    {
      "id": "s9",
      "matter_id": "m3",
      "name": "OAMR"
    },
    {
      "id": "s10",
      "matter_id": "m5",
      "name": "INTEGRACIONES AGE/AOC"
    },
    {
      "id": "s11",
      "matter_id": "m6",
      "name": "INTEGRACIONES AGE/AOC"
    },
    {
      "id": "s12",
      "matter_id": "m5",
      "name": "NOTIFICACIONES Y COMUNICACIONES"
    },
    {
      "id": "s13",
      "matter_id": "m3",
      "name": "SEDE ELECTRÓNICA"
    },
    {
      "id": "s14",
      "matter_id": "m6",
      "name": "INTEGRACIONES BACKOFFICE"
    },
    {
      "id": "s15",
      "matter_id": "m4",
      "name": "CATÁLOGO DE ACTIVIDADES Y PROCEDIMIENTOS"
    },
    {
      "id": "s16",
      "matter_id": "m4",
      "name": "NORMALIZACIÓN"
    },
    {
      "id": "s17",
      "matter_id": "m4",
      "name": "GESTOR DE EXPEDIENTES"
    },
    {
      "id": "s18",
      "matter_id": "m4",
      "name": "LIBROS OFICIALES"
    },
    {
      "id": "s19",
      "matter_id": "m1",
      "name": "FIRMA ELECTRONICA"
    },
    {
      "id": "s20",
      "matter_id": "m7",
      "name": "FIRMA ELECTRONICA"
    },
    {
      "id": "s21",
      "matter_id": "m7",
      "name": "GESTOR DE EXPEDIENTES"
    },
    {
      "id": "s22",
      "matter_id": "m7",
      "name": "CIRCUITOS DE TRAMITACIÓN"
    },
    {
      "id": "s23",
      "matter_id": "m2",
      "name": "LIBROS OFICIALES"
    },
    {
      "id": "s24",
      "matter_id": "m1",
      "name": "FACTURAS"
    },
    {
      "id": "s25",
      "matter_id": "m8",
      "name": "FACTURAS"
    },
    {
      "id": "s26",
      "matter_id": "m9",
      "name": "CONTRATACIÓN ELECTRÓNICA"
    },
    {
      "id": "s27",
      "matter_id": "m7",
      "name": "GESTIONA COMUNICA"
    },
    {
      "id": "s28",
      "matter_id": "m5",
      "name": "GESTOR DE EXPEDIENTES"
    },
    {
      "id": "s29",
      "matter_id": "m8",
      "name": "NORMALIZACIÓN"
    },
    {
      "id": "s30",
      "matter_id": "m9",
      "name": "NORMALIZACIÓN"
    },
    {
      "id": "s31",
      "matter_id": "m4",
      "name": "CONTROL INTERNO"
    },
    {
      "id": "s32",
      "matter_id": "m5",
      "name": "CATÁLOGO DE ACTIVIDADES Y PROCEDIMIENTOS"
    },
    {
      "id": "s33",
      "matter_id": "m2",
      "name": "CIRCUITOS DE RESOLUCIÓN"
    },
    {
      "id": "s34",
      "matter_id": "m8",
      "name": "CIRCUITOS DE RESOLUCIÓN"
    },
    {
      "id": "s35",
      "matter_id": "m10",
      "name": "BUSQUEDAS AVANZADAS"
    },
    {
      "id": "s36",
      "matter_id": "m1",
      "name": "TERCEROS"
    },
    {
      "id": "s37",
      "matter_id": "m11",
      "name": "INTEGRACIONES BACKOFFICE"
    },
    {
      "id": "s38",
      "matter_id": "m2",
      "name": "ORGANOS COLEGIADOS"
    },
    {
      "id": "s39",
      "matter_id": "m2",
      "name": "ÓRGANOS"
    },
    {
      "id": "s40",
      "matter_id": "m7",
      "name": "SEDE ELECTRÓNICA"
    },
    {
      "id": "s41",
      "matter_id": "m1",
      "name": "INTEGRACIONES AGE/AOC"
    },
    {
      "id": "s42",
      "matter_id": "m7",
      "name": "PADRÓN"
    },
    {
      "id": "s43",
      "matter_id": "m3",
      "name": "TERCEROS"
    }
  ],
  "work_lines": [
    {
      "id": "w1",
      "code": "7",
      "display_name": "POLITICA E-ADMIN ENTIDAD",
      "sort_order": 7
    },
    {
      "id": "w2",
      "code": "1",
      "display_name": "UNBOXING",
      "sort_order": 1
    },
    {
      "id": "w3",
      "code": "6",
      "display_name": "MANTENIMIENTO ENTIDAD",
      "sort_order": 6
    },
    {
      "id": "w4",
      "code": "4",
      "display_name": "CONFIGURACIÓN AVANZADA",
      "sort_order": 4
    },
    {
      "id": "w5",
      "code": "5",
      "display_name": "IMPLANTACIÓN AVANZADA",
      "sort_order": 5
    },
    {
      "id": "w6",
      "code": "2",
      "display_name": "CONFIGURACIÓN BÁSICA",
      "sort_order": 2
    },
    {
      "id": "w7",
      "code": "3",
      "display_name": "IMPLANTACIÓN BÁSICA",
      "sort_order": 3
    }
  ],
  "items_objetivo": [
    {
      "id": "o1",
      "instruction_id": "i1",
      "submatter_id": "s1",
      "work_line_id": "w1",
      "title": "Aprobar los instrumentos jurídico-normativos mínimos (Ordenanza AE, Políticas, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_001"
    },
    {
      "id": "o2",
      "instruction_id": "i1",
      "submatter_id": "s1",
      "work_line_id": "w1",
      "title": "Firmar el Convenio PMSBAE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_002"
    },
    {
      "id": "o3",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Completar el proceso de Ratificación de Cargos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_003"
    },
    {
      "id": "o4",
      "instruction_id": "i1",
      "submatter_id": "s3",
      "work_line_id": "w1",
      "title": "Nombrar funcionarios habilitados para la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_004"
    },
    {
      "id": "o5",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Configurar correctamente el calendario de días hábiles",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_005"
    },
    {
      "id": "o6",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de los datos de usuarios y grupos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_006"
    },
    {
      "id": "o7",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w4",
      "title": "Configuración avanzada plantillas de OOCC",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_012"
    },
    {
      "id": "o8",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w1",
      "title": "Configurar redes sociales para retransmisión en directo desde la sede",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_014"
    },
    {
      "id": "o9",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w4",
      "title": "Asignación de grupos a series documentales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_016"
    },
    {
      "id": "o10",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Vincular series documentales al catálogo de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_019"
    },
    {
      "id": "o11",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Carga del Cuadro de Clasificación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_020"
    },
    {
      "id": "o12",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w5",
      "title": "Implantar trámites externos avanzados (condicionales, tesauros inteligentes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_023"
    },
    {
      "id": "o13",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w2",
      "title": "Implantar el módulo de Registro de Entrada",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_025"
    },
    {
      "id": "o14",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Configuración de Notificaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_026"
    },
    {
      "id": "o15",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Implantar la Copia Auténtica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_028"
    },
    {
      "id": "o16",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta del Registro (finalización de anotaciones, asociación de expedientes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_029"
    },
    {
      "id": "o17",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w1",
      "title": "Definir una política de gestión y mantenimiento del registro",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_031"
    },
    {
      "id": "o18",
      "instruction_id": "i3",
      "submatter_id": "s10",
      "work_line_id": "w3",
      "title": "Rellenar resultado de las notificaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_033"
    },
    {
      "id": "o19",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w4",
      "title": "Configuración de Temas y Categorías de registro",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_034"
    },
    {
      "id": "o20",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con SIR / MUX para el intercambio de registros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_036"
    },
    {
      "id": "o21",
      "instruction_id": "i3",
      "submatter_id": "s10",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la bandeja SIR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_037"
    },
    {
      "id": "o22",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con Notifica / eNotum",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_039"
    },
    {
      "id": "o23",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w6",
      "title": "Activar la integración con el Tablon Edictal Único del BOE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_040"
    },
    {
      "id": "o24",
      "instruction_id": "i3",
      "submatter_id": "s12",
      "work_line_id": "w4",
      "title": "Activar la integración con los CIEs de Notifica para Impresión y ensobrado",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_041"
    },
    {
      "id": "o25",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Implantación de trámites externos en OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_042"
    },
    {
      "id": "o26",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w5",
      "title": "Implantar la Firma Biométrica en la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_043"
    },
    {
      "id": "o27",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Implantación módulo de sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_048"
    },
    {
      "id": "o28",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración de Cl@ve / IDCAT Móbil",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_049"
    },
    {
      "id": "o29",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w6",
      "title": "Activar la integración de Apodera",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_050"
    },
    {
      "id": "o30",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso de la Sede Electrónica para Empleados (licencias, vacaciones, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_052"
    },
    {
      "id": "o31",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso de la Sede Electrónica de los Cargos Públicos (asistencia a órganos, registro..)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_053"
    },
    {
      "id": "o32",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso del portafirmas ciudadano en Sede Electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_054"
    },
    {
      "id": "o33",
      "instruction_id": "i1",
      "submatter_id": "s14",
      "work_line_id": "w5",
      "title": "Implantar petición automatizada de documentos individuales de padrón en sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_055"
    },
    {
      "id": "o34",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Configuración general sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_056"
    },
    {
      "id": "o35",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w7",
      "title": "Implantar el tablón de anuncios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_057"
    },
    {
      "id": "o36",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w7",
      "title": "Implantar el módulo de transparencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_058"
    },
    {
      "id": "o37",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w2",
      "title": "Configurar que no pueda utilizarse el procedimiento genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_060"
    },
    {
      "id": "o38",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definir una política de normalización de expedientes y documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_062"
    },
    {
      "id": "o39",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w6",
      "title": "Configurar reglas de apertura, uso y asignación del catálogo de actividades y procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_063"
    },
    {
      "id": "o40",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w7",
      "title": "Reforzar una gestión correcta del cerrado y revisión para transferencia de los expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_071"
    },
    {
      "id": "o41",
      "instruction_id": "i4",
      "submatter_id": "s17",
      "work_line_id": "w3",
      "title": "Reclasificar el histórico de expedientes en base al cuadro de clasificación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_072"
    },
    {
      "id": "o42",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w3",
      "title": "Realizar una limpieza de las descripciones de los expedientes (datos básicos, terceros, catastro…)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_074"
    },
    {
      "id": "o43",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w4",
      "title": "Activar la integración con INSIDE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_075"
    },
    {
      "id": "o44",
      "instruction_id": "i4",
      "submatter_id": "s18",
      "work_line_id": "w2",
      "title": "Vinculación series documentales a funcionalidad libros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_076"
    },
    {
      "id": "o45",
      "instruction_id": "i1",
      "submatter_id": "s19",
      "work_line_id": "w2",
      "title": "Activar los servicios de certificación de esFIRMA",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_077"
    },
    {
      "id": "o46",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar las Tarjetas virtuales de Firma entre los usuarios con permiso de firma",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_079"
    },
    {
      "id": "o47",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar las Tarjetas virtuales de Firma (con seudónimo) entre los usuarios con permiso de firma",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_080"
    },
    {
      "id": "o48",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar APP Móvil entre los usuarios con permiso de firma y/o validación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_081"
    },
    {
      "id": "o49",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Implantar Actuaciones Administrativas Automatizadas con Sello de Órgano",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_083"
    },
    {
      "id": "o50",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w7",
      "title": "Implantar el módulo de validación de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_085"
    },
    {
      "id": "o51",
      "instruction_id": "i2",
      "submatter_id": "s22",
      "work_line_id": "w2",
      "title": "Implantar circuitos de tramitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_087"
    },
    {
      "id": "o52",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Definir circuitos de tramitación para centros gestores específicos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_089"
    },
    {
      "id": "o53",
      "instruction_id": "i2",
      "submatter_id": "s22",
      "work_line_id": "w3",
      "title": "Reforzar una correcta gestión de los circuitos de tramitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_090"
    },
    {
      "id": "o54",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w2",
      "title": "Implantación de Gestiona Envía",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_092"
    },
    {
      "id": "o55",
      "instruction_id": "i2",
      "submatter_id": "s23",
      "work_line_id": "w2",
      "title": "Implantar el módulo de libros oficiales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_093"
    },
    {
      "id": "o56",
      "instruction_id": "i1",
      "submatter_id": "s24",
      "work_line_id": "w6",
      "title": "Encajar el DIR3 de la entidad con la clasificación contable orgánica (sólo para facturas)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_094"
    },
    {
      "id": "o57",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w2",
      "title": "Implantar el módulo de Órganos Colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_095"
    },
    {
      "id": "o58",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Reforzar y optimizar la gestión de los órganos colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_096"
    },
    {
      "id": "o59",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Activación del módulo de archivo",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_098"
    },
    {
      "id": "o60",
      "instruction_id": "i5",
      "submatter_id": "s25",
      "work_line_id": "w2",
      "title": "Implantar del módulo de registro de facturas en Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_101"
    },
    {
      "id": "o61",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Implantar el módulo de tareas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_102"
    },
    {
      "id": "o62",
      "instruction_id": "i5",
      "submatter_id": "s25",
      "work_line_id": "w2",
      "title": "Implantar la conformidad de la factura en Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_103"
    },
    {
      "id": "o63",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Implantar el procedimiento de gestión de contratos menores sin licitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_105"
    },
    {
      "id": "o64",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w5",
      "title": "Implantar módulo de videoconferencias",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_110"
    },
    {
      "id": "o65",
      "instruction_id": "i2",
      "submatter_id": "s27",
      "work_line_id": "w1",
      "title": "Implantar una filosofía de trabajo colaborativo en la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_112"
    },
    {
      "id": "o66",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w2",
      "title": "Implantar módulo de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_113"
    },
    {
      "id": "o67",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Implantar el módulo de firma Electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_114"
    },
    {
      "id": "o68",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Implantar la licitación electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_115"
    },
    {
      "id": "o69",
      "instruction_id": "i3",
      "submatter_id": "s28",
      "work_line_id": "w3",
      "title": "Envío de comunicaciones interadministrativas desde los expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_117"
    },
    {
      "id": "o70",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w1",
      "title": "Definir una política de administración de usuarios y grupos (delegaciones, permisos, plantillas de roles, etc. )",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_121"
    },
    {
      "id": "o71",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w6",
      "title": "Implantar la funcionalidad de plantillas de usuarios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_124"
    },
    {
      "id": "o72",
      "instruction_id": "i5",
      "submatter_id": "s29",
      "work_line_id": "w5",
      "title": "Uso de textos predefinidos Control Interno",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_125"
    },
    {
      "id": "o73",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w5",
      "title": "Uso de textos predefinidos contratación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_126"
    },
    {
      "id": "o74",
      "instruction_id": "i4",
      "submatter_id": "s31",
      "work_line_id": "w2",
      "title": "Vinculación de series documentales a APP facturas / Certificados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_127"
    },
    {
      "id": "o75",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w5",
      "title": "Implantación de procedimientos personalizados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_128"
    },
    {
      "id": "o76",
      "instruction_id": "i3",
      "submatter_id": "s32",
      "work_line_id": "w6",
      "title": "Definir automatismos en la asignación de registros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_130"
    },
    {
      "id": "o77",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w1",
      "title": "Implantar cultura de única vía de resolución mediante circuito de resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_133"
    },
    {
      "id": "o78",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración avanzada de CR (plantillas, tesauros, automatismos, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_134"
    },
    {
      "id": "o79",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w6",
      "title": "Configuración básica de CR sin gasto: asociación de CR en blanco al inventario de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_135"
    },
    {
      "id": "o80",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantar CR sin gasto avanzados (plantillas, tesauros, automatismos, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_136"
    },
    {
      "id": "o81",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w2",
      "title": "Implantación CR genérico sin gasto",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_137"
    },
    {
      "id": "o82",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Reforzar la gestión íntegra de los expedientes de contratación integrados con plataformas de contratación externas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_143"
    },
    {
      "id": "o83",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w6",
      "title": "Asociar las actuaciones de control sincronizadas desde el módulo de diseño a activades y procedimientos del catálogo",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_144"
    },
    {
      "id": "o84",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w7",
      "title": "Implantar los circuitos de resolución con gasto específicos asociados a actividad y a procedimiento (sin contenido en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_145"
    },
    {
      "id": "o85",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configurar el circuito de resolución con gasto específico (con contenido y tesauros en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_147"
    },
    {
      "id": "o86",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Implantación del flujo del circuito de resolución con gasto específico (con contenido y tesauros en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_149"
    },
    {
      "id": "o87",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Implantación de trámites externos en sede",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_151"
    },
    {
      "id": "o88",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w2",
      "title": "Implantar el circuito de resolución con gasto genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_152"
    },
    {
      "id": "o89",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w6",
      "title": "Configuración básica de trámites externos (predeterminada con asignaciones de registro)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_153"
    },
    {
      "id": "o90",
      "instruction_id": "i7",
      "submatter_id": "s35",
      "work_line_id": "w1",
      "title": "Instaurar una cultura de la gestión datificada",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_155"
    },
    {
      "id": "o91",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definición de modelos de datos / tesauros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_156"
    },
    {
      "id": "o92",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w4",
      "title": "Configuración y personalización avanzada de trámites externos (condicionales, tesauros inteligentes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_157"
    },
    {
      "id": "o93",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w7",
      "title": "Implantar CR sin gasto básicos (asociados a procedimientos, sin contenido)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_159"
    },
    {
      "id": "o94",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w1",
      "title": "Impulsar el uso del sistema de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_160"
    },
    {
      "id": "o95",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w1",
      "title": "Definir política de creación de circuitos de tramitación (flujos de firma, validación, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_161"
    },
    {
      "id": "o96",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w2",
      "title": "Configurar responsables y grupos responsables del catálogo de actividades y procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_163"
    },
    {
      "id": "o97",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w2",
      "title": "Configuración del módulo de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_165"
    },
    {
      "id": "o98",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w4",
      "title": "Activación y configuración de la firma biométrica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_166"
    },
    {
      "id": "o99",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w3",
      "title": "Reforzar el mantenimiento y actualización de las agendas de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_167"
    },
    {
      "id": "o100",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w3",
      "title": "Depurar el inventario y configuración de los circuitos de resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_168"
    },
    {
      "id": "o101",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración avanzada del flujo de resolución integrado con la contabilidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_169"
    },
    {
      "id": "o102",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Imagen y formato de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_170"
    },
    {
      "id": "o103",
      "instruction_id": "i1",
      "submatter_id": "s36",
      "work_line_id": "w2",
      "title": "Carga de terceros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_171"
    },
    {
      "id": "o104",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Implantar la celebración de sesiones por videoconferencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_172"
    },
    {
      "id": "o105",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Cofigurar copia auténtica (permisos y carpetas de digitalización)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_173"
    },
    {
      "id": "o106",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w2",
      "title": "Configuración de usuarios (gestor de órgano unipersonal, perfiles de usuarios con permiso para el módulo de control interno…)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_174"
    },
    {
      "id": "o107",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración de asignación de actuación de control a persona concreta",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_175"
    },
    {
      "id": "o108",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración circuito de resolución plural con gasto",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_176"
    },
    {
      "id": "o109",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Uso del circuito de resolución con gasto plural",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_177"
    },
    {
      "id": "o110",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w3",
      "title": "Mantenimiento de las actuaciones de control configuradas en Hacienda Local",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_179"
    },
    {
      "id": "o111",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w3",
      "title": "Depuración del catálogo vinculación de nuevos circuitos de resolución con gasto a actividad y procedimiento",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_180"
    },
    {
      "id": "o112",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w1",
      "title": "Definir las actuaciones de control en el módulo de Hacienda Local",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_182"
    },
    {
      "id": "o113",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w6",
      "title": "Configuración de Órganos de contratación y Órganos de asistencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_183"
    },
    {
      "id": "o114",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Uso de la app contratación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_184"
    },
    {
      "id": "o115",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w4",
      "title": "Configurar plantillas personalizadas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_185"
    },
    {
      "id": "o116",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w5",
      "title": "Uso de plantillas personalizadas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_186"
    },
    {
      "id": "o117",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Mantenimiento configuración (OC y OA, permisos y sello)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_187"
    },
    {
      "id": "o118",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w2",
      "title": "Implantar el registro de salida",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_188"
    },
    {
      "id": "o119",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w1",
      "title": "Decisión de activar la integración Gestiona - PCSP",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_195"
    },
    {
      "id": "o120",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_199"
    },
    {
      "id": "o121",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Revisión RPT",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_200"
    },
    {
      "id": "o122",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Adaptación espacio fisico y tecnológico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_201"
    },
    {
      "id": "o123",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Vincular series documentales a Órganos Colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_204"
    },
    {
      "id": "o124",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w2",
      "title": "Configurar como obligatoria la Unidad Gestora del expediente",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_205"
    },
    {
      "id": "o125",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w3",
      "title": "Mantenimiento del catálogo de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_207"
    },
    {
      "id": "o126",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w6",
      "title": "Configuración básica de tesauros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_208"
    },
    {
      "id": "o127",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Reforzar una gestión correcta de la normalización de codificación y denominación de grupos de usuarios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_211"
    },
    {
      "id": "o128",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w4",
      "title": "Asignación de metadatos complementarios a series documentales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_212"
    },
    {
      "id": "o129",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w4",
      "title": "Automatización apertura de expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_214"
    },
    {
      "id": "o130",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definición de PGDE y Roles de actuación por el Pleno de la Entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_215"
    },
    {
      "id": "o131",
      "instruction_id": "i5",
      "submatter_id": "s37",
      "work_line_id": "w4",
      "title": "Activación integración backoffice registro de facturas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_216"
    },
    {
      "id": "o132",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con SIA",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_217"
    },
    {
      "id": "o133",
      "instruction_id": "i7",
      "submatter_id": "s35",
      "work_line_id": "w7",
      "title": "Implantar el uso de las búsquedas avanzadas de manera transversal en la entidad, atendiendo a las necesidades particulares de cada area/usuario,",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_220"
    },
    {
      "id": "o134",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w5",
      "title": "Implantar plantillas personalizadas (html)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_222"
    },
    {
      "id": "o135",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w3",
      "title": "Mantenimiento de plantillas personalizadas (html y markdown)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_223"
    },
    {
      "id": "o136",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Configuración de plantillas personalizadas (html)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_224"
    },
    {
      "id": "o137",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Reconvertir plantillas personalizadas viejas (html) en tareas regladas de tipo documento (markdown)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_225"
    },
    {
      "id": "o138",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Cumplimiento de datos básicos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_226"
    },
    {
      "id": "o139",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Configurar tareas regladas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_227"
    },
    {
      "id": "o140",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w5",
      "title": "Tramitar desde pestaña tramitación del expediente",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_228"
    },
    {
      "id": "o141",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Uso plantillas de espúblico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_229"
    },
    {
      "id": "o142",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w1",
      "title": "Cumplimentar metadatos de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_230"
    },
    {
      "id": "o143",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de tareas de Circuito de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_231"
    },
    {
      "id": "o144",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantación de tareas de Circuito de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_232"
    },
    {
      "id": "o145",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de Circuitos de Resolución plurales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_233"
    },
    {
      "id": "o146",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantación de Circuitos de Resolución plurales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_234"
    },
    {
      "id": "o147",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w3",
      "title": "Política gestión correcta de envío de notificaciones y comunicaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_235"
    },
    {
      "id": "o148",
      "instruction_id": "i2",
      "submatter_id": "s38",
      "work_line_id": "w2",
      "title": "Configuración de Órganos Colegiados (comisiones)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_236"
    },
    {
      "id": "o149",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de cambios de estado dentro de los Circuitos de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_237"
    },
    {
      "id": "o150",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la normalización de expedientes y documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_238"
    },
    {
      "id": "o151",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w2",
      "title": "Configuración de piés de recurso",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_241"
    },
    {
      "id": "o152",
      "instruction_id": "i2",
      "submatter_id": "s39",
      "work_line_id": "w2",
      "title": "Configuración órganos unipersonales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_242"
    },
    {
      "id": "o153",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Crear nuevos procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_243"
    },
    {
      "id": "o154",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Implantar la firma en sede de terceros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_245"
    },
    {
      "id": "o155",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w1",
      "title": "Notificaciones con sello de órgano",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_247"
    },
    {
      "id": "o156",
      "instruction_id": "i2",
      "submatter_id": "s40",
      "work_line_id": "w7",
      "title": "Publicar en en tablón",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_249"
    },
    {
      "id": "o157",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w5",
      "title": "Remisión por INSIDE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_250"
    },
    {
      "id": "o158",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Uso de la solicitud de RC desde Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_254"
    },
    {
      "id": "o159",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w3",
      "title": "Revisión y control del procedimiento genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_255"
    },
    {
      "id": "o160",
      "instruction_id": "i1",
      "submatter_id": "s41",
      "work_line_id": "w3",
      "title": "Solicitar el alta de la integración con el Tablón Edictal ünico del BOE (todas las entidades)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_256"
    },
    {
      "id": "o161",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Se realizan actualizaciones periódicas de actualización de la configuración de usuarios, a nivel de grupos y permisos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_257"
    },
    {
      "id": "o162",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Los usuarios apoderados van revisando periódicamente que usuarios deben activarse/desdactivarse y la composición y flujos de trabajo de los grupos de la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_258"
    },
    {
      "id": "o163",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Se ha reforzado la gestión íntegra de los expedientes de contratación integrados con plataformas de contratación externas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_259"
    },
    {
      "id": "o164",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w5",
      "title": "Publicar anuncio de adjudicación/resolución en portal de transparencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_248"
    },
    {
      "id": "o165",
      "instruction_id": "i2",
      "submatter_id": "s42",
      "work_line_id": "w2",
      "title": "Implantar la tramitación de expedientes de la app de padrón",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_260"
    },
    {
      "id": "o166",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Pesonalización de categorías tablón de anuncios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_261"
    },
    {
      "id": "o167",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Configurar nueva imagen sede electrónica ( colores personalizados, banner y banner avisos)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_262"
    },
    {
      "id": "o168",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Desactivación mail aviso entidades con enotum",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_263"
    },
    {
      "id": "o169",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w4",
      "title": "Configuración Páginas informativas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_264"
    },
    {
      "id": "o170",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w4",
      "title": "Configuración de categorías de sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_265"
    },
    {
      "id": "o171",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w3",
      "title": "Mantener actualizado Banner avisos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_266"
    },
    {
      "id": "o172",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Aprobación convenio representación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_267"
    },
    {
      "id": "o173",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w4",
      "title": "Configuración Representación de colectivos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_268"
    },
    {
      "id": "o174",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w5",
      "title": "Implantación Representación de colectivos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_269"
    },
    {
      "id": "o175",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Revisión configuración estados de expedientes (personalizados y genéricos) Revisión estados multidiomas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o176",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Revisión circuitos de tramitación (rol firmante, cambio estado, salida a interesado/representante, asignación salida )",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o177",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w5",
      "title": "Implantación restricción de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o178",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Implantar novedades 2025: Actualización tramitación reglada conforme nuevas funcionalidades (finalizar automáticamente, nuevas opcines de iniciación inmediata, nuevas condiciones al infalizar la tarea, ejecución sin intervención humana",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o179",
      "instruction_id": "i3",
      "submatter_id": "s43",
      "work_line_id": "w3",
      "title": "Revisión terceros (incluir varios mails, por ejemplo para corporación)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o180",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Certificación de usuarios de la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o181",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Implantación del sistema de alertas personalizadas por usuario",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o182",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Reinstalar nueva APP móvil en entidades que hagan uso de la antigua",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o183",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Implantar novedades 2025: OOCC (órgano que resuelve y dictamina; varias resoluciones en una sesión de OOCC; desbloqueo, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    },
    {
      "id": "o184",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Mantenimiento/actualización de piés de recurso",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null
    }
  ]
};
