window.App = window.App || {};
window.App.seedData = {
  "schema_version": 2,
  "seed_version": 6,
  "updated_at": "2026-01-27T00:00:00.000Z",
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
      "legacy_instruction_id": "1",
      "name_i18n": {
        "eu": "KONFIGURAZIO OROKORRA",
        "gl": "CONFIGURACIÓN XERAL",
        "ca": "CONFIGURACIÓ GENERAL",
        "va": "CONFIGURACIÓ GENERAL"
      }
    },
    {
      "id": "i2",
      "commission_id": "c2",
      "name": "MOTOR DE TRAMITACIÓN",
      "legacy_instruction_id": "5",
      "name_i18n": {
        "eu": "IZAPIDETZE-MOTORRA",
        "gl": "MOTOR DE TRAMITACIÓN",
        "ca": "MOTOR DE TRAMITACIÓ",
        "va": "MOTOR DE TRAMITACIÓ"
      }
    },
    {
      "id": "i3",
      "commission_id": "c3",
      "name": "REGISTRO Y ATENCIÓN A LA CIUDADANÍA",
      "legacy_instruction_id": "4",
      "name_i18n": {
        "eu": "ERREGISTROA ETA HERRITARRENTZAKO ARRETA",
        "gl": "REXISTRO E ATENCIÓN Á CIDADANÍA",
        "ca": "REGISTRE I ATENCIÓ A LA CIUTADANIA",
        "va": "REGISTRE I ATENCIÓ A LA CIUTADANIA"
      }
    },
    {
      "id": "i4",
      "commission_id": "c4",
      "name": "GESTIÓN DOCUMENTAL Y ARCHIVO",
      "legacy_instruction_id": "2",
      "name_i18n": {
        "eu": "DOKUMENTUEN KUDEAKETA ETA ARTXIBOA",
        "gl": "XESTIÓN DOCUMENTAL E ARQUIVO",
        "ca": "GESTIÓ DOCUMENTAL I ARXIU",
        "va": "GESTIÓ DOCUMENTAL I ARXIU"
      }
    },
    {
      "id": "i5",
      "commission_id": "c5",
      "name": "CONTROL INTERNO",
      "legacy_instruction_id": "7",
      "name_i18n": {
        "eu": "BARNE-KONTROLA",
        "gl": "CONTROL INTERNO",
        "ca": "CONTROL INTERN",
        "va": "CONTROL INTERN"
      }
    },
    {
      "id": "i6",
      "commission_id": "c5",
      "name": "CONTRATACIÓN",
      "legacy_instruction_id": "6",
      "name_i18n": {
        "eu": "KONTRATAZIOA",
        "gl": "CONTRATACIÓN",
        "ca": "CONTRACTACIÓ",
        "va": "CONTRACTACIÓ"
      }
    },
    {
      "id": "i7",
      "commission_id": "c4",
      "name": "ANALÍTICA DE DATOS",
      "legacy_instruction_id": "3",
      "name_i18n": {
        "eu": "DATUEN ANALISIA",
        "gl": "ANALÍTICA DE DATOS",
        "ca": "ANALÍTICA DE DADES",
        "va": "ANALÍTICA DE DADES"
      }
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
      "sort_order": 7,
      "display_name_i18n": {
        "eu": "E-ADMIN ERAKUNDEA POLITIKA",
        "gl": "POLITICA E-ADMIN ENTIDADE",
        "ca": "POLITICA E-ADMIN ENTITAT",
        "va": "POLITICA E-ADMIN ENTITAT"
      }
    },
    {
      "id": "w2",
      "code": "1",
      "display_name": "UNBOXING",
      "sort_order": 1,
      "display_name_i18n": {
        "eu": "UNBOXING",
        "gl": "UNBOXING",
        "ca": "UNBOXING",
        "va": "UNBOXING"
      }
    },
    {
      "id": "w3",
      "code": "6",
      "display_name": "MANTENIMIENTO ENTIDAD",
      "sort_order": 6,
      "display_name_i18n": {
        "eu": "ERAKUNDEAREN MANTENTZE-LANAK",
        "gl": "MANTEMENTO ENTIDADE",
        "ca": "MANTENIMENT ENTITAT",
        "va": "MANTENIMENT ENTITAT"
      }
    },
    {
      "id": "w4",
      "code": "4",
      "display_name": "CONFIGURACIÓN AVANZADA",
      "sort_order": 4,
      "display_name_i18n": {
        "eu": "KONFIGURAZIO AURRERATUA",
        "gl": "CONFIGURACIÓN AVANZADA",
        "ca": "CONFIGURACIÓ AVANÇADA",
        "va": "CONFIGURACIÓ AVANÇADA"
      }
    },
    {
      "id": "w5",
      "code": "5",
      "display_name": "IMPLANTACIÓN AVANZADA",
      "sort_order": 5,
      "display_name_i18n": {
        "eu": "EZARPEN AURRERATUA",
        "gl": "IMPLANTACIÓN AVANZADA",
        "ca": "IMPLANTACIÓ AVANÇADA",
        "va": "IMPLANTACIÓ AVANÇADA"
      }
    },
    {
      "id": "w6",
      "code": "2",
      "display_name": "CONFIGURACIÓN BÁSICA",
      "sort_order": 2,
      "display_name_i18n": {
        "eu": "OINARRIZKO KONFIGURAZIOA",
        "gl": "CONFIGURACIÓN BÁSICA",
        "ca": "CONFIGURACIÓ BÀSICA",
        "va": "CONFIGURACIÓ BÀSICA"
      }
    },
    {
      "id": "w7",
      "code": "3",
      "display_name": "IMPLANTACIÓN BÁSICA",
      "sort_order": 3,
      "display_name_i18n": {
        "eu": "OINARRIZKO EZARPENA",
        "gl": "IMPLANTACIÓN BÁSICA",
        "ca": "IMPLANTACIÓ BÀSICA",
        "va": "IMPLANTACIÓ BÀSICA"
      }
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
      "legacy_item_code": "IE_001",
      "title_i18n": {
        "eu": "Gutxieneko tresna juridiko-normatiboak onartzea (AE Ordenantza, Politikoak, etab.)",
        "gl": "Aprobar os instrumentos xurídico-normativos mínimos (Ordenanza AE, Políticas etc.)",
        "ca": "Aprovar els instruments jurídic-normatius mínims (Ordenança AE, Polítiques, etc.)",
        "va": "Aprovar els instruments jurídic-normatius mínims (Ordenança AE, Polítiques, etc.)"
      }
    },
    {
      "id": "o2",
      "instruction_id": "i1",
      "submatter_id": "s1",
      "work_line_id": "w1",
      "title": "Firmar el Convenio PMSBAE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_002",
      "title_i18n": {
        "eu": "PMSBAE hitzarmena sinatzea",
        "gl": "Asinar o Convenio PMSBAE",
        "ca": "Signar el Conveni PMSBAE",
        "va": "Firmar el Conveni PMSBAE"
      }
    },
    {
      "id": "o3",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Completar el proceso de Ratificación de Cargos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_003",
      "title_i18n": {
        "eu": "Karguak berresteko prozesua osatzea",
        "gl": "Completar o proceso de Ratificación de Cargos",
        "ca": "Completar el procés de Ratificació de Càrrecs",
        "va": "Completar el procés de Ratificació de Càrrecs"
      }
    },
    {
      "id": "o4",
      "instruction_id": "i1",
      "submatter_id": "s3",
      "work_line_id": "w1",
      "title": "Nombrar funcionarios habilitados para la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_004",
      "title_i18n": {
        "eu": "OAMRrako gaitutako funtzionarioak izendatzea",
        "gl": "Nomear funcionarios habilitados para a OAMR",
        "ca": "Nomenar funcionaris habilitats per a la OAMR",
        "va": "Nomenar funcionaris habilitats per a la OAMR"
      }
    },
    {
      "id": "o5",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Configurar correctamente el calendario de días hábiles",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_005",
      "title_i18n": {
        "eu": "Egun baliodunen egutegia behar bezala konfiguratzea",
        "gl": "Configurar correctamente o calendario de días hábiles",
        "ca": "Configurar correctament el calendari de dies hàbils",
        "va": "Configurar correctament el calendari de dies hàbils"
      }
    },
    {
      "id": "o6",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de los datos de usuarios y grupos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_006",
      "title_i18n": {
        "eu": "Erabiltzaileen eta taldeen datuen kudeaketa egokia indartzea",
        "gl": "Reforzar unha xestión correcta dos datos de usuarios e grupos",
        "ca": "Reforçar una gestió correcta de les dades d'usuaris i grups",
        "va": "Reforçar una gestió correcta de les dades d'usuaris i grups"
      }
    },
    {
      "id": "o7",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w4",
      "title": "Configuración avanzada plantillas de OOCC",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_012",
      "title_i18n": {
        "eu": "OOCC txantiloien konfigurazio aurreratua",
        "gl": "Configuración avanzada persoais de OOCC",
        "ca": "Configuració avançada plantilles de OOCC",
        "va": "Configuració avançada plantilles de OOCC"
      }
    },
    {
      "id": "o8",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w1",
      "title": "Configurar redes sociales para retransmisión en directo desde la sede",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_014",
      "title_i18n": {
        "eu": "Sare sozialak konfiguratu egoitzatik zuzenean emateko",
        "gl": "Configurar redes sociais para retransmisión en directo desde a sede",
        "ca": "Configurar xarxes socials per a retransmissió en directe des de la seu",
        "va": "Configurar xarxes socials per a retransmissió en directe des de la seu"
      }
    },
    {
      "id": "o9",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w4",
      "title": "Asignación de grupos a series documentales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_016",
      "title_i18n": {
        "eu": "Dokumentu-segidei taldeak esleitzea",
        "gl": "Asignación de grupos a series documentais",
        "ca": "Assignació de grups a sèries documentals",
        "va": "Assignació de grups a sèries documentals"
      }
    },
    {
      "id": "o10",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Vincular series documentales al catálogo de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_019",
      "title_i18n": {
        "eu": "Dokumentu-serieak prozeduren katalogoarekin lotzea",
        "gl": "Vincular series documentais ao catálogo de procedementos",
        "ca": "Vincular sèries documentals al catàleg de procediments",
        "va": "Vincular sèries documentals al catàleg de procediments"
      }
    },
    {
      "id": "o11",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Carga del Cuadro de Clasificación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_020",
      "title_i18n": {
        "eu": "Sailkapen-koadroaren karga",
        "gl": "Carga do Cadro de Clasificación",
        "ca": "Càrrega del Quadre de Classificació",
        "va": "Càrrega del Quadre de Classificació"
      }
    },
    {
      "id": "o12",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w5",
      "title": "Implantar trámites externos avanzados (condicionales, tesauros inteligentes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_023",
      "title_i18n": {
        "eu": "Kanpoko izapide aurreratuak ezartzea (baldintzazkoak, tesauro adimendunak, etab.)",
        "gl": "Implantar trámites externos avanzados (condicionais, tesauros intelixentes etc.) ",
        "ca": "Implantar tràmits externs avançats (condicionals, tesaurus intel·ligents, etc.)",
        "va": "Implantar tràmits externs avançats (condicionals, tesaurus intel·ligents, etc.)"
      }
    },
    {
      "id": "o13",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w2",
      "title": "Implantar el módulo de Registro de Entrada",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_025",
      "title_i18n": {
        "eu": "Sarrera-erregistroaren modulua ezartzea",
        "gl": "Implantar o módulo de Rexistro de Entrada",
        "ca": "Implantar el mòdul de Registre d'Entrada",
        "va": "Implantar el mòdul de Registre d'Entrada"
      }
    },
    {
      "id": "o14",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Configuración de Notificaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_026",
      "title_i18n": {
        "eu": "Jakinarazpenen konfigurazioa",
        "gl": "Configuración de Notificacións",
        "ca": "Configuració de Notificacions",
        "va": "Configuració de Notificacions"
      }
    },
    {
      "id": "o15",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Implantar la Copia Auténtica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_028",
      "title_i18n": {
        "eu": "Kopia autentikoa ezartzea",
        "gl": "Implantar a Copia Auténtica",
        "ca": "Implantar la Còpia Autèntica",
        "va": "Implantar la Còpia Autèntica"
      }
    },
    {
      "id": "o16",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta del Registro (finalización de anotaciones, asociación de expedientes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_029",
      "title_i18n": {
        "eu": "Erregistroaren kudeaketa egokia indartzea (idatzoharrak amaitzea, espedienteak lotzea, etab.)",
        "gl": "Reforzar unha xestión correcta do Rexistro (finalización de anotacións, asociación de expedientes etc.)",
        "ca": "Reforçar una gestió correcta del Registre (finalització d'anotacions, associació d'expedients, etc.)",
        "va": "Reforçar una gestió correcta del Registre (finalització d'anotacions, associació d'expedients, etc.)"
      }
    },
    {
      "id": "o17",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w1",
      "title": "Definir una política de gestión y mantenimiento del registro",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_031",
      "title_i18n": {
        "eu": "Erregistroa kudeatzeko eta mantentzeko politika definitzea",
        "gl": "Definir unha política de xestión e mantemento do rexistro",
        "ca": "Definir una política de gestió i manteniment del registre",
        "va": "Definir una política de gestió i manteniment del registre"
      }
    },
    {
      "id": "o18",
      "instruction_id": "i3",
      "submatter_id": "s10",
      "work_line_id": "w3",
      "title": "Rellenar resultado de las notificaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_033",
      "title_i18n": {
        "eu": "Jakinarazpenen emaitza bete",
        "gl": "Encher resultado das notificacións",
        "ca": "Emplenar resultat de les notificacions",
        "va": "Emplenar resultat de les notificacions"
      }
    },
    {
      "id": "o19",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w4",
      "title": "Configuración de Temas y Categorías de registro",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_034",
      "title_i18n": {
        "eu": "Erregistro-gaiak eta -kategoriak konfiguratzea",
        "gl": "Configuración de Temas e Categorías de rexistro",
        "ca": "Configuració de Temes i Categories de registre",
        "va": "Configuració de Temes i Categories de registre"
      }
    },
    {
      "id": "o20",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con SIR / MUX para el intercambio de registros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_036",
      "title_i18n": {
        "eu": "SIR/MUXekiko integrazioa aktibatzea, erregistroak trukatzeko",
        "gl": "Activar a integración con SIR / MUX para o intercambio de rexistros",
        "ca": "Activar la integració amb SIR / MUX per a l'intercanvi de registres",
        "va": "Activar la integració amb SIR / MUX per a l'intercanvi de registres"
      }
    },
    {
      "id": "o21",
      "instruction_id": "i3",
      "submatter_id": "s10",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la bandeja SIR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_037",
      "title_i18n": {
        "eu": "SIR erretiluaren kudeaketa egokia indartzea",
        "gl": "Reforzar unha xestión correcta da bandexa SIR",
        "ca": "Reforçar una gestió correcta de la safata SIR",
        "va": "Reforçar una gestió correcta de la safata SIR"
      }
    },
    {
      "id": "o22",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con Notifica / eNotum",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_039",
      "title_i18n": {
        "eu": "Aktibatu integrazioa Notifica/eNotum bidez",
        "gl": "Activar a integración con Notifica / eNotum",
        "ca": "Activar la integració amb Notifica / eNotum",
        "va": "Activar la integració amb Notifica / eNotum"
      }
    },
    {
      "id": "o23",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w6",
      "title": "Activar la integración con el Tablón Edictal Único del BOE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_040",
      "title_i18n": {
        "eu": "BOEko ediktu-taula bakarrarekiko integrazioa aktibatzea",
        "gl": "Activar a integración co Taboleiro Edictal Único do BOE",
        "ca": "Activar la integració amb el Tauló Edictal Únic del BOE",
        "va": "Activar la integració amb el Tauló Edictal Únic del BOE"
      }
    },
    {
      "id": "o24",
      "instruction_id": "i3",
      "submatter_id": "s12",
      "work_line_id": "w4",
      "title": "Activar la integración con los CIEs de Notifica para Impresión y ensobrado",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_041",
      "title_i18n": {
        "eu": "Aktibatu Notifikazioko CIEekiko integrazioa inprimatzeko eta gutun-azaletarako",
        "gl": "Activar a integración cos CIEs de Notifica para Impresión e ensobrado",
        "ca": "Activar la integració amb els CIEs de Notifica per a Impressió i ensobrat",
        "va": "Activar la integració amb els CIEs de Notifica per a Impressió i ensobrat"
      }
    },
    {
      "id": "o25",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Implantación de trámites externos en OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_042",
      "title_i18n": {
        "eu": "Kanpoko izapideak ezartzea OAMRn",
        "gl": "Implantación de trámites externos en OAMR",
        "ca": "Implantació de tràmits externs en OAMR",
        "va": "Implantació de tràmits externs en OAMR"
      }
    },
    {
      "id": "o26",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w5",
      "title": "Implantar la Firma Biométrica en la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_043",
      "title_i18n": {
        "eu": "Sinadura biometrikoa ezartzea OAMRn",
        "gl": "Implantar a Firma Biométrica na OAMR",
        "ca": "Implantar la Signatura Biomètrica en la OAMR",
        "va": "Implantar la Firma Biomètrica en la OAMR"
      }
    },
    {
      "id": "o27",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Implantación módulo de sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_048",
      "title_i18n": {
        "eu": "Egoitza elektronikoaren modulua ezartzea",
        "gl": "Implantación módulo de sede electrónica",
        "ca": "Implantació mòdul de seu electrònica",
        "va": "Implantació mòdul de seu electrònica"
      }
    },
    {
      "id": "o28",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración de Cl@ve / IDCAT Móbil",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_049",
      "title_i18n": {
        "eu": "Aktibatu Cl@ve/IDCAT Mobilen integrazioa",
        "gl": "Activar a integración de Cl@ve / IDCAT Móbil",
        "ca": "Activar la integració de Cl@ve / IDCAT Móbil",
        "va": "Activar la integració de Cl@ve / IDCAT Móbil"
      }
    },
    {
      "id": "o29",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w6",
      "title": "Activar la integración de Apodera",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_050",
      "title_i18n": {
        "eu": "Apoderaren integrazioa aktibatzea",
        "gl": "Activar a integración de Apodera",
        "ca": "Activar la integració de Apodera",
        "va": "Activar la integració de Apodera"
      }
    },
    {
      "id": "o30",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso de la Sede Electrónica para Empleados (licencias, vacaciones, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_052",
      "title_i18n": {
        "eu": "Enplegatuentzako egoitza elektronikoaren erabilera bultzatzea (lizentziak, oporrak, etab.)",
        "gl": "Impulsar o uso da Sede electrónica para Empregados (licenzas, vacacións etc.) ",
        "ca": "Impulsar l'ús de la Seu Electrònica per a Empleats (llicències, vacances, etc.)",
        "va": "Impulsar l'ús de la Seu Electrònica per a Empleats (llicències, vacacions, etc.)"
      }
    },
    {
      "id": "o31",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso de la Sede Electrónica de los Cargos Públicos (asistencia a órganos, registro..)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_053",
      "title_i18n": {
        "eu": "Kargu publikoen egoitza elektronikoaren erabilera bultzatzea (organoetara joatea, erregistroa...)",
        "gl": "Impulsar o uso da Sede electrónica dos Cargos Públicos (asistencia a órganos, rexistro..)",
        "ca": "Impulsar l'ús de la Seu Electrònica dels Càrrecs Públics (assistència a òrgans, registre..)",
        "va": "Impulsar l'ús de la Seu Electrònica dels Càrrecs Públics (assistència a òrgans, registre..)"
      }
    },
    {
      "id": "o32",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w1",
      "title": "Impulsar el uso del portafirmas ciudadano en Sede Electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_054",
      "title_i18n": {
        "eu": "Herritarren portafirmen erabilera bultzatzea egoitza elektronikoan",
        "gl": "Impulsar o uso do portasinaturas cidadán en Sede electrónica",
        "ca": "Impulsar l'ús del portafirmes ciutadà en Seu Electrònica",
        "va": "Impulsar l'ús del portafirmes ciutadà en Seu Electrònica"
      }
    },
    {
      "id": "o33",
      "instruction_id": "i1",
      "submatter_id": "s14",
      "work_line_id": "w5",
      "title": "Implantar petición automatizada de documentos individuales de padrón en sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_055",
      "title_i18n": {
        "eu": "Errolda-agiri indibidualen eskaera automatizatua ezartzea egoitza elektronikoan",
        "gl": "Implantar petición automatizada de documentos individuais de padrón en sede electrónica",
        "ca": "Implantar petició automatitzada de documents individuals de padró en seu electrònica",
        "va": "Implantar petició automatitzada de documents individuals de padró en seu electrònica"
      }
    },
    {
      "id": "o34",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Configuración general sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_056",
      "title_i18n": {
        "eu": "Egoitza elektronikoaren konfigurazio orokorra",
        "gl": "Configuración xeral sede electrónica",
        "ca": "Configuració general seu electrònica",
        "va": "Configuració general seu electrònica"
      }
    },
    {
      "id": "o35",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w7",
      "title": "Implantar el tablón de anuncios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_057",
      "title_i18n": {
        "eu": "Iragarki-taula ezartzea",
        "gl": "Implantar o taboleiro de anuncios",
        "ca": "Implantar el tauler d'anuncis",
        "va": "Implantar el tauler d'anuncis"
      }
    },
    {
      "id": "o36",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w7",
      "title": "Implantar el módulo de transparencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_058",
      "title_i18n": {
        "eu": "Gardentasun-modulua ezartzea",
        "gl": "Implantar o módulo de transparency",
        "ca": "Implantar el mòdul de transparència",
        "va": "Implantar el mòdul de transparència"
      }
    },
    {
      "id": "o37",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w2",
      "title": "Configurar que no pueda utilizarse el procedimiento genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_060",
      "title_i18n": {
        "eu": "Prozedura generikoa ezin dela erabili konfiguratzea",
        "gl": "Configurar que non poida utilizarse o procedemento xenérico",
        "ca": "Configurar que no pugui utilitzar-se el procediment genèric",
        "va": "Configurar que no puga utilitzar-se el procediment genèric"
      }
    },
    {
      "id": "o38",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definir una política de normalización de expedientes y documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_062",
      "title_i18n": {
        "eu": "Espedienteak eta dokumentuak normalizatzeko politika definitzea",
        "gl": "Definir unha política de normalización de expedientes e documentos",
        "ca": "Definir una política de normalització d'expedients i documents",
        "va": "Definir una política de normalització d'expedients i documents"
      }
    },
    {
      "id": "o39",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w6",
      "title": "Configurar reglas de apertura, uso y asignación del catálogo de actividades y procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_063",
      "title_i18n": {
        "eu": "Jardueren eta prozeduren katalogoa irekitzeko, erabiltzeko eta esleitzeko arauak konfiguratzea",
        "gl": "Configurar regras de apertura, uso e asignación do catálogo de actividades e procedementos",
        "ca": "Configurar regles d'obertura, ús i assignació del catàleg d'activitats i procediments",
        "va": "Configurar regles d'obertura, ús i assignació del catàleg d'activitats i procediments"
      }
    },
    {
      "id": "o40",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w7",
      "title": "Reforzar una gestión correcta del cerrado y revisión para transferencia de los expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_071",
      "title_i18n": {
        "eu": "Itxiaren kudeaketa egokia eta espedienteen transferentziarako berrikuspena indartzea",
        "gl": "Reforzar unha xestión correcta do pechado e revisión para transferencia dos expedientes",
        "ca": "Reforçar una gestió correcta del tancat i revisió per a transferència dels expedients",
        "va": "Reforçar una gestió correcta del tancat i revisió per a transferència dels expedients"
      }
    },
    {
      "id": "o41",
      "instruction_id": "i4",
      "submatter_id": "s17",
      "work_line_id": "w3",
      "title": "Reclasificar el histórico de expedientes en base al cuadro de clasificación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_072",
      "title_i18n": {
        "eu": "Espedienteen historikoa sailkapen-taularen arabera birsailkatzea",
        "gl": "Reclasificar o histórico de expedientes en base ao cadro de clasificación",
        "ca": "Reclassificar l'històric d'expedients sobre la base del quadre de classificació",
        "va": "Reclassificar l'històric d'expedients sobre la base del quadre de classificació"
      }
    },
    {
      "id": "o42",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w3",
      "title": "Realizar una limpieza de las descripciones de los expedientes (datos básicos, terceros, catastro…)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_074",
      "title_i18n": {
        "eu": "Espedienteen deskribapenak garbitzea (oinarrizko datuak, hirugarrenak, katastroa...)",
        "gl": "Realizar unha limpeza das descricións dos expedientes (datos básicos, terceiros, catastro…)",
        "ca": "Realitzar una neteja de les descripcions dels expedients (dades bàsiques, tercers, cadastre…)",
        "va": "Realitzar una neteja de les descripcions dels expedients (dades bàsiques, tercers, cadastre…)"
      }
    },
    {
      "id": "o43",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w4",
      "title": "Activar la integración con INSIDE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_075",
      "title_i18n": {
        "eu": "INSIDErekiko integrazioa aktibatzea",
        "gl": "Activar a integración con INSIDE",
        "ca": "Activar la integració amb INSIDE",
        "va": "Activar la integració amb INSIDE"
      }
    },
    {
      "id": "o44",
      "instruction_id": "i4",
      "submatter_id": "s18",
      "work_line_id": "w2",
      "title": "Vinculación series documentales a funcionalidad libros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_076",
      "title_i18n": {
        "eu": "Dokumentu-segidak liburuen funtzionaltasunarekin lotzea",
        "gl": "Vinculación series documentais a funcionalidade libros",
        "ca": "Vinculació sèries documentals a funcionalitat llibres",
        "va": "Vinculació sèries documentals a funcionalitat llibres"
      }
    },
    {
      "id": "o45",
      "instruction_id": "i1",
      "submatter_id": "s19",
      "work_line_id": "w2",
      "title": "Activar los servicios de certificación de esFIRMA",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_077",
      "title_i18n": {
        "eu": "Aktibatu esFIRMA ziurtapen-zerbitzuak",
        "gl": "Activar os servizos de certificación de esFIRMA",
        "ca": "Activar els serveis de certificació de esFIRMA",
        "va": "Activar els servicis de certificació de esFIRMA"
      }
    },
    {
      "id": "o46",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar las Tarjetas virtuales de Firma entre los usuarios con permiso de firma",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_079",
      "title_i18n": {
        "eu": "Sinadura-txartel birtualak zabaldu sinadura-baimena duten erabiltzaileen artean",
        "gl": "Despregar as Tarxetas virtuais de Firma entre os usuarios con permiso de firma",
        "ca": "Desplegar les Targetes virtuals de Signatura entre els usuaris amb permís de signatura",
        "va": "Desplegar les Targetes virtuals de Firma entre els usuaris amb permís de firma"
      }
    },
    {
      "id": "o47",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar las Tarjetas virtuales de Firma (con seudónimo) entre los usuarios con permiso de firma",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_080",
      "title_i18n": {
        "eu": "Sinadura-txartel birtualak (ezizenarekin) zabaldu sinadura-baimena duten erabiltzaileen artean",
        "gl": "Despregar as Tarxetas virtuais de Firma (con pseudónimo) entre os usuarios con permiso de firma",
        "ca": "Desplegar les Targetes virtuals de Signatura (amb pseudònim) entre els usuaris amb permís de signatura",
        "va": "Desplegar les Targetes virtuals de Firma (amb pseudònim) entre els usuaris amb permís de firma"
      }
    },
    {
      "id": "o48",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Desplegar APP Móvil entre los usuarios con permiso de firma y/o validación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_081",
      "title_i18n": {
        "eu": "APP mugikorra zabaldu sinadura- eta/edo balidazio-baimena duten erabiltzaileen artean",
        "gl": "Despregar APP Móbil entre os usuarios con permiso de firma e/o validación",
        "ca": "Desplegar APP Mòbil entre els usuaris amb permís de signatura i/o validació",
        "va": "Desplegar APP Mòbil entre els usuaris amb permís de firma i/o validació"
      }
    },
    {
      "id": "o49",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Implantar Actuaciones Administrativas Automatizadas con Sello de Órgano",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_083",
      "title_i18n": {
        "eu": "Organo-zigilua duten administrazio-jarduera automatizatuak ezartzea",
        "gl": "Implantar Actuacións Administrativas Automatizadas con Selo de Órgano",
        "ca": "Implantar Actuacions Administratives Automatitzades amb Segell d'Òrgan",
        "va": "Implantar Actuacions Administratives Automatitzades amb Segell d'Òrgan"
      }
    },
    {
      "id": "o50",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w7",
      "title": "Implantar el módulo de validación de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_085",
      "title_i18n": {
        "eu": "Dokumentuak baliozkotzeko modulua ezartzea",
        "gl": "Implantar o módulo de validación de documentos",
        "ca": "Implantar el mòdul de validació de documents",
        "va": "Implantar el mòdul de validació de documents"
      }
    },
    {
      "id": "o51",
      "instruction_id": "i2",
      "submatter_id": "s22",
      "work_line_id": "w2",
      "title": "Implantar circuitos de tramitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_087",
      "title_i18n": {
        "eu": "Izapidetze-zirkuituak ezartzea",
        "gl": "Implantar circuítos de tramitación",
        "ca": "Implantar circuits de tramitació",
        "va": "Implantar circuits de tramitació"
      }
    },
    {
      "id": "o52",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Definir circuitos de tramitación para centros gestores específicos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_089",
      "title_i18n": {
        "eu": "Berariazko zentro kudeatzaileetarako izapidetze-zirkuituak definitzea",
        "gl": "Definir circuítos de tramitación para centros xestores específicos",
        "ca": "Definir circuits de tramitació per a centres gestors específics",
        "va": "Definir circuits de tramitació per a centres gestors específics"
      }
    },
    {
      "id": "o53",
      "instruction_id": "i2",
      "submatter_id": "s22",
      "work_line_id": "w3",
      "title": "Reforzar una correcta gestión de los circuitos de tramitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_090",
      "title_i18n": {
        "eu": "Izapidetze-zirkuituen kudeaketa egokia indartzea",
        "gl": "Reforzar unha correcta xestión dos circuítos de tramitación",
        "ca": "Reforçar una correcta gestió dels circuits de tramitació",
        "va": "Reforçar una correcta gestió dels circuits de tramitació"
      }
    },
    {
      "id": "o54",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w2",
      "title": "Implantación de Gestiona Envía",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_092",
      "title_i18n": {
        "eu": "Kudeaketa bidaltzailea ezartzea",
        "gl": "Implantación de Xestiona Envía",
        "ca": "Implantació de Gestiona Envia",
        "va": "Implantació de Gestiona Envia"
      }
    },
    {
      "id": "o55",
      "instruction_id": "i2",
      "submatter_id": "s23",
      "work_line_id": "w2",
      "title": "Implantar el módulo de libros oficiales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_093",
      "title_i18n": {
        "eu": "Liburu ofizialen modulua ezartzea",
        "gl": "Implantar o módulo de libros oficiais",
        "ca": "Implantar el mòdul de llibres oficials",
        "va": "Implantar el mòdul de llibres oficials"
      }
    },
    {
      "id": "o56",
      "instruction_id": "i1",
      "submatter_id": "s24",
      "work_line_id": "w6",
      "title": "Encajar el DIR3 de la entidad con la clasificación contable orgánica (sólo para facturas)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_094",
      "title_i18n": {
        "eu": "Erakundearen DIR3 kontabilitate-sailkapen organikoarekin bat etortzea (fakturetarako soilik)",
        "gl": "Encaixar o DIR3 da entidade coa clasificación contable orgánica (só para facturas)",
        "ca": "Encaixar el DIR3 de l'entitat amb la classificació comptable orgànica (només per a factures)",
        "va": "Encaixar el DIR3 de l'entitat amb la classificació comptable orgànica (només per a factures)"
      }
    },
    {
      "id": "o57",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w2",
      "title": "Implantar el módulo de Órganos Colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_095",
      "title_i18n": {
        "eu": "Kide anitzeko organoen modulua ezartzea",
        "gl": "Implantar o módulo de Órganos Colexiados",
        "ca": "Implantar el mòdul d'Òrgans Col·legiats",
        "va": "Implantar el mòdul d'Òrgans Col·legiats"
      }
    },
    {
      "id": "o58",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Reforzar y optimizar la gestión de los órganos colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_096",
      "title_i18n": {
        "eu": "Kide anitzeko organoen kudeaketa indartzea eta optimizatzea",
        "gl": "Reforzar e optimizar a xestión dos órganos colexiados",
        "ca": "Reforçar i optimitzar la gestió dels òrgans col·legiats",
        "va": "Reforçar i optimitzar la gestió dels òrgans col·legiats"
      }
    },
    {
      "id": "o59",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Activación del módulo de archivo",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_098",
      "title_i18n": {
        "eu": "Artxibo-modulua aktibatzea",
        "gl": "Activación do módulo de arquivo",
        "ca": "Activació del mòdul d'arxiu",
        "va": "Activació del mòdul d'arxiu"
      }
    },
    {
      "id": "o60",
      "instruction_id": "i5",
      "submatter_id": "s25",
      "work_line_id": "w2",
      "title": "Implantar del módulo de registro de facturas en Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_101",
      "title_i18n": {
        "eu": "Kudeatzailean fakturak erregistratzeko modulua ezartzea",
        "gl": "Implantar do módulo de rexistro de facturas en Xestiona",
        "ca": "Implantar del mòdul de registre de factures en Gestiona",
        "va": "Implantar del mòdul de registre de factures en Gestiona"
      }
    },
    {
      "id": "o61",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Implantar el módulo de tareas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_102",
      "title_i18n": {
        "eu": "Zereginen modulua ezartzea",
        "gl": "Implantar o módulo de tarefas",
        "ca": "Implantar el mòdul de tasques",
        "va": "Implantar el mòdul de tasques"
      }
    },
    {
      "id": "o62",
      "instruction_id": "i5",
      "submatter_id": "s25",
      "work_line_id": "w2",
      "title": "Implantar la conformidad de la factura en Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_103",
      "title_i18n": {
        "eu": "Fakturaren adostasuna ezartzea Kudeatzailean",
        "gl": "Implantar a conformidade da factura en Xestiona",
        "ca": "Implantar la conformitat de la factura en Gestiona",
        "va": "Implantar la conformitat de la factura en Gestiona"
      }
    },
    {
      "id": "o63",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Implantar el procedimiento de gestión de contratos menores sin licitación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_105",
      "title_i18n": {
        "eu": "Lizitaziorik gabeko kontratu txikiak kudeatzeko prozedura ezartzea",
        "gl": "Implantar o procedemento de xestión de contratos menores sen licitación",
        "ca": "Implantar el procediment de gestió de contractes menors sense licitació",
        "va": "Implantar el procediment de gestió de contractes menors sense licitació"
      }
    },
    {
      "id": "o64",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w5",
      "title": "Implantar módulo de videoconferencias",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_110",
      "title_i18n": {
        "eu": "Bideokonferentzien modulua ezartzea",
        "gl": "Implantar módulo de videoconferencias",
        "ca": "Implantar mòdul de videoconferències",
        "va": "Implantar mòdul de videoconferències"
      }
    },
    {
      "id": "o65",
      "instruction_id": "i2",
      "submatter_id": "s27",
      "work_line_id": "w1",
      "title": "Implantar una filosofía de trabajo colaborativo en la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_112",
      "title_i18n": {
        "eu": "Erakundean elkarlanerako filosofia ezartzea",
        "gl": "Implantar unha filosofía de traballo colaborativo na entidade",
        "ca": "Implantar una filosofia de treball col·laboratiu en l'entitat",
        "va": "Implantar una filosofia de treball col·laboratiu en l'entitat"
      }
    },
    {
      "id": "o66",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w2",
      "title": "Implantar módulo de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_113",
      "title_i18n": {
        "eu": "Aurretiko hitzorduaren modulua ezartzea",
        "gl": "Implantar módulo de cita previa",
        "ca": "Implantar mòdul de cita prèvia",
        "va": "Implantar mòdul de cita prèvia"
      }
    },
    {
      "id": "o67",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Implantar el módulo de firma Electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_114",
      "title_i18n": {
        "eu": "Sinadura elektronikoaren modulua ezartzea",
        "gl": "Implantar o módulo de firma Electrónica",
        "ca": "Implantar el mòdul de signatura Electrònica",
        "va": "Implantar el mòdul de firma Electrònica"
      }
    },
    {
      "id": "o68",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Implantar la licitación electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_115",
      "title_i18n": {
        "eu": "Lizitazio elektronikoa ezartzea",
        "gl": "Implantar a licitación electrónica",
        "ca": "Implantar la licitació electrònica",
        "va": "Implantar la licitació electrònica"
      }
    },
    {
      "id": "o69",
      "instruction_id": "i3",
      "submatter_id": "s28",
      "work_line_id": "w3",
      "title": "Envío de comunicaciones interadministrativas desde los expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_117",
      "title_i18n": {
        "eu": "Espedienteetatik administrazioen arteko komunikazioak bidaltzea",
        "gl": "Envío de comunicacións interadministrativas desde os expedientes",
        "ca": "Enviament de comunicacions interadministratives des dels expedients",
        "va": "Enviament de comunicacions interadministratives des dels expedients"
      }
    },
    {
      "id": "o70",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w1",
      "title": "Definir una política de administración de usuarios y grupos (delegaciones, permisos, plantillas de roles, etc. )",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_121",
      "title_i18n": {
        "eu": "Erabiltzaileak eta taldeak administratzeko politika definitzea (ordezkaritzak, baimenak, rol-plantillak, etab.)",
        "gl": "Definir unha política de administración de usuarios e grupos (delegacións, permisos, persoais de roles etc. )",
        "ca": "Definir una política d'administració d'usuaris i grups (delegacions, permisos, plantilles de rols, etc. )",
        "va": "Definir una política d'administració d'usuaris i grups (delegacions, permisos, plantilles de rols, etc. )"
      }
    },
    {
      "id": "o71",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w6",
      "title": "Implantar la funcionalidad de plantillas de usuarios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_124",
      "title_i18n": {
        "eu": "Erabiltzaileen plantillen funtzionaltasuna ezartzea",
        "gl": ") Implantar a funcionalidade de persoais de usuarios",
        "ca": "Implantar la funcionalitat de plantilles d'usuaris ",
        "va": "Implantar la funcionalitat de plantilles d'usuaris"
      }
    },
    {
      "id": "o72",
      "instruction_id": "i5",
      "submatter_id": "s29",
      "work_line_id": "w5",
      "title": "Uso de textos predefinidos Control Interno",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_125",
      "title_i18n": {
        "eu": "Aurrez definitutako testuen erabilera Barne Kontrola",
        "gl": "Uso de textos predefinidos Control Interno",
        "ca": "Ús de textos predefinits Control Intern",
        "va": "Ús de textos predefinits Control Intern"
      }
    },
    {
      "id": "o73",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w5",
      "title": "Uso de textos predefinidos contratación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_126",
      "title_i18n": {
        "eu": "Aurrez definitutako testuen erabilera kontratazioa",
        "gl": "Uso de textos predefinidos contratación",
        "ca": "Ús de textos predefinits contractació",
        "va": "Ús de textos predefinits contractació"
      }
    },
    {
      "id": "o74",
      "instruction_id": "i4",
      "submatter_id": "s31",
      "work_line_id": "w2",
      "title": "Vinculación de series documentales a APP facturas / Certificados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_127",
      "title_i18n": {
        "eu": "Dokumentu-serieak APPrekin lotzea fakturak/ziurtagiriak",
        "gl": "Vinculación de series documentais a APP facturas / Certificados",
        "ca": "Vinculació de sèries documentals a APP factures / Certificats",
        "va": "Vinculació de sèries documentals a APP factures / Certificats"
      }
    },
    {
      "id": "o75",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w5",
      "title": "Implantación de procedimientos personalizados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_128",
      "title_i18n": {
        "eu": "Prozedura pertsonalizatuak ezartzea",
        "gl": "Implantación de procedementos personalizados",
        "ca": "Implantació de procediments personalitzats",
        "va": "Implantació de procediments personalitzats"
      }
    },
    {
      "id": "o76",
      "instruction_id": "i3",
      "submatter_id": "s32",
      "work_line_id": "w6",
      "title": "Definir automatismos en la asignación de registros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_130",
      "title_i18n": {
        "eu": "Automatismoak definitzea erregistroak esleitzean",
        "gl": "Definir automatismos na asignación de rexistros",
        "ca": "Definir automatismes en l'assignació de registres",
        "va": "Definir automatismes en l'assignació de registres"
      }
    },
    {
      "id": "o77",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w1",
      "title": "Implantar cultura de única vía de resolución mediante circuito de resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_133",
      "title_i18n": {
        "eu": "Suntsiarazpen-bide bakarraren kultura ezartzea, suntsiarazpen-zirkuituaren bidez",
        "gl": "Implantar cultura de única vía de resolución mediante circuíto de resolución",
        "ca": "Implantar cultura d'única via de resolució mitjançant circuit de resolució",
        "va": "Implantar cultura d'única via de resolució mitjançant circuit de resolució"
      }
    },
    {
      "id": "o78",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración avanzada de CR (plantillas, tesauros, automatismos, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_134",
      "title_i18n": {
        "eu": "CRen konfigurazio aurreratua (txantiloiak, tesauroak, automatismoak, etab.)",
        "gl": "Configuración avanzada de CR (persoais, tesauros, automatismos etc.) ",
        "ca": "Configuració avançada de CR (plantilles, tesaurus, automatismes, etc.)",
        "va": "Configuració avançada de CR (plantilles, tesaurus, automatismes, etc.)"
      }
    },
    {
      "id": "o79",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w6",
      "title": "Configuración básica de CR sin gasto: asociación de CR en blanco al inventario de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_135",
      "title_i18n": {
        "eu": "Gasturik gabeko CRen oinarrizko konfigurazioa: CR zuriak prozeduren inbentarioarekin lotzea",
        "gl": "Configuración básica de CR sen gasto: asociación de CR en branco ao inventario de procedementos",
        "ca": "Configuració bàsica de CR sense despesa: associació de CR en blanc a l'inventari de procediments",
        "va": "Configuració bàsica de CR sense gasto: associació de CR en blanc a l'inventari de procediments"
      }
    },
    {
      "id": "o80",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantar CR sin gasto avanzados (plantillas, tesauros, automatismos, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_136",
      "title_i18n": {
        "eu": "CR gastu aurreraturik gabe ezartzea (txantiloiak, tesauroak, automatismoak, etab.)",
        "gl": "Implantar CR sen gasto avanzados (persoais, tesauros, automatismos etc.) ",
        "ca": "Implantar CR sense despesa avançats (plantilles, tesaurus, automatismes, etc.)",
        "va": "Implantar CR sense gasto avançats (plantilles, tesaurus, automatismes, etc.)"
      }
    },
    {
      "id": "o81",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w2",
      "title": "Implantación CR genérico sin gasto",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_137",
      "title_i18n": {
        "eu": "CR generikoa ezartzea, gasturik gabe",
        "gl": "Implantación CR xenérico sen gasto",
        "ca": "Implantació CR genèric sense despesa",
        "va": "Implantació CR genèric sense gasto"
      }
    },
    {
      "id": "o82",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Reforzar la gestión íntegra de los expedientes de contratación integrados con plataformas de contratación externas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_143",
      "title_i18n": {
        "eu": "Kanpoko kontratazio-plataformekin integratutako kontratazio-espedienteen kudeaketa osoa indartzea",
        "gl": "Reforzar a xestión íntegra dos expedientes de contratación integrados con plataformas de contratación externas",
        "ca": "Reforçar la gestió íntegra dels expedients de contractació integrats amb plataformes de contractació externes",
        "va": "Reforçar la gestió íntegra dels expedients de contractació integrats amb plataformes de contractació externes"
      }
    },
    {
      "id": "o83",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w6",
      "title": "Asociar las actuaciones de control sincronizadas desde el módulo de diseño a activades y procedimientos del catálogo",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_144",
      "title_i18n": {
        "eu": "Diseinu-modulutik katalogoko aktibitate eta prozeduretara sinkronizatutako kontrol-jardunak lotu",
        "gl": "Asociar as actuacións de control sincronizadas desde o módulo de deseño a activades e procedementos do catálogo",
        "ca": "Associar les actuacions de control sincronitzades des del mòdul de disseny a activades i procediments del catàleg",
        "va": "Associar les actuacions de control sincronitzades des del mòdul de disseny a activades i procediments del catàleg"
      }
    },
    {
      "id": "o84",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w7",
      "title": "Implantar los circuitos de resolución con gasto específicos asociados a actividad y a procedimiento (sin contenido en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_145",
      "title_i18n": {
        "eu": "Jarduerari eta prozedurari lotutako gastu espezifikoak dituzten ebazpen-zirkuituak ezartzea (proposamen-txantiloietan edukirik ez dutenak)",
        "gl": "Implantar os circuítos de resolución con gasto específicos asociados a actividade e a procedemento (sen contido nos persoais de proposta)",
        "ca": "Implantar els circuits de resolució amb despesa específics associats a activitat i a procediment (sense contingut en les plantilles de proposta)",
        "va": "Implantar els circuits de resolució amb gasto específics associats a activitat i a procediment (sense contingut en les plantilles de proposta)"
      }
    },
    {
      "id": "o85",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configurar el circuito de resolución con gasto específico (con contenido y tesauros en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_147",
      "title_i18n": {
        "eu": "Ebazpen-zirkuitua gastu espezifikoarekin konfiguratzea (edukiarekin eta thesaurusekin proposamen-txantiloietan)",
        "gl": "Configurar o circuíto de resolución con gasto específico (con contido e tesauros nos persoais de proposta)",
        "ca": "Configurar el circuit de resolució amb despesa específica (amb contingut i tesaurus en les plantilles de proposta)",
        "va": "Configurar el circuit de resolució amb gasto específic (amb contingut i tesaurus en les plantilles de proposta)"
      }
    },
    {
      "id": "o86",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Implantación del flujo del circuito de resolución con gasto específico (con contenido y tesauros en las plantillas de propuesta)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_149",
      "title_i18n": {
        "eu": "Ebazpen-zirkuituaren fluxua gastu espezifikoarekin ezartzea (edukia eta thesaurusak proposamen-txantiloietan)",
        "gl": "Implantación do fluxo do circuíto de resolución con gasto específico (con contido e tesauros nos persoais de proposta)",
        "ca": "Implantació del flux del circuit de resolució amb despesa específica (amb contingut i tesaurus en les plantilles de proposta)",
        "va": "Implantació del flux del circuit de resolució amb gasto específic (amb contingut i tesaurus en les plantilles de proposta)"
      }
    },
    {
      "id": "o87",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w2",
      "title": "Implantación de trámites externos en sede",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_151",
      "title_i18n": {
        "eu": "Egoitzan kanpoko izapideak ezartzea",
        "gl": "Implantación de trámites externos en sede",
        "ca": "Implantació de tràmits externs en seu",
        "va": "Implantació de tràmits externs en seu"
      }
    },
    {
      "id": "o88",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w2",
      "title": "Implantar el circuito de resolución con gasto genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_152",
      "title_i18n": {
        "eu": "Gastu generikoa duen ebazpen-zirkuitua ezartzea",
        "gl": "Implantar o circuíto de resolución con gasto xenérico",
        "ca": "Implantar el circuit de resolució amb despesa genèrica",
        "va": "Implantar el circuit de resolució amb gasto genèric"
      }
    },
    {
      "id": "o89",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w6",
      "title": "Configuración básica de trámites externos (predeterminada con asignaciones de registro)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_153",
      "title_i18n": {
        "eu": "Kanpoko izapideen oinarrizko konfigurazioa (erregistro-esleipenekin aurrez zehaztua)",
        "gl": "Configuración básica de trámites externos (predeterminada con asignacións de rexistro)",
        "ca": "Configuració bàsica de tràmits externs (predeterminada amb assignacions de registre)",
        "va": "Configuració bàsica de tràmits externs (predeterminada amb assignacions de registre)"
      }
    },
    {
      "id": "o90",
      "instruction_id": "i7",
      "submatter_id": "s35",
      "work_line_id": "w1",
      "title": "Instaurar una cultura de la gestión datificada",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_155",
      "title_i18n": {
        "eu": "Kudeaketaren kultura datifikatua ezartzea",
        "gl": "Instaurar unha cultura da xestión datificada",
        "ca": "Instaurar una cultura de la gestió datificada",
        "va": "Instaurar una cultura de la gestió datificada"
      }
    },
    {
      "id": "o91",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definición de modelos de datos / tesauros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_156",
      "title_i18n": {
        "eu": "Datu-ereduak/tesauroak definitzea",
        "gl": "Definición de modelos de datos / tesauros",
        "ca": "Definició de models de dades / tesaurus",
        "va": "Definició de models de dades / tesaurus"
      }
    },
    {
      "id": "o92",
      "instruction_id": "i3",
      "submatter_id": "s7",
      "work_line_id": "w4",
      "title": "Configuración y personalización avanzada de trámites externos (condicionales, tesauros inteligentes, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_157",
      "title_i18n": {
        "eu": "Kanpoko izapideen konfigurazio eta pertsonalizazio aurreratua (baldintzazkoak, tesauro adimendunak, etab.)",
        "gl": "Configuración e personalización avanzada de trámites externos (condicionais, tesauros intelixentes etc.) ",
        "ca": "Configuració i personalització avançada de tràmits externs (condicionals, tesaurus intel·ligents, etc.)",
        "va": "Configuració i personalització avançada de tràmits externs (condicionals, tesaurus intel·ligents, etc.)"
      }
    },
    {
      "id": "o93",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w7",
      "title": "Implantar CR sin gasto básicos (asociados a procedimientos, sin contenido)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_159",
      "title_i18n": {
        "eu": "AK ezartzea oinarrizko gasturik gabe (prozedurei lotuta, edukirik gabe)",
        "gl": "Implantar CR sen gasto básicos (asociados a procedementos, sen contido)",
        "ca": "Implantar CR sense despesa bàsics (associats a procediments, sense contingut)",
        "va": "Implantar CR sense gasto bàsics (associats a procediments, sense contingut)"
      }
    },
    {
      "id": "o94",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w1",
      "title": "Impulsar el uso del sistema de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_160",
      "title_i18n": {
        "eu": "Aurretiko hitzorduaren sistemaren erabilera bultzatzea",
        "gl": "Impulsar o uso do sistema de cita previa",
        "ca": "Impulsar l'ús del sistema de cita prèvia",
        "va": "Impulsar l'ús del sistema de cita prèvia"
      }
    },
    {
      "id": "o95",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w1",
      "title": "Definir política de creación de circuitos de tramitación (flujos de firma, validación, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_161",
      "title_i18n": {
        "eu": "Izapidetze-zirkuituak sortzeko politika definitzea (sinadura-fluxuak, baliozkotzea, etab.)",
        "gl": "Definir política de creación de circuítos de tramitación (fluxos de firma, validación etc.) ",
        "ca": "Definir política de creació de circuits de tramitació (fluxos de signatura, validació, etc.)",
        "va": "Definir política de creació de circuits de tramitació (fluxos de firma, validació, etc.)"
      }
    },
    {
      "id": "o96",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w2",
      "title": "Configurar responsables y grupos responsables del catálogo de actividades y procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_163",
      "title_i18n": {
        "eu": "Jardueren eta prozeduren katalogoaren arduradun eta talde arduradunak eratzea",
        "gl": "Configurar responsables e grupos responsables do catálogo de actividades e procedementos",
        "ca": "Configurar responsables i grups responsables del catàleg d'activitats i procediments",
        "va": "Configurar responsables i grups responsables del catàleg d'activitats i procediments"
      }
    },
    {
      "id": "o97",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w2",
      "title": "Configuración del módulo de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_165",
      "title_i18n": {
        "eu": "Aurretiko hitzorduaren modulua konfiguratzea",
        "gl": "Configuración do módulo de cita previa",
        "ca": "Configuració del mòdul de cita prèvia",
        "va": "Configuració del mòdul de cita prèvia"
      }
    },
    {
      "id": "o98",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w4",
      "title": "Activación y configuración de la firma biométrica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_166",
      "title_i18n": {
        "eu": "Sinadura biometrikoa aktibatzea eta konfiguratzea",
        "gl": "Activación e configuración da firma biométrica",
        "ca": "Activació i configuració de la signatura biomètrica",
        "va": "Activació i configuració de la firma biomètrica"
      }
    },
    {
      "id": "o99",
      "instruction_id": "i3",
      "submatter_id": "s5",
      "work_line_id": "w3",
      "title": "Reforzar el mantenimiento y actualización de las agendas de cita previa",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_167",
      "title_i18n": {
        "eu": "Aurretiko hitzorduen agendak mantentzea eta eguneratzea indartzea",
        "gl": "Reforzar o mantemento e actualización das axendas de cita previa",
        "ca": "Reforçar el manteniment i actualització de les agendes de cita prèvia",
        "va": "Reforçar el manteniment i actualització de les agendes de cita prèvia"
      }
    },
    {
      "id": "o100",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w3",
      "title": "Depurar el inventario y configuración de los circuitos de resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_168",
      "title_i18n": {
        "eu": "Bereizmen-zirkuituen inbentarioa eta konfigurazioa araztea",
        "gl": "Depurar o inventario e configuración dos circuítos de resolución",
        "ca": "Depurar l'inventari i configuració dels circuits de resolució",
        "va": "Depurar l'inventari i configuració dels circuits de resolució"
      }
    },
    {
      "id": "o101",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración avanzada del flujo de resolución integrado con la contabilidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_169",
      "title_i18n": {
        "eu": "Kontabilitatearekin integratutako ebazpen-fluxuaren konfigurazio aurreratua",
        "gl": "Configuración avanzada do fluxo de resolución integrado coa contabilidade",
        "ca": "Configuració avançada del flux de resolució integrat amb la comptabilitat",
        "va": "Configuració avançada del flux de resolució integrat amb la comptabilitat"
      }
    },
    {
      "id": "o102",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Imagen y formato de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_170",
      "title_i18n": {
        "eu": "Dokumentuen irudia eta formatua",
        "gl": "Imaxe e formato de documentos",
        "ca": "Imatge i format de documents",
        "va": "Imatge i format de documents"
      }
    },
    {
      "id": "o103",
      "instruction_id": "i1",
      "submatter_id": "s36",
      "work_line_id": "w2",
      "title": "Carga de terceros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_171",
      "title_i18n": {
        "eu": "Hirugarrenak kargatzea",
        "gl": "Carga de terceiros",
        "ca": "Càrrega de tercers",
        "va": "Càrrega de tercers"
      }
    },
    {
      "id": "o104",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Implantar la celebración de sesiones por videoconferencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_172",
      "title_i18n": {
        "eu": "Bideokonferentzia bidezko saioak ezartzea",
        "gl": "Implantar a celebración de sesións por videoconferencia",
        "ca": "Implantar la celebració de sessions per videoconferència",
        "va": "Implantar la celebració de sessions per videoconferència"
      }
    },
    {
      "id": "o105",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w2",
      "title": "Configurar copia auténtica (permisos y carpetas de digitalización)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_173",
      "title_i18n": {
        "eu": "Kopia autentikoa konfiguratzea (baimenak eta digitalizazio-karpetak)",
        "gl": "Configurar copia auténtica (permisos e cartafoles de dixitalización)",
        "ca": "Configurar còpia autèntica (permisos i carpetes de digitalització)",
        "va": "Configurar còpia autèntica (permisos i carpetes de digitalització)"
      }
    },
    {
      "id": "o106",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w2",
      "title": "Configuración de usuarios (gestor de órgano unipersonal, perfiles de usuarios con permiso para el módulo de control interno…)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_174",
      "title_i18n": {
        "eu": "Erabiltzaileak konfiguratzea (kide bakarreko organoaren kudeatzailea, barne-kontroleko modulurako baimena duten erabiltzaileen profilak...)",
        "gl": "Configuración de usuarios (xestor de órgano unipersoal, perfís de usuarios con permiso para o módulo de control interno…)",
        "ca": "Configuració d'usuaris (gestor d'òrgan unipersonal, perfils d'usuaris amb permís per al mòdul de control intern…)",
        "va": "Configuració d'usuaris (gestor d'òrgan unipersonal, perfils d'usuaris amb permís per al mòdul de control intern…)"
      }
    },
    {
      "id": "o107",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración de asignación de actuación de control a persona concreta",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_175",
      "title_i18n": {
        "eu": "Pertsona jakin bati kontrol-jarduketa esleitzeko konfigurazioa",
        "gl": "Configuración de asignación de actuación de control a persoa concreta",
        "ca": "Configuració d'assignació d'actuació de control a persona concreta",
        "va": "Configuració d'assignació d'actuació de control a persona concreta"
      }
    },
    {
      "id": "o108",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w4",
      "title": "Configuración circuito de resolución plural con gasto",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_176",
      "title_i18n": {
        "eu": "Bereizmen pluraleko zirkuituaren konfigurazioa gastuarekin",
        "gl": "Configuración circuíto de resolución plural con gasto",
        "ca": "Configuració circuit de resolució plural amb despesa",
        "va": "Configuració circuit de resolució plural amb gasto"
      }
    },
    {
      "id": "o109",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Uso del circuito de resolución con gasto plural",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_177",
      "title_i18n": {
        "eu": "Askotariko gastua duen bereizmen-zirkuituaren erabilera",
        "gl": "Uso do circuíto de resolución con gasto plural",
        "ca": "Ús del circuit de resolució amb despesa plural",
        "va": "Ús del circuit de resolució amb gasto plural"
      }
    },
    {
      "id": "o110",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w3",
      "title": "Mantenimiento de las actuaciones de control configuradas en Hacienda Local",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_179",
      "title_i18n": {
        "eu": "Toki Ogasunean konfiguratutako kontrol-jarduketak mantentzea",
        "gl": "Mantemento das actuacións de control configuradas en Facenda Local",
        "ca": "Manteniment de les actuacions de control configurades en Hisenda Local",
        "va": "Manteniment de les actuacions de control configurades en Hisenda Local"
      }
    },
    {
      "id": "o111",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w3",
      "title": "Depuración del catálogo vinculación de nuevos circuitos de resolución con gasto a actividad y procedimiento",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_180",
      "title_i18n": {
        "eu": "Ebazpen-zirkuitu berriak jarduerarako eta prozedurarako gastuarekin lotzeko katalogoa araztea",
        "gl": "Depuración do catálogo vinculación de novos circuítos de resolución con gasto a actividade e procedemento",
        "ca": "Depuració del catàleg vinculació de nous circuits de resolució amb despesa a activitat i procediment",
        "va": "Depuració del catàleg vinculació de nous circuits de resolució amb gasto a activitat i procediment"
      }
    },
    {
      "id": "o112",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w1",
      "title": "Definir las actuaciones de control en el módulo de Hacienda Local",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_182",
      "title_i18n": {
        "eu": "Tokiko Ogasunaren moduluan kontrol-jarduketak definitzea",
        "gl": "Definir as actuacións de control no módulo de Facenda Local",
        "ca": "Definir les actuacions de control en el mòdul d'Hisenda Local",
        "va": "Definir les actuacions de control en el mòdul d'Hisenda Local"
      }
    },
    {
      "id": "o113",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w6",
      "title": "Configuración de Órganos de contratación y Órganos de asistencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_183",
      "title_i18n": {
        "eu": "Kontratazio-organoak eta laguntza-organoak eratzea",
        "gl": "Configuración de Órganos de contratación e Órganos de asistencia",
        "ca": "Configuració d'Òrgans de contractació i Òrgans d'assistència",
        "va": "Configuració d'Òrgans de contractació i Òrgans d'assistència"
      }
    },
    {
      "id": "o114",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w7",
      "title": "Uso de la app contratación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_184",
      "title_i18n": {
        "eu": "Kontratazio-app-aren erabilera",
        "gl": "Uso da app contratación",
        "ca": "Ús de l'app contractació",
        "va": "Ús de l'app contractació"
      }
    },
    {
      "id": "o115",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w4",
      "title": "Configurar plantillas personalizadas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_185",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatuak konfiguratu",
        "gl": "Configurar persoais personalizados",
        "ca": "Configurar plantilles personalitzades",
        "va": "Configurar plantilles personalitzades"
      }
    },
    {
      "id": "o116",
      "instruction_id": "i6",
      "submatter_id": "s30",
      "work_line_id": "w5",
      "title": "Uso de plantillas personalizadas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_186",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatuen erabilera",
        "gl": "Uso de persoais personalizados",
        "ca": "Ús de plantilles personalitzades",
        "va": "Ús de plantilles personalitzades"
      }
    },
    {
      "id": "o117",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Mantenimiento configuración (OC y OA, permisos y sello)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_187",
      "title_i18n": {
        "eu": "Konfigurazioa mantentzea (OC eta OA, baimenak eta zigilua)",
        "gl": "Mantemento configuración (OC e OA, permisos e selo)",
        "ca": "Manteniment configuració (OC i OA, permisos i segell)",
        "va": "Manteniment configuració (OC i OA, permisos i segell)"
      }
    },
    {
      "id": "o118",
      "instruction_id": "i3",
      "submatter_id": "s8",
      "work_line_id": "w2",
      "title": "Implantar el registro de salida",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_188",
      "title_i18n": {
        "eu": "Irteera-erregistroa ezartzea",
        "gl": "Implantar o rexistro de saída",
        "ca": "Implantar el registre de sortida",
        "va": "Implantar el registre d'eixida"
      }
    },
    {
      "id": "o119",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w1",
      "title": "Decisión de activar la integración Gestiona - PCSP",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_195",
      "title_i18n": {
        "eu": "Integrazioa aktibatzeko erabakia Gestionatu - SPKP",
        "gl": "Decisión de activar a integración Xestiona - PCSP",
        "ca": "Decisió d'activar la integració Gestiona - PCSP",
        "va": "Decisió d'activar la integració Gestiona - PCSP"
      }
    },
    {
      "id": "o120",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la OAMR",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_199",
      "title_i18n": {
        "eu": "OAMRren kudeaketa egokia indartzea",
        "gl": "Reforzar unha xestión correcta da OAMR",
        "ca": "Reforçar una gestió correcta de la OAMR",
        "va": "Reforçar una gestió correcta de la OAMR"
      }
    },
    {
      "id": "o121",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Revisión RPT",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_200",
      "title_i18n": {
        "eu": "LPZ berrikustea",
        "gl": "Revisión RPT",
        "ca": "Revisió RPT",
        "va": "Revisió RPT"
      }
    },
    {
      "id": "o122",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Adaptación espacio físico y tecnológico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_201",
      "title_i18n": {
        "eu": "Espazio fisiko eta teknologikoa egokitzea",
        "gl": "Adaptación espazo físico e tecnolóxico",
        "ca": "Adaptació espai físic i tecnològic",
        "va": "Adaptació espai físic i tecnològic"
      }
    },
    {
      "id": "o123",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w2",
      "title": "Vincular series documentales a Órganos Colegiados",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_204",
      "title_i18n": {
        "eu": "Dokumentu-serieak kide anitzeko organoekin lotzea",
        "gl": "Vincular series documentais a Órganos Colexiados",
        "ca": "Vincular sèries documentals a Òrgans Col·legiats",
        "va": "Vincular sèries documentals a Òrgans Col·legiats"
      }
    },
    {
      "id": "o124",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w2",
      "title": "Configurar como obligatoria la Unidad Gestora del expediente",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_205",
      "title_i18n": {
        "eu": "Espedientearen Kudeaketa Unitatea nahitaezko gisa konfiguratzea",
        "gl": "Configurar como obrigatoria a Unidade Xestora do expediente",
        "ca": "Configurar com a obligatòria la Unitat Gestora de l'expedient",
        "va": "Configurar com a obligatòria la Unitat Gestora de l'expedient"
      }
    },
    {
      "id": "o125",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w3",
      "title": "Mantenimiento del catálogo de procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_207",
      "title_i18n": {
        "eu": "Prozeduren katalogoa mantentzea",
        "gl": "Mantemento do catálogo de procedementos",
        "ca": "Manteniment del catàleg de procediments",
        "va": "Manteniment del catàleg de procediments"
      }
    },
    {
      "id": "o126",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w6",
      "title": "Configuración básica de tesauros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_208",
      "title_i18n": {
        "eu": "Tesauroen oinarrizko konfigurazioa",
        "gl": "Configuración básica de tesauros",
        "ca": "Configuració bàsica de tesaurus",
        "va": "Configuració bàsica de tesaurus"
      }
    },
    {
      "id": "o127",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Reforzar una gestión correcta de la normalización de codificación y denominación de grupos de usuarios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_211",
      "title_i18n": {
        "eu": "Erabiltzaile-taldeen kodifikazioaren eta izendapenaren normalizazioaren kudeaketa egokia indartzea",
        "gl": "Reforzar unha xestión correcta da normalización de codificación e denominación de grupos de usuarios",
        "ca": "Reforçar una gestió correcta de la normalització de codificació i denominació de grups d'usuaris",
        "va": "Reforçar una gestió correcta de la normalització de codificació i denominació de grups d'usuaris"
      }
    },
    {
      "id": "o128",
      "instruction_id": "i4",
      "submatter_id": "s6",
      "work_line_id": "w4",
      "title": "Asignación de metadatos complementarios a series documentales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_212",
      "title_i18n": {
        "eu": "Dokumentu-segidei metadatu osagarriak esleitzea",
        "gl": "Asignación de metadatos complementarios a series documentais",
        "ca": "Assignació de metadades complementàries a sèries documentals",
        "va": "Assignació de metadades complementàries a sèries documentals"
      }
    },
    {
      "id": "o129",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w4",
      "title": "Automatización apertura de expedientes",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_214",
      "title_i18n": {
        "eu": "Espedienteak irekitzeko automatizazioa",
        "gl": "Automatización apertura de expedientes",
        "ca": "Automatització obertura d'expedients",
        "va": "Automatització obertura d'expedients"
      }
    },
    {
      "id": "o130",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w1",
      "title": "Definición de PGDE y Roles de actuación por el Pleno de la Entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_215",
      "title_i18n": {
        "eu": "DEKPren definizioa eta erakundearen osoko bilkurak jarduteko dituen rolak",
        "gl": "Definición de PGDE e Roles de actuación polo Pleno da Entidade",
        "ca": "Definició de PGDE i Rols d'actuació pel Ple de l'Entitat",
        "va": "Definició de PGDE i Rols d'actuació pel Ple de l'Entitat"
      }
    },
    {
      "id": "o131",
      "instruction_id": "i5",
      "submatter_id": "s37",
      "work_line_id": "w4",
      "title": "Activación integración backoffice registro de facturas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_216",
      "title_i18n": {
        "eu": "Backoffice fakturen erregistroaren integrazioa aktibatzea",
        "gl": "Activación integración backoffice rexistro de facturas",
        "ca": "Activació integració backoffice registre de factures",
        "va": "Activació integració backoffice registre de factures"
      }
    },
    {
      "id": "o132",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w2",
      "title": "Activar la integración con SIA",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_217",
      "title_i18n": {
        "eu": "AISekiko integrazioa aktibatzea",
        "gl": "Activar a integración con SIA",
        "ca": "Activar la integració amb SIA",
        "va": "Activar la integració amb SIA"
      }
    },
    {
      "id": "o133",
      "instruction_id": "i7",
      "submatter_id": "s35",
      "work_line_id": "w7",
      "title": "Implantar el uso de las búsquedas avanzadas de manera transversal en la entidad, atendiendo a las necesidades particulares de cada área/usuario",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_220",
      "title_i18n": {
        "eu": "Bilaketa aurreratuen erabilera zeharka ezartzea erakundean, arlo/erabiltzaile bakoitzaren premia bereziei erantzunez",
        "gl": "Implantar o uso das procuras avanzadas de maneira transversal na entidade, atendendo ás necesidades particulares de cada área/usuario",
        "ca": "Implantar l'ús de les cerques avançades de manera transversal en l'entitat, ateses les necessitats particulars de cada àrea/usuari",
        "va": "Implantar l'ús de les busques avançades de manera transversal en l'entitat, ateses les necessitats particulars de cada àrea/usuari"
      }
    },
    {
      "id": "o134",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w5",
      "title": "Implantar plantillas personalizadas (html)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_222",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatuak ezartzea (html)",
        "gl": "Implantar persoais personalizados (html)",
        "ca": "Implantar plantilles personalitzades (HTML)",
        "va": "Implantar plantilles personalitzades (HTML)"
      }
    },
    {
      "id": "o135",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w3",
      "title": "Mantenimiento de plantillas personalizadas (html y markdown)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_223",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatuak mantentzea (html eta markdown)",
        "gl": "Mantemento de persoais personalizados (html e markdown)",
        "ca": "Manteniment de plantilles personalitzades (HTML i markdown)",
        "va": "Manteniment de plantilles personalitzades (HTML i markdown)"
      }
    },
    {
      "id": "o136",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Configuración de plantillas personalizadas (html)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_224",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatuak konfiguratzea (html)",
        "gl": "Configuración de persoais personalizados (html)",
        "ca": "Configuració de plantilles personalitzades (HTML)",
        "va": "Configuració de plantilles personalitzades (HTML)"
      }
    },
    {
      "id": "o137",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Reconvertir plantillas personalizadas viejas (html) en tareas regladas de tipo documento (markdown)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_225",
      "title_i18n": {
        "eu": "Txantiloi pertsonalizatu zaharrak (html) dokumentu motako ataza arautu bihurtzea (markdown)",
        "gl": "Reconverter persoais personalizados vellas (html) en tarefas regradas de tipo documento (markdown)",
        "ca": "Reconvertir plantilles personalitzades velles (HTML) en tasques reglades de tipus documento (markdown)",
        "va": "Reconvertir plantilles personalitzades velles (HTML) en tasques reglades de tipus documente (markdown)"
      }
    },
    {
      "id": "o138",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Cumplimiento de datos básicos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_226",
      "title_i18n": {
        "eu": "Oinarrizko datuak betetzea",
        "gl": "Cumprimento de datos básicos",
        "ca": "Compliment de dades bàsiques",
        "va": "Compliment de dades bàsiques"
      }
    },
    {
      "id": "o139",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Configurar tareas regladas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_227",
      "title_i18n": {
        "eu": "Ataza arautuak konfiguratzea",
        "gl": "Configurar tarefas regradas",
        "ca": "Configurar tasques reglades",
        "va": "Configurar tasques reglades"
      }
    },
    {
      "id": "o140",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w5",
      "title": "Tramitar desde pestaña tramitación del expediente",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_228",
      "title_i18n": {
        "eu": "Izapidetu espedientearen izapidetzearen erlaitzetik",
        "gl": "Tramitar desde pestana tramitación do expediente",
        "ca": "Tramitar des de pestanya tramitació de l'expedient",
        "va": "Tramitar des de pestanya tramitació de l'expedient"
      }
    },
    {
      "id": "o141",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w7",
      "title": "Uso plantillas de esPublico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_229",
      "title_i18n": {
        "eu": "esPublico txantiloiak erabiltzea",
        "gl": "Uso persoais de esPublico",
        "ca": "Ús plantilles de esPublico",
        "va": "Ús plantilles de esPublico"
      }
    },
    {
      "id": "o142",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w1",
      "title": "Cumplimentar metadatos de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_230",
      "title_i18n": {
        "eu": "Dokumentuen metadatuak betetzea",
        "gl": "Cumprimentar metadatos de documentos",
        "ca": "Emplenar metadades de documents",
        "va": "Emplenar metadades de documents"
      }
    },
    {
      "id": "o143",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de tareas de Circuito de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_231",
      "title_i18n": {
        "eu": "Bereizmen-zirkuituko atazak konfiguratzea",
        "gl": "Configuración de tarefas de Circuito de Resolución",
        "ca": "Configuració de tasques de Circuit de Resolució",
        "va": "Configuració de tasques de Circuit de Resolució"
      }
    },
    {
      "id": "o144",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantación de tareas de Circuito de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_232",
      "title_i18n": {
        "eu": "Bereizmen-zirkuituko atazak ezartzea",
        "gl": "Implantación de tarefas de Circuito de Resolución",
        "ca": "Implantació de tasques de Circuit de Resolució",
        "va": "Implantació de tasques de Circuit de Resolució"
      }
    },
    {
      "id": "o145",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de Circuitos de Resolución plurales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_233",
      "title_i18n": {
        "eu": "Bereizmen pluraleko zirkuituen konfigurazioa",
        "gl": "Configuración de Circuítos de Resolución plurais",
        "ca": "Configuració de Circuits de Resolució plurals",
        "va": "Configuració de Circuits de Resolució plurals"
      }
    },
    {
      "id": "o146",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w5",
      "title": "Implantación de Circuitos de Resolución plurales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_234",
      "title_i18n": {
        "eu": "Bereizmen anitzeko zirkuituak ezartzea",
        "gl": "Implantación de Circuítos de Resolución plurais",
        "ca": "Implantació de Circuits de Resolució plurals",
        "va": "Implantació de Circuits de Resolució plurals"
      }
    },
    {
      "id": "o147",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w3",
      "title": "Política gestión correcta de envío de notificaciones y comunicaciones",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_235",
      "title_i18n": {
        "eu": "Jakinarazpenak eta komunikazioak behar bezala bidaltzeko kudeaketa-politika",
        "gl": "Política xestión correcta de envío de notificacións e comunicacións",
        "ca": "Política gestió correcta d'enviament de notificacions i comunicacions",
        "va": "Política gestió correcta d'enviament de notificacions i comunicacions"
      }
    },
    {
      "id": "o148",
      "instruction_id": "i2",
      "submatter_id": "s38",
      "work_line_id": "w2",
      "title": "Configuración de Órganos Colegiados (comisiones)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_236",
      "title_i18n": {
        "eu": "Kide anitzeko organoen eraketa (batzordeak)",
        "gl": "Configuración de Órganos Colexiados (comisións)",
        "ca": "Configuració d'Òrgans Col·legiats (comissions)",
        "va": "Configuració d'Òrgans Col·legiats (comissions)"
      }
    },
    {
      "id": "o149",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Configuración de cambios de estado dentro de los Circuitos de Resolución",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_237",
      "title_i18n": {
        "eu": "Ebazpen-zirkuituen barruan egoera-aldaketak konfiguratzea",
        "gl": "Configuración de cambios de estado dentro dos Circuítos de Resolución",
        "ca": "Configuració de canvis d'estat dins dels Circuits de Resolució",
        "va": "Configuració de canvis d'estat dins dels Circuits de Resolució"
      }
    },
    {
      "id": "o150",
      "instruction_id": "i4",
      "submatter_id": "s16",
      "work_line_id": "w3",
      "title": "Reforzar una gestión correcta de la normalización de expedientes y documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_238",
      "title_i18n": {
        "eu": "Espedienteen eta dokumentuen normalizazioaren kudeaketa egokia indartzea",
        "gl": "Reforzar unha xestión correcta da normalización de expedientes e documentos",
        "ca": "Reforçar una gestió correcta de la normalització d'expedients i documents",
        "va": "Reforçar una gestió correcta de la normalització d'expedients i documents"
      }
    },
    {
      "id": "o151",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w2",
      "title": "Configuración de pies de recurso",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_241",
      "title_i18n": {
        "eu": "Baliabide-oinen konfigurazioa",
        "gl": "Configuración de pés de recurso",
        "ca": "Configuració de peus de recurs",
        "va": "Configuració de peus de recurs"
      }
    },
    {
      "id": "o152",
      "instruction_id": "i2",
      "submatter_id": "s39",
      "work_line_id": "w2",
      "title": "Configuración órganos unipersonales",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_242",
      "title_i18n": {
        "eu": "Kide bakarreko organoak eratzea",
        "gl": "Configuración órganos unipersoais",
        "ca": "Configuració òrgans unipersonals",
        "va": "Configuració òrgans unipersonals"
      }
    },
    {
      "id": "o153",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Crear nuevos procedimientos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_243",
      "title_i18n": {
        "eu": "Prozedura berriak sortzea",
        "gl": "Crear novos procedementos",
        "ca": "Crear nous procediments",
        "va": "Crear nous procediments"
      }
    },
    {
      "id": "o154",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Implantar la firma en sede de terceros",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_245",
      "title_i18n": {
        "eu": "Hirugarrenen egoitzan sinadura ezartzea",
        "gl": "Implantar a firma en sede de terceiros",
        "ca": "Implantar la signatura en seu de tercers",
        "va": "Implantar la firma en seu de tercers"
      }
    },
    {
      "id": "o155",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w1",
      "title": "Notificaciones con sello de órgano",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_247",
      "title_i18n": {
        "eu": "Organoaren zigilua duten jakinarazpenak",
        "gl": "Notificacións con selo de órgano",
        "ca": "Notificacions amb segell d'òrgan",
        "va": "Notificacions amb segell d'òrgan"
      }
    },
    {
      "id": "o156",
      "instruction_id": "i2",
      "submatter_id": "s40",
      "work_line_id": "w7",
      "title": "Publicar en el tablón",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_249",
      "title_i18n": {
        "eu": "Iragarki-taulan argitaratzea",
        "gl": "Publicar no taboleiro",
        "ca": "Publicar en el tauló",
        "va": "Publicar en el tauló"
      }
    },
    {
      "id": "o157",
      "instruction_id": "i1",
      "submatter_id": "s11",
      "work_line_id": "w5",
      "title": "Remisión por INSIDE",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_250",
      "title_i18n": {
        "eu": "INSIDE bidez bidaltzea",
        "gl": "Remisión por INSIDE",
        "ca": "Remissió per INSIDE",
        "va": "Remissió per INSIDE"
      }
    },
    {
      "id": "o158",
      "instruction_id": "i5",
      "submatter_id": "s34",
      "work_line_id": "w5",
      "title": "Uso de la solicitud de RC desde Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_254",
      "title_i18n": {
        "eu": "Kudeatzailetik RC eskaera erabiltzea",
        "gl": "Uso da solicitude de RC desde Xestiona",
        "ca": "Ús de la sol·licitud de RC des de Gestiona",
        "va": "Ús de la sol·licitud de RC des de Gestiona"
      }
    },
    {
      "id": "o159",
      "instruction_id": "i4",
      "submatter_id": "s15",
      "work_line_id": "w3",
      "title": "Revisión y control del procedimiento genérico",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_255",
      "title_i18n": {
        "eu": "Prozedura orokorra berrikustea eta kontrolatzea",
        "gl": "Revisión e control do procedemento xenérico",
        "ca": "Revisió i control del procediment genèric",
        "va": "Revisió i control del procediment genèric"
      }
    },
    {
      "id": "o160",
      "instruction_id": "i1",
      "submatter_id": "s41",
      "work_line_id": "w3",
      "title": "Solicitar el alta de la integración con el Tablón Edictal Único del BOE (todas las entidades)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_256",
      "title_i18n": {
        "eu": "BOEko ediktu-taula bakarreko integrazioaren alta eskatzea (erakunde guztiak)",
        "gl": "Solicitar o alta da integración co Taboleiro Edictal Único do BOE (todas as entidades)",
        "ca": "Sol·licitar l'alta de la integració amb el Tauló Edictal Únic del BOE (totes les entitats)",
        "va": "Sol·licitar l'alta de la integració amb el Tauló Edictal Únic del BOE (totes les entitats)"
      }
    },
    {
      "id": "o161",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Se realizan actualizaciones periódicas de actualización de la configuración de usuarios, a nivel de grupos y permisos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_257",
      "title_i18n": {
        "eu": "Erabiltzaileen konfigurazioa eguneratzeko aldizkako eguneratzeak egiten dira, taldeen eta baimenen mailan",
        "gl": "Realízanse actualizacións periódicas de actualización da configuración de usuarios, a nivel de grupos e permisos",
        "ca": "Es realitzen actualitzacions periòdiques d'actualització de la configuració d'usuaris, a nivell de grups i permisos",
        "va": "Es realitzen actualitzacions periòdiques d'actualització de la configuració d'usuaris, a nivell de grups i permisos"
      }
    },
    {
      "id": "o162",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w3",
      "title": "Los usuarios apoderados van revisando periódicamente que usuarios deben activarse/desactivarse y la composición y flujos de trabajo de los grupos de la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_258",
      "title_i18n": {
        "eu": "Erabiltzaile ahaldunek aldizka berrikusten dute zein erabiltzaile aktibatu/desaktibatu behar diren eta erakundeko taldeen osaera eta lan-fluxuak",
        "gl": "Os usuarios apoderados van revisando periodicamente que usuarios deben activarse/desactivarse e a composición e fluxos de traballo dos grupos da entidade",
        "ca": "Els usuaris apoderats van revisant periòdicament que usuaris han d'activar-se/desactivar-se i la composició i fluxos de treball dels grups de l'entitat",
        "va": "Els usuaris apoderats van revisant periòdicament que usuaris han d'activar-se/desactivar-se i la composició i fluxos de treball dels grups de l'entitat"
      }
    },
    {
      "id": "o163",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w3",
      "title": "Se ha reforzado la gestión íntegra de los expedientes de contratación integrados con plataformas de contratación externas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_259",
      "title_i18n": {
        "eu": "Kanpoko kontratazio-plataformekin integratutako kontratazio-espedienteen kudeaketa osoa indartu da",
        "gl": "Reforzouse a xestión íntegra dos expedientes de contratación integrados con plataformas de contratación externas",
        "ca": "S'ha reforçat la gestió íntegra dels expedients de contractació integrats amb plataformes de contractació externes",
        "va": "S'ha reforçat la gestió íntegra dels expedients de contractació integrats amb plataformes de contractació externes"
      }
    },
    {
      "id": "o164",
      "instruction_id": "i6",
      "submatter_id": "s26",
      "work_line_id": "w5",
      "title": "Publicar anuncio de adjudicación/resolución en portal de transparencia",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_248",
      "title_i18n": {
        "eu": "Esleipen-iragarkia/ebazpena gardentasun-atarian argitaratzea",
        "gl": "Publicar anuncio de adxudicación/resolución en portal de transparencia",
        "ca": "Publicar anunci d'adjudicació/resolució en portal de transparència",
        "va": "Publicar anunci d'adjudicació/resolució en portal de transparència"
      }
    },
    {
      "id": "o165",
      "instruction_id": "i2",
      "submatter_id": "s42",
      "work_line_id": "w2",
      "title": "Implantar la tramitación de expedientes de la app de padrón",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_260",
      "title_i18n": {
        "eu": "Erroldako app-aren espedienteen izapidetzea ezartzea",
        "gl": "Implantar a tramitación de expedientes da app de padrón",
        "ca": "Implantar la tramitació d'expedients de l'app de padró",
        "va": "Implantar la tramitació d'expedients de l'app de padró"
      }
    },
    {
      "id": "o166",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Personalización de categorías tablón de anuncios",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_261",
      "title_i18n": {
        "eu": "Iragarki-taulen kategoriak pertsonalizatzea",
        "gl": "Personalización de categorías taboleiro de anuncios",
        "ca": "Personalització de categories tauler d'anuncis",
        "va": "Personalització de categories tauler d'anuncis"
      }
    },
    {
      "id": "o167",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Configurar nueva imagen sede electrónica (colores personalizados, banner y banner avisos)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_262",
      "title_i18n": {
        "eu": "Konfiguratu egoitza elektronikoaren irudi berria (kolore pertsonalizatuak, bannerra eta bannerra)",
        "gl": "Configurar nova imaxe sede electrónica (cores personalizadas, banner e banner avisos)",
        "ca": "Configurar nova imatge sedi electrònica (colors personalitzats, bàner i bàner avisos)",
        "va": "Configurar nova imatge sede electrònica (colors personalitzats, bàner i bàner avisos)"
      }
    },
    {
      "id": "o168",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w6",
      "title": "Desactivación mail aviso entidades con e-NOTUM",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_263",
      "title_i18n": {
        "eu": "e-NOTUM duten erakundeen abisu-mezu elektronikoa desaktibatzea",
        "gl": "Desactivación mail aviso entidades con e-NOTUM",
        "ca": "Desactivació mail aviso entitats e-NOTUM",
        "va": "Desactivació mail avise entitats amb e-NOTUM"
      }
    },
    {
      "id": "o169",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w4",
      "title": "Configuración Páginas informativas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_264",
      "title_i18n": {
        "eu": "Informazio-orrien konfigurazioa",
        "gl": "Configuración Páxinas informativas",
        "ca": "Configuració Pàgines informatives",
        "va": "Configuració Pàgines informatives"
      }
    },
    {
      "id": "o170",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w4",
      "title": "Configuración de categorías de sede electrónica",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_265",
      "title_i18n": {
        "eu": "Egoitza elektronikoaren kategoriak konfiguratzea",
        "gl": "Configuración de categorías de sede electrónica",
        "ca": "Configuració de categories de seu electrònica",
        "va": "Configuració de categories de seu electrònica"
      }
    },
    {
      "id": "o171",
      "instruction_id": "i3",
      "submatter_id": "s13",
      "work_line_id": "w3",
      "title": "Mantener actualizado Banner avisos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_266",
      "title_i18n": {
        "eu": "Banner abisuak eguneratuta edukitzea",
        "gl": "Manter actualizado Banner avisos",
        "ca": "Mantenir actualitzat Bàner avisos",
        "va": "Mantindre actualitzat Bàner avisos"
      }
    },
    {
      "id": "o172",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w1",
      "title": "Aprobación convenio representación",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_267",
      "title_i18n": {
        "eu": "Ordezkaritzaren hitzarmena onartzea",
        "gl": "Aprobación convenio representación",
        "ca": "Aprovació conveni representació",
        "va": "Aprovació conveni representació"
      }
    },
    {
      "id": "o173",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w4",
      "title": "Configuración Representación de colectivos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_268",
      "title_i18n": {
        "eu": "Kolektiboen ordezkaritzaren konfigurazioa",
        "gl": "Configuración Representación de colectivos",
        "ca": "Configuració Representació de col·lectius",
        "va": "Configuració Representació de col·lectius"
      }
    },
    {
      "id": "o174",
      "instruction_id": "i3",
      "submatter_id": "s9",
      "work_line_id": "w5",
      "title": "Implantación Representación de colectivos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": "IE_269",
      "title_i18n": {
        "eu": "Kolektiboen ordezkaritza ezartzea",
        "gl": "Implantación Representación de colectivos",
        "ca": "Implantació Representació de col·lectius",
        "va": "Implantació Representació de col·lectius"
      }
    },
    {
      "id": "o175",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Revisión configuración estados de expedientes (personalizados y genéricos) Revisión estados multidiomas",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Espediente-egoeren konfigurazioaren berrikuspena (pertsonalizatuak eta generikoak)",
        "gl": "Revisión configuración estados de expedientes (personalizados e xenéricos) Revisión estados multidiomas",
        "ca": "Revisió configuració estats d'expedients (personalitzats i genèrics) Revisió estats multidiomas",
        "va": "Revisió configuració estats d'expedients (personalitzats i genèrics) Revisió estats multidiomas"
      }
    },
    {
      "id": "o176",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Revisión circuitos de tramitación (rol firmante, cambio estado, salida a interesado/representante, asignación salida )",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Izapidetze-zirkuituak berrikustea (sinatzailearen rola, egoera-aldaketa, interesdunaren/ordezkariaren irteera, irteera-esleipena)",
        "gl": "Revisión circuítos de tramitación (rol asinante, cambio estado, saída a interesado/representante, asignación saída )",
        "ca": "Revisió circuits de tramitació (rol signant, canvi estat, sortida a interessat/representant, assignació sortida )",
        "va": "Revisió circuits de tramitació (rol firmant, canvi estat, eixida a interessat/representant, assignació eixida )"
      }
    },
    {
      "id": "o177",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w5",
      "title": "Implantación restricción de documentos",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Dokumentuen murrizketa ezartzea",
        "gl": "Implantación restrición de documentos",
        "ca": "Implantació restricció de documents",
        "va": "Implantació restricció de documents"
      }
    },
    {
      "id": "o178",
      "instruction_id": "i2",
      "submatter_id": "s21",
      "work_line_id": "w4",
      "title": "Implantar novedades 2025: Actualización tramitación reglada conforme nuevas funcionalidades (finalizar automáticamente, nuevas opciones de iniciación inmediata, nuevas condiciones al finalizar la tarea, ejecución sin intervención humana",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Berritasunak ezartzea 2025ean: izapidetze arautua eguneratzea funtzionaltasun berrien arabera (automatikoki amaitzea, berehala hasteko aukera berriak, ataza amaitzean baldintza berriak, gizakiaren esku-hartzerik gabe gauzatzea)",
        "gl": "Implantar novidades 2025: Actualización tramitación regrada conforme novas funcionalidades (finalizar automaticamente, novas opcións de iniciación inmediata, novas condicións ao finalizar a tarefa, execución sen intervención humana",
        "ca": "Implantar novetats 2025: Actualització tramitació reglada conforme noves funcionalitats (finalitzar automàticament, noves opcions d'iniciació immediata, noves condicions en finalitzar la tasca, execució sense intervenció humana",
        "va": "Implantar novetats 2025: Actualització tramitació reglada conforme noves funcionalitats (finalitzar automàticament, noves opcions d'iniciació immediata, noves condicions en finalitzar la tasca, execució sense intervenció humana"
      }
    },
    {
      "id": "o179",
      "instruction_id": "i3",
      "submatter_id": "s43",
      "work_line_id": "w3",
      "title": "Revisión terceros (incluir varios mails, por ejemplo para corporación)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Hirugarrenen berrikuspena (mezu elektroniko batzuk sartu, adibidez korporaziorako)",
        "gl": "Revisión terceiros (incluír varios mails, por exemplo para corporación)",
        "ca": "Revisió tercers (incloure diversos mails, per exemple per a corporació)",
        "va": "Revisió tercers (incloure diversos mails, per exemple per a corporació)"
      }
    },
    {
      "id": "o180",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w4",
      "title": "Certificación de usuarios de la entidad",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Erakundearen erabiltzaileen ziurtagiria",
        "gl": "Certificación de usuarios da entidade",
        "ca": "Certificació d'usuaris de l'entitat",
        "va": "Certificació d'usuaris de l'entitat"
      }
    },
    {
      "id": "o181",
      "instruction_id": "i1",
      "submatter_id": "s2",
      "work_line_id": "w2",
      "title": "Implantación del sistema de alertas personalizadas por usuario",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Erabiltzaile bakoitzeko alerta pertsonalizatuen sistema ezartzea",
        "gl": "Implantación do sistema de alertas personalizadas por usuario",
        "ca": "Implantació del sistema d'alertes personalitzades per usuari",
        "va": "Implantació del sistema d'alertes personalitzades per usuari"
      }
    },
    {
      "id": "o182",
      "instruction_id": "i2",
      "submatter_id": "s20",
      "work_line_id": "w2",
      "title": "Reinstalar nueva APP móvil en entidades que hagan uso de la antigua",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "APP mugikor berria instalatzea zaharra erabiltzen duten erakundeetan",
        "gl": "Reinstalar nova APP móbil en entidades que fagan uso da antiga",
        "ca": "Reinstal·lar nova APP mòbil en entitats que facin ús de l'antiga",
        "va": "Reinstal·lar nova APP mòbil en entitats que facen ús de l'antiga"
      }
    },
    {
      "id": "o183",
      "instruction_id": "i2",
      "submatter_id": "s4",
      "work_line_id": "w3",
      "title": "Implantar novedades 2025: OOCC (órgano que resuelve y dictamina; varias resoluciones en una sesión de OOCC; desbloqueo, etc.)",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "2025eko berrikuntzak ezartzea: OOCC (ebatzi eta irizpena ematen duen organoa; hainbat ebazpen OOCCren bilkura batean; desblokeoa, etab.)",
        "gl": "Implantar novidades 2025: OOCC (órgano que resolve e ditamina; varias resolucións nunha sesión de OOCC; desbloqueo etc.) ",
        "ca": "Implantar novetats 2025: OOCC (òrgan que resol i dictamina; diverses resolucions en una sessió de OOCC; desbloqueig, etc.)",
        "va": "Implantar novetats 2025: OOCC (òrgan que resol i dictamina; diverses resolucions en una sessió de OOCC; desbloqueig, etc.)"
      }
    },
    {
      "id": "o184",
      "instruction_id": "i2",
      "submatter_id": "s33",
      "work_line_id": "w4",
      "title": "Mantenimiento/actualización de pies de recurso",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Baliabide-oinak mantentzea/eguneratzea",
        "gl": "Mantemento/actualización de pés de recurso",
        "ca": "Manteniment/actualització de peus de recurs",
        "va": "Manteniment/actualització de peus de recurs"
      }
    },

    {
      "id": "o185",
      "instruction_id": "i1",
      "submatter_id": "s14",
      "work_line_id": "w7",
      "title": "Activar la integración DRAG-Gestiona",
      "status": "Activo",
      "year": 2026,
      "legacy_item_code": null,
      "title_i18n": {
        "eu": "Aktibatu DRAG-Gestiona integrazioa",
        "gl": "Activar a integración DRAG-Gestiona",
        "ca": "Activar la integració DRAG-Gestiona",
        "va": "Activar la integración DRAG-Gestiona"
      }
    }
  ]
};
