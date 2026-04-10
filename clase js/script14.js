let mes = prompt("dime un mes y te digo la estación")

if (mes == "marzo" || mes == "abril" || mes == "mayo") {

    alert(`la estacion en ${mes} es primavera `)
} else if (mes == "junio" || mes == "julio" || mes == "agosto") {

    alert(`la estacion en ${mes} es verano `)
} else if (mes == "septiembre" || mes == "octubre" || mes == "noviembre") {

    alert(`la estacion en ${mes} es otoño`)
} else if (mes == "diciembre" || mes == "enero" || mes == "febrero") {

    alert(`la estacion en ${mes} es invierno`)
} else {
    console.log("ingresa un mes real porfa")
}