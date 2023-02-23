//cadena nombre
let nombre="Veronica"
console.log(nombre)
//cadena apellido
let apellido="Gaitan"
console.log(apellido)
//cadena estudiante
let estudiante=`${nombre} ${apellido}`
console.log(estudiante)
//en mayuscula estudiante
let estudianteMayus=estudiante.toLocaleUpperCase()
console.log(estudianteMayus)
//en minuscula estudiante
let estudianteMinus=estudiante.toLocaleLowerCase()
console.log(estudianteMinus)
//numero de letras de la cadena 
let numeroEstudiante=estudiante.length;
console.log(numeroEstudiante)
//primera letra del nombre
let variableNombre=nombre.startsWith("V")
console.log(variableNombre)
//Ultima letra del apellido
let variableApellido=apellido.endsWith("n")
console.log(variableApellido)
//Eliminar espacios de estudiante(/\s+/g)
let sinEspacios=estudiante.replace(/\s+/g,"")
console.log(sinEspacios)
//nombre contenido en la variable estudiante
let contenido=estudiante.includes("Veronica")
console.log(contenido)