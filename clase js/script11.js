const estudiantes = [
  { nombre: "Juan", apellido: "Pérez", nota: [2.0, 4.5, 5.0, 3.5] },
  { nombre: "María", apellido: "Gómez", nota: [2.0, 4.5, 2.0, 2.0] },
  { nombre: "Carlos", apellido: "Rodríguez", nota: [2.0, 4.5, 5.0, 3.5] },
  { nombre: "Ana", apellido: "Martínez", nota: [2.0, 4.5, 3.5, 3.5] },
  { nombre: "Luis", apellido: "Fernández", nota: [2.0, 4.5, 5.0, 3.5] }
];

for(i = 0 ; i < estudiantes.length ; i ++ ){

    let note = estudiantes[i].nota
    let name = estudiantes[i].nombre
    let estado = ""
    let suma = 0
    let notaFinal = 0

    for(j = 0 ; j < note.length ; j++ ){

        suma = suma + note[j] 
    }

    notaFinal = suma / note.length 

    if ( notaFinal < 3.0) estado = "perdio"
    else if (notaFinal < 4.0) estado = "nivela"
    else  estado = "paso" 

    console.log(`El estudiante ${name} ${estado} la materia con ${notaFinal}`)



}