let numeros = [11, 9, 7, 6, 5]
let total = 0
let mayor = numeros[0]


for (i = 0; i < numeros.length; i++) {

    total = total + numeros[i]

    if (mayor < numeros[i] ) {

        mayor = numeros[i]

    } 




}

console.log(total)

console.log(mayor)