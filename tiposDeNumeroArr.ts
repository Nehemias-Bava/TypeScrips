// • Almacene en un arreglo de dimensión N números (lacantidad es ingresada por el usuario).
// • Muestre cuántos números son positivos, cuántos son
// negativos y cuántos ceros hay.


import * as rls from "readline-sync"

const dim: number = rls.questionInt("Dimension del vector: ");
let numsArr: number[] = new Array(dim);
for (let i: number = 0; i < numsArr.length; i++) {
    numsArr[i] = rls.questionInt("Enter a number: ");
}
