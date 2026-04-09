const estudiantes = [
  { nombre: "Juan", apellido: "Pérez", notaFinal: [2.0, 4.5, 5.0, 3.5] },
  { nombre: "María", apellido: "Gómez", notaFinal: [2.0, 4.5, 5.0, 3.5] },
  { nombre: "Carlos", apellido: "Rodríguez", notaFinal: [2.0, 4.5, 5.0, 3.5] },
  { nombre: "Ana", apellido: "Martínez", notaFinal: [] },
  { nombre: "Luis", apellido: "Fernández", notaFinal: []}
];

for(i = 0 ; i < estudiantes.length ; i ++ ){

    let note = estudiantes[i].notaFinal
    let name = estudiantes[i].nombre
    let estado = ""

    if ( estudiantes[i].notaFinal < 3.0) estado = "perdio"
    else if (estudiantes[i].notaFinal < 4.0) estado = "nivela"
    else  estado = "paso" 

    console.log(`El estudiante ${name} ${estado} la materia con ${note}`)



}