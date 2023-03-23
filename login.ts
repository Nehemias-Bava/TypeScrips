//Validar USUARIO y CONTRASEÑA ingresado por consola, y que compare con los datos ya regristrados. 
//Datos registrados: User=Juan ; Clave=claveJuan

import * as rls from"readline-sync";


let Juan: boolean = true;
let claveJuan: boolean = true;

let user: string = rls.question("Ingrese el usuario: ");
let clave: string = rls.question("Ingrese la contraseña: ");

if(user == "Juan" && clave == "claveJuan") {
    console.log("*** Ingresaste correctamente al sistema ***");
}
else{
    console.log("El usuario o contraseña ingresada no esta registrado, porfavor verifique el usuario y contraseña");
}