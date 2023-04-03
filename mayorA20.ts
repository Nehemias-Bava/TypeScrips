import * as rls from"readline-sync";


let numDeseado : number = rls.questionInt("Ingrese el numero que desea verificar si es mayor a 20: ");

if (numDeseado > 20){
    console.log("El numero ingresado es mayor a 20: "+ numDeseado);
}else{
    console.log("El numero ingresado es menor o igual a 20: "+ numDeseado);
}