"use strict";

/**
 * @author = Hugo Moruno Parra
 * 
 * @fecha = '09/10/2024'
 */

export { 
    limpiarFormulario,
    infoCampos
};

/**
 * @name = Variables de inicio.
 */

const OBJ_NOMBRE = document.getElementById('Nombre');
const OBJ_APELLIDOS = document.getElementById('Apellidos');
const OBJ_DNI = document.getElementById('Dni');
const OBJ_EMAIL = document.getElementById('Email');
const OBJ_PASSWD = document.getElementById('Passwd');
const OBJ_PASSWDREP = document.getElementById('Passwdrep');

/**
 * @name = Funciones de validación.
 */

function limpiarFormulario()
{
    OBJ_NOMBRE.value = "";
    OBJ_APELLIDOS.value = "";
    OBJ_DNI.value = "";
    OBJ_EMAIL.value = "";
    OBJ_PASSWD.value = "";
    OBJ_PASSWDREP.value = "";
}

function infoCampos(campo, mostrar)
{
    if (mostrar)
    {
        console.log(campo.parentNode.target);
    }
}
