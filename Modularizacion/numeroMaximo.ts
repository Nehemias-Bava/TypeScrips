/*• Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo */

import * as rls from "readline-sync"

let num : number = rls.questionInt("Ingrese un numero: ");
let i = 0;
let min = 0;

while(num != 0){
    if(i <= num){
        i = num;
    }else if(min >= num){
        min = num;
    }
    num = rls.questionInt("Ingrese un numero: ");
}

console.log("El numero maximo ingresado:", i);
console.log("El numero minimo ingresado: ", min);


