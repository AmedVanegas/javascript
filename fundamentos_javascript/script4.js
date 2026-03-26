let tipo = prompt("que desea convertir")
let valor = Number(prompt("ingrese valor"))
let valorFinal = 0

if (valor <= 0 || ( tipo !== "metros" && tipo !== "kilometros")) {

    console.log("ingrese un valor valido")

}

else {

    if (tipo == "metros") {

        valorFinal = valor / 1000
        console.log(valor, "metros son", valorFinal, "kilometros")


    }
    if (tipo == "kilometros") {

        valorFinal = valor * 1000
        console.log(valor, "kilometros son", valorFinal, "metros")


    }

}