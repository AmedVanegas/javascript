 let num = Number(prompt(` ¿ De que numero quieres tu tabla ? `))

 let largo = Number(prompt( ` ¿ Hasta que numero quieres tu tabla ?`))

 if ( num > 11 || num < 1){

    alert("Ingrese un numero valido")



 } else{

    for (i = 1 ; i < ( largo + 1 ) ; i++){

    console.log(`${num} * ${i}  = ${i * num}`)


}



}