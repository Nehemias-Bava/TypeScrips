/*• Al tirar un dado tenemos 1/6 de probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36 probabilidades de sacar doble 6
• Al aumentar el número de dados la probabilidad de sacar todos 6 es cada
vez menor.

• Escriba un programa que calcule la probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato ingresado por el usuario) */



import * as rls from "readline-sync"

const dado : number = 1/6;
let nDados : number = rls.questionInt("Con cuantos dados tiras?: ");
let probabilidad : number = 0;


probabilidad = dado ** nDados;

console.log("La probabilidad de sacar 6 en ", nDados, " dados es de:", probabilidad);
