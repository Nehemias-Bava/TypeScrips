/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 */

import * as rls from "readline-sync"

const n: number = rls.questionInt("Ingrese la cantidad de numeros a almacenar: ");
const numeros: number[] = new Array(n);

for (let i = 0; i < n; i++) {
    numeros[i] = rls.questionInt(`Ingrese el numero ${i + 1}: `);
}

let positivos = 0;
let negativos = 0;
let ceros = 0;

// El {for...of} ejecuta un bloque de codigo para cada elemento de un objeto iterable;
//En este caso 'num' & 'numeros';
for (const num of numeros) {
    if (num > 0) {
    positivos++;
    } else if (num < 0) {
    negativos++;
    } else {
    ceros++;
    }
}
// ${.sort} Es un metodo de comparacion de array's;
// Devuelve un número negativo si 'a' es menor que 'b', cero si son iguales y un número positivo si 'a' es mayor que 'b';
numeros.sort((a, b) => a - b);

console.log("V = ", numeros.join(", "));
console.log(`Números positivos: ${positivos}`);
console.log(`Números negativos: ${negativos}`);
console.log(`Números ceros: ${ceros}`);
