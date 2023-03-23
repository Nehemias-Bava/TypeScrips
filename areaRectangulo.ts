import * as rls from"readline-sync";

const base: number = rls.questionInt("Ingrese la base: ");
const altura: number = rls.questionInt("Ingrese la altura: ");
const area: number = base * altura; 


console.log("El area es: ", area);