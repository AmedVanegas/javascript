let operacion = Number(prompt(

    `
    ¿ Qué operación quieres hacer?

    1) Suma
    2) Resta
    3) División
    4) Multiplicación
    5) Potenciación 
    

    
    `

))




if ( operacion > 5 || operacion < 1)  {

    alert(`No existe esa operación`)


}

else {


    let num1 = Number(prompt("dime tu primer numero"))

    let num2 = Number(prompt("dime tu segundo numero"))

    if ( operacion == 1 ) {

        alert(`La suma entre ${num1} y ${num2} es ${num1 + num2}`)


    }


    else if (operacion == 2 ) {

        alert(`La resta entre ${num1} y ${num2} es ${num1 - num2}`)


    }
    else if ( operacion == 3 ) {

        alert(`La cociente de ${num1} entre ${num2} es ${num1 / num2}`)


    }

    else if( operacion == 4 ) {

        alert(`El producto entre ${num1} y ${num2} es ${num1 * num2}`)


    }

    else {

        alert(` ${num1} elevado a ${num2} es ${num1 ** num2}`)


    }

}