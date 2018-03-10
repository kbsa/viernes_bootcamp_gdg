var dias = [] //Array vacio
var marcasAuto = ["Suzuki", "Mazda", "Toyota", "Nissan", "Kia"]

console.log(marcasAuto)
console.log(marcasAuto.length) //Retorna la cantidad de elementos

//var marcas = new Array("Toyota", "Nissan", "Kia")

console.log(marcasAuto[1])
console.log(marcasAuto.sort())
console.log(marcasAuto.sort().reverse())

var numeros = []
var numeros = [1, 3, 5, 7, 6, 4, 2, 0, 10]
console.log(numeros.sort())
console.log(numeros.sort().reverse())

//Agregar elemento al final
marcasAuto.push("Ferrari")
console.log(marcasAuto)

//Eliminar el ultimo elemento
marcasAuto.pop("Ferrari")
console.log(marcasAuto)

//Eliminar el primer elemento
marcasAuto.shift("Ferrari")
console.log(marcasAuto)

//Setear elemento del array conociendo el index
marcasAuto[2] = "XXX"
console.log(marcasAuto)

//Borrar el elemento conociendo el index
delete marcasAuto[2]
console.log(marcasAuto)
