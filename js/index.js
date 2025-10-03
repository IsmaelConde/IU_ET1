document.addEventListener("DOMContentLoaded", cargado, false);

let entidad;
/**
 * 
 * @param {EventListener} e 
 */
function cargado(e){
    console.log("Documento cargado")
    entidad = new alumnograduacion();
}