/* • Desarrolle un algoritmo que permita cargar alumnos y sus 
notas en los tres trimestres
• Se debe permitir obtener el promedio anual (es decir, de sus 
tres notas) de un alumno (ingresado por el usuario)
• Luego de resolverlo, pensar en aprovechar métodos y discutir 
cómo representar la información */

import * as rls from "readline-sync"

interface Alumno {
    nombre: string;
    notasTrimestres: number[][];
}

function cargarAlumnos(): Alumno[] {
    const cantidadAlumnos: number = rls.question("Ingrese la cantidad de alumnos: ");
    const alumnos: Alumno[] = [];

    for (let i = 0; i < cantidadAlumnos; i++) {
    const nombre: string = rls.question("Ingrese el nombre del alumno " + (i + 1) + ": ");
    const notasTrimestres: number[][] = [];

    for (let j = 0; j < 3; j++) {
        const notasTrimestre: number[] = [];
        for (let k = 0; k < 3; k++) {
            const nota: number = rls.questionInt("Ingrese la nota del trimestre " + (j + 1) + " para el alumno " + nombre + ": ");
        notasTrimestre.push(nota);
        }
        notasTrimestres.push(notasTrimestre);
    }

    const alumno: Alumno = {
        nombre: nombre,
        notasTrimestres: notasTrimestres
    };
    alumnos.push(alumno);
    }
    return alumnos;
}

function calcularPromedioTrimestral(alumnos: Alumno[], nombreAlumno: string): number[] {
    for (let i = 0; i < alumnos.length; i++) {
        if (alumnos[i].nombre === nombreAlumno) {
            const notasTrimestresAlumno: number[][] = alumnos[i].notasTrimestres;
            const promediosTrimestrales: number[] = [];

            for (let j = 0; j < notasTrimestresAlumno.length; j++) {
                const notasTrimestre: number[] = notasTrimestresAlumno[j];
                const promedioTrimestre: number = notasTrimestre.reduce((a, b) => a + b) / notasTrimestre.length;
                promediosTrimestrales.push(promedioTrimestre);
            }
            return promediosTrimestrales;
        }
    }
    return [];
}
    const listaAlumnos: Alumno[] = cargarAlumnos();
    const nombreBuscado: string = rls.question("Ingrese el nombre del alumno para calcular los promedios trimestrales:  ");
    const promediosTrimestrales: number[] = calcularPromedioTrimestral(listaAlumnos, nombreBuscado);
    console.log("Los promedios trimestrales del alumno " + nombreBuscado + " son: ");
    for (let i = 0; i < promediosTrimestrales.length; i++) {
        console.log("Trimestre " + (i + 1) + ": " + promediosTrimestrales[i]);
}


