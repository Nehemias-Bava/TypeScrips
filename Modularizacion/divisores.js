"use strict";
/* -Implemente un metodo llamado cantidadDeDivisores que reciva un numero entero y devuelva la cantidad de divisores.
-Por ejemplo, para el numero 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta deberia ser 5.
-Re-Uilice el metodo esMultiplo implementado para el ejercicio anterior. */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
/*
MULTIPLOS;
*/
var num1;
var num2;
function esMultiplo(num1, num2) {
    if (num1 % num2 == 0) {
        return true;
    }
    else {
        return false;
    }
}
/*
POTENCIAS;
*/
var numEntero = rls.questionInt("Ingrese un numero entero: ");
var divisores = 0;
var cantidadDiv = 0;
function cantidadDeDivisores(numEntero, divisores) {
    for (divisores = 1; divisores <= numEntero; divisores++) {
        if (esMultiplo(numEntero, divisores)) {
            cantidadDiv++;
            console.log(divisores);
        }
    }
    return cantidadDiv;
}
cantidadDeDivisores(numEntero, divisores);
