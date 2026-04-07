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

else if ((usuario == "tijeras" && computer == "papel") || (usuario == "piedra" && computer == "tijeras") || (usuario == "papel" && computer == "piedra")) {

    alert("Ganaste :) ")


}

else  {

    alert("Perdiste :( ")


}