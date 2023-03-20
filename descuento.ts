import * as rls from "readline-sync";

const precio: number = rls.questionFloat("Ingrese el precio del producto: ");
const porDescuento: number = rls.questionFloat("Ingrese la procentaje de descuento: ");
const descuento: number = precio * porDescuento;
const totalAPagar: number = precio - descuento;

console.log("Tienes un descuento de: ", descuento);
console.log("El total a pagar seria: ", totalAPagar);
