/* • Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus 
tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información */

import * as rls from "readline-sync"


function cargarNotas(nombre: string, notas: number[]): void {
    for (let i = 0; i < 3; i++) {
        const nota = rls.questionInt(`Ingrese la nota del trimestre ${i + 1} para ${nombre}: `);
        notas.push(nota);
    }
}

//Busque y utilice el metodo ' .reduce ': Permite iterar sobre los elementos dentro de la array y convinarlos en un resultado;
function calcularPromedio(notas: number[]): number {
    const sumaNotas = notas.reduce((a, b) => a + b, 0);
    return sumaNotas / notas.length;
}


const nombreAlumno = rls.question("Ingrese el nombre del alumno: ");


const notasAlumno: number[] = [];


cargarNotas(nombreAlumno, notasAlumno);


const promedio = calcularPromedio(notasAlumno);
console.log(`El promedio anual de ${nombreAlumno} es: ${promedio}`);