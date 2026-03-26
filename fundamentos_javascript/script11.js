let base = Number(prompt("ingrese la medida de la base"))
let altura =Number(prompt("ingrese la altura"))
let areaFinal = 0

if ((altura || base) <= 0) {

    console.log("ingrese un valor valido")

}

else {

  areaFinal = (base * altura) / 2

  console.log("el area de su triangulo es:", areaFinal)

}