let palabras = ["sol", "montaña", "río", "ciudad",
    "libro", "música", "cielo", "mar", "bosque", "luz", 
    "camino", "nube", "tiempo"]

let larga = palabras[0]

let corta = palabras[0]

let inversion = []


for(i = 0 ; i < palabras.length ; i++ ){

    console.log(palabras[i])

    console.log(`longitud : ${palabras[i].length}`)


    if ( larga.length < palabras[i].length ) {

        larga = palabras[i]
        
    }

     if ( corta.length > palabras[i].length ) {

        corta = palabras[i]
        
    }

}

for (j = palabras.length - 1 ; j >= 0; j-- ){

    
    inversion.push( palabras[j] )




}






console.log( `La palabra mas larga es : ${larga}` )

console.log( `La palabra mas corta es : ${corta}` )

console.log(palabras)

console.log(inversion)



