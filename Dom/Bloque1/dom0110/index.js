
"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '04/10/2024'
 */

/**
 * @name = Variables de inicio.
 */

const NUM = $('input[name="numero"]'); 
const NAME = $('input[name="nombre"]'); 

/**
 * @name = Main.
 */

window.addEventListener('load', (e) => {
    NUM.on('blur', onNumBlur);
    NAME.on('blur', onNameBlur);
    $('#enviar').on('click', onEnviarClick);

})

/**
 * @name = Gestores de eventos.
 */

function onNumBlur(e){
    NUM.css('background-color', 'red')
}

function onNameBlur(e){
    NAME.css('background-color', 'red')
}

function onEnviarClick(e){
    
}