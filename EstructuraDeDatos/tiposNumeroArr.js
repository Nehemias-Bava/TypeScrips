"use strict";
/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.
1
Ejemplo:
v = 0, -7, -9, 1, 0, 0
La salida es: 1 positivos, 2 negativos y 3 */
Object.defineProperty(exports, "__esModule", { value: true });
var rls = require("readline-sync");
var num = rls.questionInt("Ingrese numero: ");
for (var i = 0; i < num.length; i++) {
    console.clear();
}
console.log(num);
