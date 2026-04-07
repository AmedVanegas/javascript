let valor = Number(prompt("cuanto dinero ingresas"))
let meses = Number(prompt("cuantos meses"))

let interes = (valor * (1 + (0.10 / meses) ** (meses * 1)))


console.log(`usted tendra ${interes} pesos en ${meses} `)


