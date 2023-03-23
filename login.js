"use strict";
//Validar USUARIO y CONTRASEÑA ingresado por consola, y que compare con los datos ya regristrados. 
//Datos registrados: User=Juan ; Clave=claveJuan
exports.__esModule = true;
var rls = require("readline-sync");
var Juan = true;
var claveJuan = true;
var user = rls.question("Ingrese el usuario: ");
var clave = rls.question("Ingrese la contraseña: ");
if (user == "Juan" && clave == "claveJuan") {
    console.log("*** Ingresaste correctamente al sistema ***");
}
else {
    console.log("El usuario o contraseña ingresada no esta registrado, porfavor verifique el usuario y contraseña");
}
