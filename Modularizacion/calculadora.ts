import * as rls from "readline-sync"



let num1: number = rls.questionInt("Ingrese un numero: ");
let num2: number = rls.questionInt("Ingrese un numero: ");
let opcionMenu: number = rls.questionInt("Si ingresa el 1 para sumar, 2 para restar, y cuaquier otra tecla para salir  ");

function dibujarGuiones(cantidad: number){
    let x: number, linea: string = "-";
    for(let i = 0; i < cantidad; i++) {
        linea += "-";
    }
    console.log(linea);
}


if(opcionMenu == 1) {
    dibujarGuiones(40);
    console.log("El resultado es: ", num1 + num2);
    dibujarGuiones(40);
}else if(opcionMenu == 2) {
    dibujarGuiones(30);
    console.log("El resultado es: ", num1 - num2);
    dibujarGuiones(30);
}

