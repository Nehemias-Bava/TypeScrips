/*
•Desarrollar un algoritmo que dado un número,
ingresado por el usuario determine si el
número es par o impar y le informe al usuario
•En el caso de ser 0 (cero) el algoritmo deberá
informarlo */

import * as rls from "readline-sync";


let num : number = rls.questionInt("Ingrese un numero: ");


if(num == 0){
    console.log("El numero que ingresaste es: ", num);
} else if(num % 2 == 0){
    console.log("El numero", num, "es par");
} else{
    console.log("El numero", num, "es impar");
}


