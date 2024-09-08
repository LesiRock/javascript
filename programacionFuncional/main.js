//programacion funcional(modulos
// funcion que pide los nombres y regresa el nombre
function pedirNombre(){
    var nombre = prompt("Ingresa el nombre del alumno");
    return nombre;
}

//Invoco funcion
var nombre1 = pedirNombre(); // se mete en una variable para poder usarlo despues
console.log(nombre1);

//funcion que pide calificaciones y las guarda en un arreglo
function pedirCalificaciones(){
    var calificaciones = [];
    for(var i =0;i < 3; i++){
        var calificaciones =parseFloat(prompt("Ingresa la calificacion "+ (i+1)))
        calificaciones.push(calificaciones);
    }
    return calificaciones;
}

//funcion que calcula el promedio y regresa el promedio
function calcularPromedio(calificaciones){
    var suma = 0;
    for(var i = 0; i < calificaciones.length;i++){
        suma += calificaciones[i];
    }
    var promedio = suma / calificaciones.length;
    return promedio;
}

var lista = [4,5,6];
var prom = calcularPromedio(lista);
console.log(prom);

//Funcion principal que capta los retornos y modula todas las funciones
function capturarDatos(){
    var nombres = [];
    var calificaciones = [];
    var confirmar = confirm("Deseas capturar un alumno?");

    while(capturar){
        var nombre = pedirNombre();
        var calificaciones = pedirCalificaciones();
        var promedios = calcularPromedio(calificaciones);

        nombres.push(nombre);
        promedios.push(promedio);
    }
    alert("Adios ");

    //ver datos
    for(var i =0;i < nombres.length;i++){
        console.log("Nombre: " + nombre)
    }
}
