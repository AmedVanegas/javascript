let año = Number(prompt("dime un año"))


if( ( año % 4 == 0 && año % 100 !== 0 ) || (año % 400 == 0 ) ){

    alert(`el año ${año} es biciesto`)


}else{

    alert(`el año ${año} no es biciesto`)
}