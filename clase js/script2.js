let notas = [
    Number(prompt("primera nota")),
    Number(prompt("segunda nota")),
    Number(prompt("tercera nota")),
    Number(prompt("cuarta nota")),
    Number(prompt("quinta nota"))
]

let promedio = ( notas[0] + notas[1] + notas[2] + notas[3] + notas[4] ) /( notas.length)

alert(`tu promedio es ${promedio}`)