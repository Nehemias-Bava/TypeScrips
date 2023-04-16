/* .Realice un programa que devuelva la potencia de un numero.
.La base y el exponente deben ser ingresados por teclado.
.Deben admitirce solo exponentes mayores o iguales a cero.
.Recuerde que el resultado de un numero elevado a 0 es 1.
.Separe la logica de calcular la potencia utilizando metodos. */

import * as rls from "readline-sync"

let base: number = rls.questionInt("Ingrese el valor de la base: ");
let exponente: number = rls.questionInt("Ingrese el valor de exponente: ");
let potencia: number = 0;
let contador: number = 0;

function calcularPotencia(){

    potencia = base ** exponente;
    console.log("La potencia de", base, "ala", [exponente], "es: ", potencia);

return potencia;
}

    while(exponente >= 0){
        calcularPotencia();
        contador++;
        base = rls.questionInt("Ingrese el valor de base: ");
        exponente = rls.questionInt("Ingrese el valor de exponente: ");
    }
    console.log("Error");






