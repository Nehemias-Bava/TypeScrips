/* • Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus 
tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información */

import * as rls from "readline-sync"


type Alumno = {
    nombre: string;
    notas: number[];
};


function cargarNotas(alumno: Alumno): void {
    for (let i = 0; i < 3; i++) {
        const nota = rls.questionInt(`Ingrese la nota del trimestre ${i + 1} para ${alumno.nombre}: `);
        alumno.notas.push(nota);
    }
}


function calcularPromedio(alumno: Alumno): number {
    const sumaNotas = alumno.notas.reduce((a, b) => a + b, 0);
    return sumaNotas / alumno.notas.length;
}


const alumno: Alumno = {
    nombre: rls.question("Ingrese el nombre del alumno: "),
    notas: []
};
cargarNotas(alumno);


const promedio = calcularPromedio(alumno);
console.log(`El promedio anual de ${alumno.nombre} es: ${promedio}`);