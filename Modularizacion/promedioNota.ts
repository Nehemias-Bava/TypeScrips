import * as rls from "readline-sync"


let nota, suma, promedio, cantNotas, contador : number;

contador = 1;
suma = 0;
cantNotas = 10

while(contador <= cantNotas){
    nota= rls.questionInt("Ingrese una nota: ");
    suma = suma + nota;
    contador = contador + 1
}
promedio = suma / cantNotas

console.log("El promedio de las notas es de: ", promedio)
