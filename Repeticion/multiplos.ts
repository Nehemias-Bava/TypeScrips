/* • Cree un algoritmo que visualice los
números que son múltiplos de 2 o
de 3 que hay entre 1 y 100
• Tener en cuenta que hay números
que son múltiplos de 2 y de 3 al
mismo tiempo
• En dichos casos, solamente
indique el número una vez */

import * as rls from "readline-sync"

let result : string = "";

for(let n : number = 1; n <= 100; n++){
    if(n % 2 === 0 || n % 3 === 0){
        result = result + n + " ";
    }
}


