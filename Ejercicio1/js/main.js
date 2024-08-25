/*var Taller = 6.7;
var Computo = 8;
var primerPeridoPromedio = (Taller + Computo)/2;
Taller = 5.7;
Computo = 9.0;
var segundoPeridoPromedio = (Taller + Computo)/2;
Taller = 9.92;
Computo = 6.8;
var tercerPeridoPromedio = (Taller + Computo)/2;

console.log("Promedio del periodo 1: " + primerPeridoPromedio)
console.log("Promedio del periodo 2: " + segundoPeridoPromedio)
console.log("Promedio del periodo 3: " + tercerPeridoPromedio)
periodogeneral = (primerPeridoPromedio + segundoPeridoPromedio + tercerPeridoPromedio)/3;
console.log("Promedio general: " + periodogeneral);

if (periodogeneral > 6){
    console.log("APROBADO");
}else{
    console.log("REPROBADO");
} */

//EJERCICIO 2 Con prompy y parseInt
var taller = parseInt(prompt("Ingresa la calificación del primer periodo del Taller: "));
var computo = parseInt(prompt("Ingresa la calificación del primer periodo de Computo: "));
var primerPeridoPromedio = (taller + computo)/2;
taller = parseInt(prompt("Ingresa la calificación del segundo periodo del Taller: "));
computo = parseInt(prompt("Ingresa la calificación del segundo periodo de Computo: "));
var segundoPeridoPromedio = (taller + computo)/2;
taller = parseInt(prompt("Ingresa la calificación del tercer periodo del Taller: "));
computo = parseInt(prompt("Ingresa la calificación del tercer periodo de Computo: "));
var tercerPeridoPromedio = (taller + computo)/2;

console.log("Promedio del periodo 1: " + primerPeridoPromedio)
console.log("Promedio del periodo 2: " + segundoPeridoPromedio)
console.log("Promedio del periodo 3: " + tercerPeridoPromedio)
var promediogeneral = (primerPeridoPromedio + segundoPeridoPromedio + tercerPeridoPromedio)/3;
console.log("Promedio general: " + promediogeneral);

if (promediogeneral > 6){
    console.log("APROBADO");
}else{
    console.log("REPROBADO");
} 