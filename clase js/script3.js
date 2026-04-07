let costo = Number(prompt("cuanto costo el producto"))

let costoConEnvio = costo + (costo * 0.10)


160

if (costo <= 0) {

    alert("ingrese un valor valido")


}



else if (costo < 100) {

    console.log(costoConEnvio)

}

else if (costo >= 100 && costo < 200) {

    console.log(costoConEnvio - (costoConEnvio * 0.10))


}

else {

    console.log(costoConEnvio - (costoConEnvio * 0.20))

}





