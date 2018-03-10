console.log("Hola Mundo")

function suma() {
	var x = 1
	var y = 2
	console.log(x+y)
}

suma()

function restar(x, y) {
	var resultado = x-y
	console.log(resultado)
}

restar(10, 5)

function miFuncion(nombre, apellido) {
	var nombreCompleto = nombre + " " + apellido
	return nombreCompleto
}

var nombreCompleto = miFuncion("Walter", "Rivarola")
console.log(nombreCompleto)

//Funciones anonimas
var miFuncion = function() {
	return 5 + 4
}

console.log(miFuncion())

console.log(function(a, b) {
	return a - b
} (5, 1))

// Funcion anonimas ES6
//let miVariable = "Hola"
//(a, b) => { return "Arrow Function"}