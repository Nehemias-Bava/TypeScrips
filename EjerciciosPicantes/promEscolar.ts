/* • Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus 
tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información */

import * as rls from "readline-sync"


let nota1: number = 0;
let nota2: number = 0;
let nota3: number = 0;
let promedio: number = 0;

let trimestres1: number = 0;
let trimestres2: number = 0;
let trimestres3: number = 0;

let promAnual: number = 0;

let nombre: string;

function cargarAlumnos() {
    const cantidadAlumnos: number = rls.question("Ingrese cuantos Alumnos son: ");
    const nombresAlumnos: string[] = [];

    for (let i = 0; i < cantidadAlumnos; i++) {
        nombre = rls.question("Ingrese el nombre del alumno " + (i + 1) + ":");
        nombresAlumnos.push(nombre);
    }
    console.log("Los nombres de los alumnos son: ");
    for (let i = 0; i < nombresAlumnos.length; i++) {
        console.log("- " + nombresAlumnos[i]);
    }
}
cargarAlumnos();

function promTrimestre() {
    nota1 = rls.questionInt("Ingrese la primer nota: ");
    nota2 = rls.questionInt("Ingrese la segunda nota: ");
    nota3 = rls.questionInt("Ingrese la tercer nota: ");
    
    if(nota1 <= 0 || nota1 > 10 || nota2 <= 0 || nota2 > 10 || nota3 <= 0 || nota3 > 10){
        console.log("Error");
    }else{
        promedio = (nota1 + nota2 + nota3) / 3;
        console.log("La nota final de", [], " es de:", [promedio]);
    } 
}
promTrimestre();


