let numeros =  [1000, 100, 60, 40, 2000]
let total = 0
let mayor = 0

for (i = 0; i < numeros.length ; i++) {

    total = total + numeros[i]

    if( numeros[i] > numeros[numeros.length - (numeros.length-1)] ){

        mayor = numeros[i]

    }

    


    }

    console.log(total)

    console.log(mayor)