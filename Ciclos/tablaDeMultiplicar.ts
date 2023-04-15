/*• Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor */


import * as rls from "readline-sync"


const tabla : number = rls.questionInt("La tabla del: ");
const num : number = rls.questionInt("Mostrar hasta el numero: ");
let multi : number = 1;
let result = 0;



while(multi <= num){
    result = tabla * multi;
    
    console.log(tabla,"x", multi,"=", result);
    multi++;
}



