/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.

Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 
*********   CON ARREGLOS   *******         */

import * as rls from "readline-sync"


const n: number = rls.questionInt("Ingrese la cantidad de numeros a almacenar: ");
const numeros: number[] = new Array(n);

for (let i = 0; i < n; i++) {
    numeros[i] = rls.questionInt(`Ingrese el numero ${i + 1}: `);
}

function contarNumeros(numeros: number[]): [number, number, number] {
    let positivos = 0;
    let negativos = 0;
    let ceros = 0;

    for (const num of numeros) {
        if (num > 0) {
            positivos++;
        } else if (num < 0) {
            negativos++;
        } else {
            ceros++;
        }
    }
    return [positivos, negativos, ceros];
}

function ordenarNumeros(numeros: number[]): number[] {
    return numeros.sort((a, b) => a - b);
}

const [positivos, negativos, ceros] = contarNumeros(numeros);
const numerosOrdenados = ordenarNumeros(numeros);

console.log(`Numeros ordenados: ${numerosOrdenados.join(", ")}`);
console.log(`Numeros positivos: ${positivos}`);
console.log(`Numeros negativos: ${negativos}`);
console.log(`Numeros ceros: ${ceros}`);
