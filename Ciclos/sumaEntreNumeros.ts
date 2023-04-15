/* • Escriba un programa que pida al usuario dos números
enteros, y luego retorne la suma de todos los números
que están entre ellos
• Por ejemplo, si los números son 2 y 7, debe entregar
como resultado 2 + 3 + 4 + 5 + 6 + 7 = 27 */


import * as rls from "readline-sync"



const n1 : number = rls.questionInt("Ingrese el primer numero: ");
const n2 : number = rls.questionInt("Ingrese el segundo numero: ");
let result : number = 0;


if(n1 > n2){
    console.log("****");
}
for(let i : number = n1; i <= n2; i++){
    result = result + i;
}
console.log(result);