"use strict";
// • Almacene en un arreglo de dimensión N números (lacantidad es ingresada por el usuario).
// • Muestre cuántos números son positivos, cuántos son
// negativos y cuántos ceros hay.
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var dim = rls.questionInt("Dimension del vector: ");
var numsArr = new Array(dim);
for (var i = 0; i < numsArr.length; i++) {
    numsArr[i] = rls.questionInt("Enter a number: ");
}
