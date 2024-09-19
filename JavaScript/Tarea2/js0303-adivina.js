"use strict";
const prompt = require('prompt-sync')();
const generaNumeros = () =>
    {
        var listaDeNumeros = [];
        for(let numeros = 0; numeros < 10; numeros++)
        {
            listaDeNumeros.push(parseInt(Math.random()*20));
        }
        return listaDeNumeros;
    }
const NUMEROS_ALEATORIOS = generaNumeros();

    var numerosDelUsuario = [];
    for(let numeros = 1; numeros <= 5;numeros++)
    {
        console.log('Introduce el ',numeros,'º número: ')
        var numeroIntroducido = prompt();
        if (parseInt(numeroIntroducido))
        {
            numerosDelUsuario.push(parseInt(numeroIntroducido));
        } 
        else 
        {
            console.log('Esto no es un número entero.');
        }
    }

    console.log('Final!\n \nRESULTADOS:')

    var numerosEncontrados = [];
    NUMEROS_ALEATORIOS.forEach( (numero) => 
    {
        if(numerosDelUsuario.includes(numero))
        {
            console.log('\x1b[32m%s\x1b[0m',numero);
            numerosEncontrados.push(numero);
        }
        else
        {
            console.log(numero);
        }
    });

    console.log('Números encontrados: ',numerosEncontrados);