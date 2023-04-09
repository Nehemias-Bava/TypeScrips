/*• Diseñar un algoritmo que lea números enteros hasta
teclear 0
• Determinar y mostrar el máximo, el mínimo y la media de todos los
números ingresados
• Pensar cuidadosamente cómo debemos inicializar
las variables */

import * as rls from "readline-sync"


let numeroI, negativos, positivos : number;
negativos = 0;
positivos = 0;
let suma : number = 0;
let porcentaje : number = 0;

while(numeroI != 0){
    numeroI = rls.questionInt("Ingrese un numero: ");

    if(numeroI > positivos && numeroI != 0){
        positivos = positivos + 1;

    }if(numeroI < negativos && numeroI != 0){
        negativos = negativos + 1;
        
    }if(numeroI == 0){
        suma = negativos + positivos;
        porcentaje = (positivos * 100) / suma;

        console.log(positivos, "Son mayores a 0 y el ", porcentaje, "% son los positivos");
    }
}
