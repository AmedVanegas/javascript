let one = document.getElementById('one');
let two = document.getElementById('two');
let three = document.getElementById('three');

one.addEventListener("click", () => {


    let options = ["piedra", "papel", "tijeras"]

    let azar = Math.floor(Math.random() * 3)

    let computer = options[azar]

    let usuario = prompt(`
    Escoge: 
    
    Piedra, Papel o Tijeras
    
    `

    )

    if (usuario == computer) {

        alert("Empate :|")

    }

    else if (

        (usuario == "tijeras" && computer == "papel") ||
        (usuario == "piedra" && computer == "tijeras") ||
        (usuario == "papel" && computer == "piedra")) {

        alert("Ganaste :) ")

    }

    else {

        alert("Perdiste :( ")

    }





})

two.addEventListener("click", () => {

    let azar = Math.floor((Math.random() * 100) + 1)

    let estado = true

    i = 1


    while (estado) {

        let user = Number(prompt("dime un numero del 1 al 100"))



        if (user > azar) alert(`intenta un poco menos`), i++
        else if (user < azar) alert(`intenta un poco mas`), i++
        else alert(`ganaste en ${i} intentos`), estado = false

    }




})
three.addEventListener("click", () => {

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



})
