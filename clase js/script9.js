let numeros =  [1000, 3, 60, 40, 300]
let total = 0
let mayor = 0

for (i = 0; i < numeros.length ; i++) {

    total = total + numeros[i]

    if(  numeros[0]  > numeros[i] ){

        mayor = numeros[0]

    }else{

        mayor = numeros[i]
    }

    


    }

    console.log(total)

    console.log(mayor)