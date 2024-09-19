"use strict";
const prompt = require('prompt-sync')();
        
var vacio = false;
var listaCompra = [];

do
{
    console.log('Introduce un objeto a la lista (Vacio para terminar): ')
    var objetoIntroducido = prompt();
    if (objetoIntroducido.trim().valueOf() != "")
    {
        listaCompra.push(objetoIntroducido);
    } 
    else
    {
        vacio = true;
    }

} while (!vacio)

console.log("Ordenando la lista...");

listaCompra.sort();

console.log('Ordenada!');

listaCompra.forEach((objeto) => {
    console.log(objeto)
});