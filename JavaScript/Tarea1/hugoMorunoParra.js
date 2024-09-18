const MAXNUMBER = 1000;                                                 
const NUMEROSECRETO = parseInt(MAXNUMBER*Math.random());
const prompt = require('prompt-sync')();

let numeroDeIntentos = 5;
let numeroencontrado = false;

console.log("No se lo digas a nadie (chsssss): " + NUMEROSECRETO);

do 
{
    console.log(numeroDeIntentos);
    console.log(numeroencontrado);
    entradaDeNumero = prompt('¿Qué número crees que es el ganador? (Entre el 0 y el 1000): ');
    if (entradaDeNumero == 'exit')      //Cierra la aplicación
        window.close();
    if (parseInt(entradaDeNumero))      //Comprueba si el texto introducido es un número
        { 
        if (entradaDeNumero >= 0 && entradaDeNumero <= 1000)  //Comprueba que el número está en el arco especificado
            if (entradaDeNumero == NUMEROSECRETO)             //
            {
                console.log("ENHORABUENA!")
                numeroencontrado = true;
                numeroDeIntentos = 0;
            }
            else
            {
                console.log("Número incorrecto")
                numeroDeIntentos = numeroDeIntentos - 1;
            }
        else
            console.log("Numero fuera del rango.")
    } 
    else 
    {
        console.log("No es un número.")
    }
} 
while (!numeroencontrado || numeroDeIntentos > 0)
    
console.log("SE ACABÓ!")