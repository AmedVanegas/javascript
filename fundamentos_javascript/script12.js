let tipo = prompt("que desea convertir")
let valor = Number(prompt("ingrese valor"))
let valorFinal = 0

if (valor <= 0 || ( tipo !== "centimetros" && tipo !== "milimetros")) {

    console.log("ingrese un valor valido")

}

else {

    if (tipo == "centimetros") {

        valorFinal = valor * 10 
        console.log(valor, "centimetros son", valorFinal, "milimetros")


    }
    if (tipo == "milimetros") {

        valorFinal = valor / 10 
        console.log(valor, "milietros  son", valorFinal, "centimetros")


    }

}