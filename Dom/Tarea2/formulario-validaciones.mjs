const OBJ_NOMBRE = document.getElementById('Nombre');
const OBJ_APELLIDOS = document.getElementById('Apellidos');
const OBJ_DNI = document.getElementById('Dni');
const OBJ_EMAIL = document.getElementById('Email');
const OBJ_PASSWD = document.getElementById('Passwd');
const OBJ_PASSWDREP = document.getElementById('Passwdrep');

export function limpiarFormulario()
{
    OBJ_NOMBRE.value = "";
    OBJ_APELLIDOS.value = "";
    OBJ_DNI.value = "";
    OBJ_EMAIL.value = "";
    OBJ_PASSWD.value = "";
    OBJ_PASSWDREP.value = "";
}