//alert("Hola Mundo");
var nombre = "Isel";
var apellido = "Rebolledo";
var inscritoEnTaller = true;
var edad = 34;
var calificacionPrevia = "7.8";

console.log("Nombre: " + nombre + " Es de tipo " + typeof nombre);
console.log("Apellido: " + apellido + " Es de tipo " + typeof apellido);
console.log("Inscrito: " + inscritoEnTaller + " Es de tipo " + typeof inscritoEnTaller);
console.log("Edad: " + edad + " Es de tipo " + typeof edad);
console.log("Calificacion: " + calificacionPrevia + " Es de tipo " + typeof calificacionPrevia);

if (true){
    let peso = 43.5;
    console.log("Peso " + peso);
}

var suma;
var resta;
var multiplicacion;
var division;
var residuo;

suma = 3 + 45;
console.log("Suma " + suma);
resta = 45 - 5;
console.log("Resta " + resta);
multiplicacion = 5 * 5;
console.log("Multiplicacion " + multiplicacion);
division = 25 / 5;
console.log("Division " + division);
residuo = 76 % 7;
console.log("Residuo " + residuo);

var edad = 1;
edad++;
edad--;

//operadores relacionales o de comparacion
console.log(5!=4);

//operadores lógicos
var ine = true;
var mayor = 17;
console.log (ine == true || mayor > 18);