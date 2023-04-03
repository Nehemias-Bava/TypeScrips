//Debe medir 1.30 mts o mas


import * as rls from"readline-sync";

let alturaMinima: number = 1.30;
let alturaIngresada: number = rls.questionFloat("Ingrese su altura: ");

if (alturaIngresada >= alturaMinima){
    console.log("La altura fue confimada y puede subir a la atraccion");
}else{
    console.log("No puede subir ala atraccion por no llegar a 1.30, lo sentimos");
}
