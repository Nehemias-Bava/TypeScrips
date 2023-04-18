/* -Implemente un metodo llamado cantidadDeDivisores que reciva un numero entero y devuelva la cantidad de divisores.
-Por ejemplo, para el numero 16, sus divisores son 1, 2, 4, 8, 16, por lo que la respuesta deberia ser 5.
-Re-Uilice el metodo esMultiplo implementado para el ejercicio anterior. */



import * as rls from "readline-sync"

/*
MULTIPLOS;
*/


let num1: number;
let num2: number;

function esMultiplo(num1: number, num2: number):boolean{
    if(num1 % num2 == 0){
        return true;
    }else{
        return false;
    }
}

/*
POTENCIAS;
*/

let numEntero: number = rls.questionInt("Ingrese un numero entero: ");
let divisores: number = 0;
let cantidadDiv: number =0;


function cantidadDeDivisores(numEntero: number, divisores: number): number{
    for(divisores = 1; divisores <= numEntero; divisores++){

        if (esMultiplo(numEntero, divisores)){
            cantidadDiv++;
            console.log(divisores);
        }
    }return cantidadDiv;
    
}
cantidadDeDivisores(numEntero, divisores);