let data = [2024, 100, 3000, 2100]
let biciesto = ""


for (i = 0; i < data.length; i++) 

    ((data[i] % 4 == 0 && data[i] % 100 !== 0) || (data[i] % 400 == 0)) ? alert(`el año ${data[i]} es biciesto`) :alert(`el año ${data[i]} no es biciesto`)
    




