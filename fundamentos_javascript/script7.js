let tipo = prompt("que desea convertir")
let valor = Number(prompt("ingrese valor"))
let valorFinal = 0

if (valor <= 0 || (tipo !== "celcius" && tipo !== "farenheit")) {

    console.log("ingrese un valor valido")

}

else {

    if (tipo == "celcius") {

        valorFinal = (valor * 1.8) + 32
        console.log(valor, "grados celcius son", valorFinal, "grados farenheit")


    }
    if (tipo == "farenheit") {

        valorFinal = (valor - 32) / 1.8
        console.log(valor, "grados farenheit son", valorFinal, "grados celcius")


    }

}