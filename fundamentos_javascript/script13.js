let nombre = "juan"
let edad = 33;
let correo = "juan@gmail.com"

// console.log(`hola ${nombre}`)


let valorCena = Number(prompt("dime el costo de la cena "));
let nPersonas = Number(prompt("dime el numero de personas "));
let nombreMas = prompt("quien comio mas?");
let nombreMenos = prompt("quien comio menos?");
let vPersona = valorCena / (nPersonas + 0.2);
let mas = vPersona*2;
let medio = vPersona*0.5;
let mitad = Math.trunc(vPersona*0.8);;





alert(`El valor de la cena por cada persona es ${vPersona.toFixed(0)} pero ${nombreMas} paga ${mas.toFixed(0)} y ${nombreMenos} paga ${mitad.toFixed(0)}  sara come ${medio.toFixed(0)}`)

