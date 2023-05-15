


function linearSearch(value: string | number, list: (number | string)[]): number {
    for (let i = 0; i < list.length; i++){
        if (list[i] === value) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearch("pepe", [1,5, "manzanas", "cat", "pepe", ":D", "900"])); 