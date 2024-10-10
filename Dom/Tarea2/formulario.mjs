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
const FORM = document.getElementById('formulario');
const OBJ_CAMPOSFORM = document.getElementsByTagName('input');

/**
 * @name = Main.
 */

window.addEventListener('load', () => {
    
    BTN_LIMPIAR.addEventListener('click', validaciones.limpiarFormulario);

    

    Array.from(OBJ_CAMPOSFORM).forEach((campoForm) => {
        campoForm.addEventListener('focus', (campo) => {
            validaciones.infoCampos(campo, true);
        });    

        campoForm.addEventListener('blur', (campo) => {
            validaciones.infoCampos(campo, false);
        });

        campoForm.addEventListener('input', (campo) => {
            validaciones.validarCampo(campo);
        });
    });
    
    FORM.addEventListener('submit', (form) => {

        if (validaciones.errores > 0)
        {
            form.preventDefault();
            validaciones.errorAlEnviar;
        }
        else
        {
            validaciones.enviadoCorrectamente;
        }
    });

});

