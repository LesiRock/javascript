var captura = confirm("Quienes capturar un alumno");
var nombres = [];
while(captura == true){
    var nombre = prompt("Ingresa el nombre del alumno");
    nombres.push(nombre); //cada nombre que pido de agrega al arreglo al final
   


captura = confirm("Quienes capturar un alumno");

}
alert("HASTA LUEGO 😥");


// console.log(nombres);

// nombres.unshift("Pedro"); //agregaria el nomnbre al principio
// console.log(nombres);
// nombres.pop(); //elimina al ultimo elemento
// console.log(nombres);
// nombres.shift(); //eliminaria el primer elemento
// console.log(nombres);

var nombresMujeres = ["Ana", "Lucia", "Cecilia", "Lupita"];

var arreglosUnidos = nombresMujeres.concat(nombres); //junta arreglos

// arreglosUnidos.sort(); //ordena de mayor a menor
// console.log(arreglosUnidos);
// arreglosUnidos.reverse(); //orden alreves
// console.log(arreglosUnidos);

//recorrer el arreglo
for(var i=0;i<arreglosUnidos.length;i++){

    if(arreglosUnidos[i]=="Isel"){
        console.log("Es mi nombre");
        break;
    }
    console.log(arreglosUnidos[i]);

}