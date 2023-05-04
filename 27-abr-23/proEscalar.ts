/* Cargar dos arreglos de dimencion N numeros (la cantidad es ingresada por el usuario)
Calcule el producto escalar entre los dos arreglos: */

import * as rls from "readline-sync"

let dim: number = rls.questionInt("Ingrese la cantidad de N :");
let arr1: number [] = new Array[dim];
let arr2: number []= new Array[dim];

let cargaArr = (arr: number[]): void =>{
    for(let i: number = 0; i < arr.length; i++) {
        arr[i] = rls.questionInt(`Input number in position ${i + 1}: `)
    }
    console.log(arr);
}

let productoEscalar = (arrA: number[], arrB: number[]): void => {
    let resultado = 0;
    for (let i = 0; i < arrA.length; i++) {
        resultado = resultado + (arrA [i] * arrB [i]);
    }
    console.log(resultado);
}

cargaArr(arr1);
cargaArr(arr2);
productoEscalar(arr1, arr2);