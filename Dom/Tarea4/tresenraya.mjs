"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '12/10/2024'
 */

import * as utils from "./utils.mjs";

/**
 * @name = Variables de inicio.
 */

/**
 * Variables de objetos del documento.
 */

const TURNO = new utils.turno();

const BTN_PANTINFO = $('#pantallaInfoButton');
const BTN_REINICIAR = $('#reiniciarJuego');
const OBJ_PANTINFO = $('#pantallaInfo');
const OBJS_CASILLAS = $('main>#tablero>div');

/**
 * @name = Main.
 */

$(document).ready(() => {

    utils.inicio();

    OBJS_CASILLAS.each(function(){
        $(this).on('click', function() {
            utils.anadirFicha($(this), TURNO.turno()) ? TURNO.anadirTurno() : null ;
        });
    })

    BTN_REINICIAR.on('click', () => {
        utils.reiniciar();
        TURNO.clearTurno();
    });
    
    BTN_PANTINFO.on('click', () => {
        OBJ_PANTINFO.removeClass('mostrar');
        OBJ_PANTINFO[0].lastChild.remove();
    });
});

