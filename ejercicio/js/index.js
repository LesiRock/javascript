/*variables simples o primitivos: almacenan un valor*/
let numero;// su valor es indefinido y es un tipo de dato
let entero = 5; //numerico entero
let decimal = 5.222; //numerico flotante
let nombre = "Isel"; //tipo texto
let noNumero = NaN; //tipo de dato No es un numero
let indefinida = Infinity; //tipo de dato infinito: cuando detecta un numero infinito, no se puede sumar
let boolean = true; //tipo que vale true o false

console.log(typeof boolean); //typeof instruccion para saber que tipo de dato es una variable

/*Variables compuestos o no primitivos: almacenan mas de un valor*/
let numeros = [5,8,9,10]; //un arreglo, se acceden por un indice eg:  numeros = [2];
let numers2 = {
    1:5,
    2:6,
    3:7
}; //un objeto tiene par valor, usan corchetes. Son para emparejar varios datos 

/*Operadores: Lo que se puede hacer con esos datos*/
let nombre1 = "Ana";
let calificacion = 7;
console.log(nombre1 + calificacion); //concatenear con la +

/*Condiciones Simples*/
if(calificacion >= 6){
    console.log("Aprobado");
}

/*Condiciones Compuesta: LLeva Else para todo lo que no es if*/
if(calificacion >= 6){
    console.log("Aprobado");
}else{
    console.log("Reprobado");
}

/*Ciclos son para repetir
For: Cuando sabes cuantas veces se va a repetir
While: Cuando no sabemos cuantas veces
Do while: no sabemos cuantas veces se ejecuta pero al menos sera una vez
(como comienza, como va aumentando y cuando se deteien)*/

for(let i=1; i <= 100; i++){ //operador unario el ++, i=1 sig. comienzo en el 1
    if(i % 2 == 0){
        console.log(i + " Es un par");
    }else{
        console.log(i + " No es un par");
    }
}

/* Lo que significa los iguales
5 = 5; una variable 5 vale 5
5 == "5"; dos iguales validan valores. Da true
5 === "5"; tres iguales validan valores y tipo de dato. Da false por el tipo de dato
*/

for(let i=1; i <= 100; i++){ //operador unario el ++, i=1 sig. comienzo en el 1
    if(i % 3 == 0 && i % 5 == 0){
        console.log(i + " FizzBuzz");
    }else if(i % 3 == 0){
        console.log(i + " Fizz");
    }else if(i % 5 == 0){
        console.log(i + " Buzz");
    }else{
        console.log("El numero no es divisible entre 3 ni entre 5");
    }
}

/*Excepciones: No depende del codigo sino del ambiente
Try: Lo que valua
Catch: Lo que evalua produce un error 
Excepcion: Division entre 0*/
let numer = 5;
typeof numer == numer(numer);

/*Funciones: un bloque de codigo que se puede volver a usar, se usan con la palabra reservada function 
Las valores teinen un valor de retorno para cacharlo y podrlo volver a usar
function esNumer (valor){
    return numer;
}
let valor = esNumer(5);
console.log(valor); //para ver el resultado*/

/*Excepciones*/
function esNumero (valor){
    try{
        let numero4 = Number(valor);
        if(isNaN(numero4)){
            throw new Error("No es un numero"); //Error con mayuscula porque es una clase
        }
        return numero4;
    }catch(error){
        console.log(error.message);
    }
}

