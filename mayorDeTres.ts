import * as rls from "readline-sync";

let num1 : number = rls.questionInt("Ingrese el primer numero: ");
let num2 : number = rls.questionInt("Ingrese el segundo numero: ");
let num3 : number = rls.questionInt("Ingrese el tercer numero: ");


if(num1 > num2 && num1 > num3){
    console.log("El numero mas grande es: ", num1);
} else if(num2 > num3){
    console.log("El numero mas grande es: ", num2);
} else{
    console.log("El numero mas grande es: ", num3);
}