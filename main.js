var nombre = prompt ("Ingresa tu nombre")
var edad = prompt ("Ingresa tu edad")
var edadPreferida = prompt ("¿Cuantos años te gustaria tener?")
var diferenciaEdades = (Number(edadPreferida) - Number(edad))

if ( diferenciaEdades > 0 ) {
  alert ("te faltan" + " " + diferenciaEdades)
}
 
if (diferenciaEdades < 0) {
  alert ("deberias rejuvenecer" + " " + diferenciaEdades)
}