"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '09/10/2024'
 */

import * as validaciones from "./formulario-validaciones.mjs";

/**
 * @name = Variables de inicio.
 */
const BTN_LIMPIAR = document.getElementById('limpiar');

/**
 * @name = Main.
 */

window.addEventListener('load', () => {
    
    BTN_LIMPIAR.addEventListener('click', validaciones.limpiarFormulario);

});