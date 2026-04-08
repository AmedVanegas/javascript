let numeros = [ 2, 5, 7, 12, 0, 17, 22];

let pares = []

let impares = []

for( i = 0 ; i < numeros.length ; i++ ){


    if( ( numeros[i] % 2 ) === 0 )
        {

        pares.push( numeros[i] )
        




    }else {
        impares.push( numeros[i] ) 
    }




}

console.log(pares)

console.log( impares)