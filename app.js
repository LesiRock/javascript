/*const http = require('http'); // por convencion se pone http para craer servidores
const server = http.createServer((req, res) => { //respuesta de sttus 200
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('¡Hola, bienvenido al servidor Node.js!\n');
  });

  server.listen(3000, () => { //callback del puerto 3000
    console.log('Servidor corriendo en http://localhost:3000');
  });*/

/*const http = require('http');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Página principal\n');
  } else if (req.url === '/about') {
    res.end('Acerca de nosotros\n');
  } else {
    res.statusCode = 404;
    res.end('Página no encontrada\n');
  }
});

server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});*/

/*const digoHola = require('./saludo'); //ejercicio 2, se une con soludos.js

const nombre = 'David';
console.log(digoHola(nombre));*/

/*const orden = require('lodash'); //ejercicio 3

const numbers = [10, 5, 3, 20];
const sortedNumbers = orden.sortBy(numbers);

console.log('Números ordenados:', sortedNumbers);*/

//Ejercicio 5 con html
/*const http = require('http');
const fs = require('fs'); //importa fs, permite trabajar con archivos de rutas
const path = require('path'); //permite trabajar con rutas

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    // Leer el archivo HTML
    const filePath = path.join(__dirname, 'index.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500, { 'Content-Type': 'text/plain' });
        res.end('Error al cargar la página HTML');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    // Si no es la ruta principal, mostramos un mensaje 404
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Página no encontrada');
  }
});

// Iniciar el servidor en el puerto 3000
server.listen(3000, () => {
  console.log('Servidor corriendo en http://localhost:3000');
});*/

//Ejercicio usando express para formularios
const express = require('express'); //necesito de un framework para usar formularios
const bodyParser = require('body-parser'); //neceito de este recurso dentrpo del framework express para formularios
const path = require('path');

const app = express();

// Middleware para manejar datos del formulario
app.use(bodyParser.urlencoded({ extended: false }));

// Ruta para servir el archivo HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para manejar el envío del formulario
app.post('/submit', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
   
    // Aquí puedes procesar los datos, guardarlos en una base de datos, etc.
    res.send(`Nombre: ${name}, Correo: ${email}`);
  });
  
  // Iniciar el servidor en el puerto 3000
  app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000');
  });
  

