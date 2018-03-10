var i = 0

for (var i; i<5; i++) {
	console.log("Ejec.. nro: ", i)
}

//Objeto Literal
var persona = {
	nombre: "Walter",
	apellido: "Rivarola",
	edad:23,
	nombreCompleto: function (){return this.nombre+" "+this.apellido}}

var txt = ""
var person = {fname: "Jhon", lname:"Doe", age:25}
var x//atributo o indice

for(x in person) {
	//console.log(x)
	txt += person[x] + " "
	console.log(txt)
}

var posts = [
	{
		titulo: "Programacion en Javascript",
		texto: "Javascript is the programming language of HTML and the Web",
	},
	{
		titulo: "Intro a Linux",
		texto: "Javascript is the programming language of HTML and the Web",
	},
	{
		titulo: "No usen windows pirata",
		texto: "Javascript is the programming language of HTML and the Web",
	},
]

posts.map(function(post){
	var titulo = post.titulo
	console.log(titulo)
	var texto = post.texto
	console.log(texto)
})

posts.map(function(post){
	console.log(post)
	var titulo = post.titulo
	console.log(titulo)
})

/*posts.map(function(post){
	//console.log(post.titulo)
	var texto = post.texto
	console.log(post.texto)

})*/