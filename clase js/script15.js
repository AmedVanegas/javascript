
let data = [2024, 100, 3000, 2100]
let biciesto = ""


for (i = 0; i < data.length; i++) {

    if ((data[i] % 4 == 0 && data[i] % 100 !== 0) || (data[i] % 400 == 0)) {

        alert(`el año ${data[i]} es biciesto`)


    } else {

        alert(`el año ${data[i]} no es biciesto`)
    }



}



// if ((año % 4 == 0 && año % 100 !== 0) || (año % 400 == 0)) {

//     alert(`el año ${año} es biciesto`)


// } else {

//     alert(`el año ${año} no es biciesto`)
// }