const estudiantes = [
  { nombre: "Juan", apellido: "Pérez", notaFinal: 4.5 },
  { nombre: "María", apellido: "Gómez", notaFinal: 3.8 },
  { nombre: "Carlos", apellido: "Rodríguez", notaFinal: 2.0 },
  { nombre: "Ana", apellido: "Martínez", notaFinal: 4.9 },
  { nombre: "Luis", apellido: "Fernández", notaFinal: 3.5 }
];

for(i = 0 ; i < estudiantes.length ; i ++ ){

    let note = estudiantes[i].notaFinal
    let name = estudiantes[i].nombre
    let estado = 0

    if ( estudiantes[i].notaFinal < 3.0){

        estado = "perdio"



    }else if (estudiantes[i].notaFinal < 4.0){

        estado = "nivela"

    }else{

        estado = "paso"


    }

    console.log(`El estudiante ${name} ${estado} la materia con ${note}`)



}