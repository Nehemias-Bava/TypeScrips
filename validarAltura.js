"use strict";
//Debe medir 1.30 mts o mas
exports.__esModule = true;
var rls = require("readline-sync");
var alturaMinima = 1.30;
var alturaIngresada = rls.questionFloat("Ingrese su altura: ");
if (alturaIngresada >= alturaMinima) {
    console.log("La altura fue confimada y puede subir a la atraccion");
}
else {
    console.log("No puede subir ala atraccion por no llegar a 1.30, lo sentimos");
}
