let nombre = prompt("dime tu nombre")
let valor = Number(prompt("dime el precio de tu producto"))
let descuento = Number(prompt("dime el valor del descuento"))
let valorConDescuento = valor * (100 - descuento) / 100
let valorFinal = valorConDescuento

if (valorConDescuento <= 0) {

    console.log("INGRESE UN VALOR VALIDO")
}

else {

    if (valorConDescuento < 100) {

        valorFinal = valorConDescuento


    }
    if (valorConDescuento >= 100) {

        valorFinal = valorConDescuento + (valorConDescuento * 0.1)


    }
    if (valorConDescuento >= 200) {

        valorFinal = valorConDescuento + (valorConDescuento * 0.2)
    }

    console.log(nombre, "el valor de tu producto con descuento es :", valorFinal)

}


