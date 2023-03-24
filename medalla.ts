/*
• Desarrolle un algoritmo que, dada una posición en
una carrera se determine el tipo de medalla a
entregar.
• Tenga en cuenta que para el primer puesto se
entrega medalla de oro, segundo puesto medalla
de plata y tercer puesto medalla de bronce. En
caso que quede en otra posición se entrega
certificado de participación */

import * as rls from "readline-sync";

const position : number = rls.questionInt("En que posicion quedo?: ");
let message: string = ""

if(position <= 0){
    message = "La posicion ingresada no es valida"
} else if(position === 1) {
    message = "Medalla de Oro"
} else if(position === 2){
    message = "Medalla de Plata"
} else if(position === 3) {
    message = "Medalla de Bronce"
}else{
    message = "Certificado de Participacion";
}


console.log(message);
