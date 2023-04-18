/* -Cree un metedo esMultiplo con 2 parametros que devuelvan el valor logico de VERDADERO o FALSO
segun el primer numero que se indique como parametro es multiplo por el segundo. 
-Recuerde que un numero es multiplo de otro al dividirlo y que su resto es cero.
-Recuerde que la operacion MOD permite saber si el resto de una division es cero.  */


import * as rls from "readline-sync"

let num1: number = rls.questionInt("Ingrese el primer numero: ");
let num2: number = rls.questionInt("Ingrese el segundo numero: ");



function esMultiplo(num1: number, num2: number):boolean{
    if(num1 % num2 == 0){
        return true;
    }else{
        return false;
    }
}
console.log(esMultiplo(num1, num2));