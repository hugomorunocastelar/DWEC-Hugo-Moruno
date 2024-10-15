"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '15/10/2024'
 */

/**
 * Componentes del archivo actual que se exportan.
 */

export 
{ 
    anadirFicha,
    reiniciar,
    siguienteFicha,
    inicio,
    turno
};

/**
 * @name = Variables de inicio.
 */

const OBJ_PANTINFO = $('#pantallaInfo');
const OBJS_CASILLAS = $('main>#tablero>div');
const OBJ_SIGUIENTEFICHA = $('main>section>div>#next');

/**
 * Clase turno
 */
class turno
{
    #numero;
    constructor()
    {
        this.#numero = 0;
    }
    anadirTurno() 
    {
        this.#numero++;
        siguienteFicha(this.#numero);
    }
    clearTurno()
    {
        this.#numero = 0;
    }
    turno() 
    {
        return this.#numero;
    }
}

/**
 * @name = Funciones de validación.
 */

function inicio() 
{
    OBJ_PANTINFO.addClass('mostrar');
    var initDiv = $('<div></div>');
    var initH1 = $('<h1></h1>');
    var initParr = $('<p></p>');
    initH1.text('¡Bienvenido al Tres en Raya!');
    initParr.text('Bienvenido! El juego es sencillo, enlaza tres símbolos iguales en línea para ganar a tu oponente.');
    initDiv.addClass('divInicio');
    initDiv.append(initH1);
    initDiv.append(initParr);
    OBJ_PANTINFO.append(initDiv);
    siguienteFicha(0);
}

function siguienteFicha(turno)
{
    //OBJ_SIGUIENTEFICHA[0].childNodes[0].remove();
    var imgO = '<img src="./img/circulo.png" alt="circulo">';
    var imgX = '<img src="./img/equis.png" alt="equis">';

    if (turno < 6) 
    {
        if(turno % 2 == 0)
        {
            if (OBJ_SIGUIENTEFICHA.first().html() != '')
            {
                OBJ_SIGUIENTEFICHA[0].childNodes[0].remove();
            }
            OBJ_SIGUIENTEFICHA.append(imgX);
        }
        else
        {
            if (OBJ_SIGUIENTEFICHA.first().html() != '')
            {
                OBJ_SIGUIENTEFICHA[0].childNodes[0].remove();
            }
            OBJ_SIGUIENTEFICHA.append(imgO);
        }
    }
}

function anadirFicha(casilla, turno)
{
    var imgO = '<img src="./img/circulo.png" alt="circulo">';
    var imgX = '<img src="./img/equis.png" alt="equis">';

    if (!(casilla.first().html() != ''))
    {
        if(turno % 2 == 0)
        {
            casilla.append(imgX);
            return true;
        }
        else
        {
            casilla.append(imgO);
            return true;
        }
        comprobarVictoria();
    }
    return false;
}

function comprobarVictoria()
{
    OBJS_CASILLAS.each(function(){

    });
}

function reiniciar() { 
    OBJS_CASILLAS.each(function(){
        var div = $(this)[0];
        if(div.childElementCount > 0)
        {
            div.childNodes[0].remove();
        }
    });
    siguienteFicha(0);
}