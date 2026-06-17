// ====================================================================
//  CONFIG.JS — Configuración específica del proyecto
//
//  Proyecto: Google Ampliación
//  Para adaptar a un nuevo proyecto, editar únicamente este archivo.
// ====================================================================

// --------------------------------------------------------------------
//  IDENTIDAD DEL PROYECTO
// --------------------------------------------------------------------
const PROJECT_NAME = "Reporte Avance Físico Google Ampliación";

// --------------------------------------------------------------------
//  FUENTE DE DATOS: Excel en Drive
//  ID de la CARPETA de Drive que contiene el archivo Excel origen.
// --------------------------------------------------------------------
const SOURCE_EXCEL_FOLDER_ID = "179h5Pv1Sf-mb6NfdkjTyn9GLInWdXzb_";

// --------------------------------------------------------------------
//  URL PÚBLICA DEL WEB APP (se actualiza al re-desplegar)   ← EDITAR
//  Pegar acá la URL del web app una vez hecho el deploy inicial.
// --------------------------------------------------------------------
var REPORTE_FISICO_URL = "REEMPLAZAR_CON_URL_WEBAPP_TRAS_DEPLOY";

// --------------------------------------------------------------------
//  HOJA CACHE DE DATOS
// --------------------------------------------------------------------
var CACHE_SHEET_ID = "1Kq8V5d1VBAtfGpYVlTPOEvX71K1zT0udQCpDHmj2SGg";
var DASHBOARD_KEY  = "Google_Ampliacion";

// --------------------------------------------------------------------
//  HOJAS DE GOOGLE SHEETS — destino del ETL
// --------------------------------------------------------------------
const DEST_PLAN_SHEET_NAME      = "Planificación Inicial";
const DEST_REAL_CANT_SHEET_NAME = "AVANCE_REAL_CANT (2)";
const DEST_REAL_HH_SHEET_NAME   = "AVANCE_HH_REAL (2)";
const LOG_SHEET_NAME            = "ETL_LOG";

// --------------------------------------------------------------------
//  HOJAS DEL EXCEL ORIGEN — nombres de pestañas
// --------------------------------------------------------------------
const SRC_SHEET_SEMANAS   = "SEMANAS";
const SRC_SHEET_PLAN_LB   = "PLANIFICACIÓN LB";
const SRC_SHEET_REAL_CANT = "AVANCE_REAL_CANT";
const SRC_SHEET_REAL_HH   = "AVANCE_HH_REAL";

// --------------------------------------------------------------------
//  UNIDAD FÍSICA PRINCIPAL                                  ← REVISAR
//  Valores por defecto. Ajustar cuando se defina la unidad principal
//  del proyecto (m, m2, un, etc.).
// --------------------------------------------------------------------
const MAIN_UNIT = {
  unit      : "m",                       // valor en columna "Unidad" del plan (minúsculas)
  kpiTitle  : "AVANCE FÍSICO",           // título de la barra KPI
  kpiIcon   : "〰",                      // emoji/símbolo del ícono
  kpiColor  : "#0369a1",                 // color del texto/barra
  kpiBg     : "#e0f2fe",                 // fondo del ícono
  unitLabel : "m",                       // sufijo de unidad en textos
};

// --------------------------------------------------------------------
//  TAREAS CLAVE — tabla "Avance por Sistema × Tarea"        ← REVISAR
//  Por ahora sin definir. Cuando se conozcan las tareas clave del
//  proyecto, agregar aquí entre 1 y 6 con su regex correspondiente.
// --------------------------------------------------------------------
const KEY_TASKS = [];
