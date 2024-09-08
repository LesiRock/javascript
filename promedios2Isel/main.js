var captura = confirm("Quienes capturar un alumno");
var nombres = [];
var calificaciones = [];

while(captura == true){
    var nombre = prompt("Ingresa el nombre del alumno");
    nombres.push(nombre);
    var calPeriodo = [];
    for(var i = 0; i < 3;i++){
        var calificacionesAlumno = [];
        var sumaCalificaciones = 0; //despues de pedir las 3 se reinicializa a cero
        for(var j = 0; j < 3;j++){
            var calificacion = parseFloat(prompt("Ingresa la calificacion " + (j + 1) + " del periodo "+ (i + 1))); //mas 1 sino sale 0
            calificacionesAlumno.push(calificacion);
            sumaCalificaciones += calificacion; //*= equivalente a SumaCalificaciones = SumaCalificaciones + SumaCAlificaciones 
        }
        calPeriodo.push(calificacionesAlumno);
        var promedioPeriodo = sumaCalificaciones / 3;
        console.log("El promedio del periodo " + (i+1) + " de " + nombre + " es " + promedioPeriodo)
        
    }
   
    calificaciones.push(calPeriodo);

    captura = confirm("Quienes capturar un alumno");

}
alert("HASTA LUEGO 😥");
console.log(calificaciones);


//TAREA
//crear un arreglo que almacene los promedios del alumno
//variable sumaPromedio
//variable promedioGeneralAlumno suma/3
//arreglo promedioTotalAlumno guarde promedios generales

//for recorra nombres[i] promedioTotalAlumno[i]
