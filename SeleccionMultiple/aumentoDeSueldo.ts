/* • Una empresa desea premiar a sus empleados con un
aumento de sueldo. Este aumento se ajusta a la siguiente
tabla:



Sueldo Actual      --   Sueldo con Aumento
0 - 15.000 $       --   20%
15.001 - 20.000 $  --   10%
20.001 - 25.000 $  --   5%
Más de 25.000 $    --   No hay aumento

• Desarrolle un algoritmo dado el salario actual de un
empleado determine el aumento de sueldo a aplicar y
se lo muestre */

import * as rls from "readline-sync";

let sueldoActual : number = rls.questionInt("Ingrese el sueldo actual: ");

let nuevoSueldo : number = 0;

if (0 <= sueldoActual && sueldoActual <= 15000){
    nuevoSueldo = sueldoActual * 1.2;
    console.log("Tiene un aumento del 20%");
}else if (15001 <= sueldoActual && sueldoActual <= 20000){
    nuevoSueldo = sueldoActual * 1.1;
    console.log("Tiene un aumento del 10%");
}else if (20001 <= sueldoActual && sueldoActual <= 25000){
    nuevoSueldo = sueldoActual * 1.05;
    console.log("Tiene un aumento del 5%");
}else{
    nuevoSueldo = sueldoActual;
    console.log("No tienes ningun aumento")
}



