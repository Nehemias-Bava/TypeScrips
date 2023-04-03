//Ejercicios de operadores logicos (IF, ELSE)


import * as rls from"readline-sync";

let edadUsuario : number = rls.questionInt("Ingrese su edad: ");

if (edadUsuario >= 18) {
    console.log("El usuario es mayor de edad");
} else{
    console.log("El usuario es menor de edad");
}

