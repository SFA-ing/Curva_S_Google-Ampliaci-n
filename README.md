# Reporte Avance Físico — Google Ampliación

Dashboard de avance físico para el proyecto Google Ampliación, generado desde el template [curva-s-template](https://github.com/SFA-ing/curva-s-template).

## Configuración

| Item | Valor |
|---|---|
| Carpeta Drive (Excel origen) | `179h5Pv1Sf-mb6NfdkjTyn9GLInWdXzb_` |
| Google Sheets caché | `1Kq8V5d1VBAtfGpYVlTPOEvX71K1zT0udQCpDHmj2SGg` |
| Dashboard key | `Google_Ampliacion` |

## Pendientes

- [ ] Crear el Apps Script vinculado al Sheets caché y pegar los archivos.
- [ ] Habilitar el Drive Advanced Service en el editor de Apps Script.
- [ ] Hacer el primer deploy y pegar la URL del Web App en `REPORTE_FISICO_URL` (Config.js).
- [ ] Definir unidad principal (`MAIN_UNIT`) y tareas clave (`KEY_TASKS`) cuando se conozcan.

## Archivos

| Archivo | Descripción |
|---|---|
| `Config.js` | Configuración del proyecto |
| `Código.js` | Lógica del servidor (cálculos, curva S, KPIs) |
| `ETL.js` | Carga de datos desde el Excel origen |
| `Index.html.html` | Frontend del dashboard |
| `appsscript.json` | Manifiesto del Apps Script |
