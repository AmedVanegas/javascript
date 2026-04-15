
export function paresImpares(numeros) {

    let pares = []
    let impares = []
    for (let i = 0; i < numeros.length; i++) {

        let num = numeros[i]

        if (num % 2 == 0) {



            pares.push(num)

        } else {
            impares.push(num)

        }

    }

    console.log(`Pares: ${pares}`)
    console.log( `impares: ${impares}`)

}

export function holaA (arrays){

   
    console.log("hola ".repeat(arrays.length ))



}