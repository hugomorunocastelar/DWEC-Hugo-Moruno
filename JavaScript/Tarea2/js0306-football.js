"use strict";
const prompt = require('prompt-sync')();

var equipos = new Map();
var exit = false;

var equipoDePruebaJugadores = new Map();
equipoDePruebaJugadores.set(1, 'A');
equipoDePruebaJugadores.set(2, 'B');
equipoDePruebaJugadores.set(3, 'C');
equipoDePruebaJugadores.set(4, 'D');
equipoDePruebaJugadores.set(5, 'E');
equipos.set('Equipodeprueba', );

do
{
    console.log(
        '\n Equipos de futbol 5 / Sala',
        '\n 1. Introducir Equipo.',
        '\n 2. Buscar jugador en un equipo por numero.',
        '\n 3. Pintar un equipo.',
        '\n 4. Salir',
        '\n Opción:'
    )
    var opcion = prompt();

    switch (opcion)
    {
        case '1':
            var equipo = new Map();
            console.log('Introduce el nombre del Equipo:')
            var nombreEquipo = prompt();
            for(let jugadores = 0; jugadores < 5;)
            {
                console.log('Introduce el número del jugador:')
                var numero = prompt()
                if (parseInt(numero))
                {
                    console.log('Introduce el nombre del jugador:')
                    var nombre = prompt();
                    equipo.set(numero, nombre);
                    jugadores++;
                }
                else
                {
                    console.log('El término introducido no es un número');
                }
            }
            equipos.set(nombreEquipo, equipo);
            break;
        case '2':

            equipos.keys().forEach(key => 
            {
                console.log('Nombre: ',key);
            })

            console.log('Introduce el nombre del equipo que deseas inspeccionar:')
            var equipoBuscado = prompt();

            break;
        case '3':
            
            break;
        case '4':
            exit = true;
            break;
        default:
            console.log('Opción incorrecta.');
    }

}while(!exit)