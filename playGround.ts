

import * as rls from "readline-sync";

const lap1: number = rls.questionInt("ingrese tiempo de la 1ra vuelta");
const lap2: number = rls.questionInt("ingrese tiempo de la 2da vuelta");
const lap3: number = rls.questionInt("ingrese tiempo de la 3ra vuelta");
const lap4: number = rls.questionInt("ingrese tiempo de la 4ta vuelta");

console.log("El tiempo total es de ", lap1 + lap2 + lap3 + lap4);
console.log("El promedio de vuelta es ", (lap1 + lap2 + lap3 + lap4) / 4 );