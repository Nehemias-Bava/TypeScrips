"use strict";
/*• Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada
vez menor.

• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario) */
exports.__esModule = true;
var rls = require("readline-sync");
var dado = 1 / 6;
var nDados = rls.questionInt("Con cuantos dados tiras?: ");
var probabilidad = 0;
probabilidad = Math.pow(dado, nDados);
console.log("La probabilidad de sacar 6 en ", nDados, " dados es de:", probabilidad);
