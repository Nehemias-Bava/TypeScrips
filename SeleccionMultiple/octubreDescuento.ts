/* •Una tienda al cumplir años en Octubre ofrece
un descuento del 15% a sus clientes en todas
sus compras
•Desarrolle un algoritmo que dada una compra:
precio unitario, cantidad y el mes, indicados
por el usuario, determine si el cliente tiene
descuento o no */

import * as rls from "readline-sync";

let cantProducto : number = rls.questionInt("Ingrese la cantidad de los producto que compro: ");
let precio : number = rls.questionInt("Ingrese el valor del producto: ");
const mes : string = rls.question("Ingrese el mes: ");
let descuento : number = 0;
let subtotal : number = 0;
let precioFinal : number;

subtotal = (precio * cantProducto);
descuento = (subtotal * 0.15);
precioFinal = (subtotal - descuento);


switch (mes) {
    case "Julio":
        console.log("El valor de su compra es: ", subtotal);
    break;
    case "Agosto":
        console.log("El valor de su compra es: ", subtotal);
    break;
    case "Septiembre":
        console.log("El valor de su compra es: ", subtotal);
    break;
    case "Octubre":
        console.log("Es nuestro cumpleaños y tenemos un 15% de descuentos, el valor a pagar es de: ", precioFinal, "y tienes un descuento de: ", descuento);
    break;
    case "Noviembre":
        console.log("El valor de su compra es: ", subtotal);
    break;
    case "Diciembre":
        console.log("El valor de su compra es: ", subtotal);
    break;
    default:
    console.log("Vuelva a intentarlo");
    break;
}

