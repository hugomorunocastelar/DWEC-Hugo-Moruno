"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '12/10/2024'
 */

/**
 * @name = Variables de inicio.
 */

/**
 * Variables de objetos del documento.
 */
const BTN_PANTINFO = $('#pantallaInfoButton');
const BTN_REINICIAR = $('#reiniciarJuego');
const OBJ_PANTINFO = $('#pantallaInfo');
const OBJS_CASILLAS = $('main>div>div');

var turno = 0; 

/**
 * @name = Main.
 */

$(document).ready(() => {

    OBJS_CASILLAS.each(function(){
        $(this).on('click', function() {
            var imgO = '<img src="./img/circulo.png" alt="circulo">';
            var imgX = '<img src="./img/cancelar.png" alt="cancelar">';

            if (!($(this).first().html() != ''))
            {
                if(turno % 2 == 0)
                {
                    $(this).append(imgX);
                    turno++;
                }
                else
                {
                    $(this).append(imgO);
                    turno++;
                }
                
            }
        });
    })

    BTN_PANTINFO.on('click', () => {
        OBJ_PANTINFO.removeClass('mostrar');
        //OBJ_PANTINFO.children().last() = 'div' ?  OBJ_PANTINFO.children().last().remove() : null;
    });

    BTN_REINICIAR.on('click', () => {
        OBJS_CASILLAS.each(function(){
            $(this).remove();
        })
    });
});