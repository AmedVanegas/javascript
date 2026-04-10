let azar = Math.floor((Math.random() * 10) + 1)

let estado = true

i = 1

alert(azar)


while (estado) {

    let user = Number(prompt("dime un numero del 1 al 10"))



    if (i >= 6) {

        alert(`gastate tus 6 intentos`)
        estado = false



    } else if (user == azar) {


        alert(`ganaste en ${i} intentos`)
        estado = false


    } else {

        alert(`perdiste`)

        i++
    }

}