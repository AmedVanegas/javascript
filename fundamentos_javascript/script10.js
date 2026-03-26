let tipo = prompt("que desea convertir")
let valor = Number(prompt("ingrese valor"))
let valorFinal = 0

if (valor <= 0 || ( tipo !== "minutos" && tipo !== "segundos")) {

    console.log("ingrese un valor valido")

}

else {

    if (tipo == "minutos") {

        valorFinal = valor * 60
        console.log(valor, "minutos son", valorFinal, "segundos")


    }
    if (tipo == "segundos") {

        valorFinal = valor / 60 
        console.log(valor, "segundos son", valorFinal, "minutos")


    }

}