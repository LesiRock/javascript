var fecha = new Date(2024,5,19);

var captura = confirm("Quienes capturar un alumno");
while(captura == true){
    var nombre = prompt("Escribe el nombre del alumno");
    var calificacion = 0;
    var sumaCalificaciones1 = 0;
    var sumaCalificaciones2 = 0;
    var sumaCalificaciones3 = 0;

    for(var i = 0;i < 3;i++){
        calificacion = parseFloat(prompt(`Escribe la calificacion del periodo 1: ${i+1}`));
        sumaCalificaciones1 = sumaCalificaciones1 + calificacion;
    }
        var promedioPeriodo1 = sumaCalificaciones1 / 3;
        alert(`El promedio del periodo 1 es: ${promedioPeriodo1}`);

        for(var i = 0;i < 3;i++){
            calificacion = parseFloat(prompt(`Escribe la calificacion del periodo 2: ${i+1}`));
            sumaCalificaciones2 = sumaCalificaciones2 + calificacion;
        }
        var promedioPeriodo2 = sumaCalificaciones2 / 3;
        alert(`El promedio del periodo 2 es: ${promedioPeriodo2}`);

        for(var i = 0;i < 3;i++){
            calificacion = parseFloat(prompt(`Escribe la calificacion del periodo 3: ${i+1}`));
            sumaCalificaciones3 = sumaCalificaciones3 + calificacion;
        }
        var promedioPeriodo3 = sumaCalificaciones3 / 3;
        alert(`El promedio del periodo 3 es: ${promedioPeriodo3}`);

    var promedioGeneral = (promedioPeriodo1 +promedioPeriodo2 +promedioPeriodo3)/3;
    alert(`El nombre del alumno: ${nombre} \npromedio general es: ${promedioGeneral}`);
    

    switch(true){
        case promedioGeneral < 6:
            alert("REPROBADO");
            break;
        case promedioGeneral < 8:
            alert("BIEN");
            break;
        case promedioGeneral < 10:
            alert("MUY BIEN");
            break;
        case promedioGeneral == 10:
            alert("EXCELENTE");
            break;
        default:
            alert("Promedio Invalido");
    }

var captura = confirm("Quienes capturar un alumno");

}
alert("HASTA LUEGO 😥");

