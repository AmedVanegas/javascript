let tipo = prompt("que desea convertir")
let valor = Number(prompt("ingrese valor"))
let valorFinal = 0

if (valor <= 0 || ( tipo !== "dolares" && tipo !== "pesos")) {

    console.log("ingrese un valor valido")

}

else {

    if (tipo == "dolares") {

        valorFinal = valor * 3693
        console.log("$ " , valor, "dolares son", valorFinal, "pesos colombianos")


    }
    if (tipo == "pesos") {

        valorFinal = valor / 3693
        console.log( "$ " ,valor, "pesos colombianos son , $" , valorFinal, "dolares")


    }

}