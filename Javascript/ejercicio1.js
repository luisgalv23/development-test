//********************Ejercicio de prueba 1****************************
//Escribe una función que retorne la cadena "¡Hola, mundo!"; ésta deberá requerir 2 parámetros tipo cadena, “Hola” y “Mundo”.

var firstString = 'Hola';
var secondString = 'Mundo';

var saluda = (saludo1, saludo2) => {
   console.log(saludo1 + " " + saludo2);
}

saluda(firstString, secondString);