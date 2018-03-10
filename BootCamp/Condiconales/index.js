
var x = 3
var y = 6
if (x>y) {
	console.log("X es mayor a Y")
} else if (x == y) {
	console.log("Son iguales")
} else {
	console.log("Y es mayor a X")
}

var dia = new Date().getDay()

switch(dia){
	case 6:
		console.log("Hoy es sabado")
		break
	default:
		console.log("Nro del dia de la semana: ", new Date.getDay())
}