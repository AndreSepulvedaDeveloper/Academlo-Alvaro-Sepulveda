// Primera Clase - Introduccion a javascript , clase 1 = operaciones en la cosola de un navegador// 

3 * 3
6 + 3

 // Segunda Clase - Variables String y Number //

var precioProducto1 = 10;
var precioProducto2 = 20;
var precioTotal = precioProducto1 + precioProducto2;

document.write( precioTotal );
var nombresc = "alvaro";
var apellidosc = "sepulveda";
var nombreCompletosc = nombresc + "" + apellidosc;


 // ejercicio 1 - creando variables //

var nombre = "Alvaro Andres";
var apellido = "Sepulveda Velez";
var edad = 26 + "Años";
var ciudad = "Cucuta - Colombia";

 // clase cuatro - arreglos // 

var edades = [60, 45, 30, 25];

var nombres = ["andres","pablo","carlos"];

var arreglo  = ["andres", 60];

 // clase cinco - accediendo a los valores de mis arreglos//



var texto = "tenemos estos nombres en arreglos" + nombres[1] + nombres[2];

// clase seis - realizando operaciones con mis arreglos //

var edades2 = [8,,10,11,12,13];
var suma = edades[0] + edades[2];
var resta = edades[1] - edades[4]


// ejercicio 2 - sumando los valores de un arreglo //

var edades2 = [13,,14,15,16,17];
var suma = edades[0] + edades[2];
var resta = edades[1] - edades[4];

// clase ocho - objetos //

var coche = {
    color: "blanco",marca:"ford",modelo: "mustang",
};
var texto2 = "el coche es de color" + coche.color

// ejercicio 3 - creando un objeto //

var user = {
    nombre: "alvaro", apellido:"sepulveda",edad:26+"años"
};
var nombreCompleto = user.nombre + user.apellido

// clase diez - objetos dentro de arreglos//

var userss = [
{nombress:"andres",correoss:"andres@gmail.com"}, {nombress:"carlos", correoss:"carlos@gmail.com"}, {nombress:"marlon", correoss:"marlon@gmail.com"},
]

//ejercicio 4 - obteniendo correos de usuarios //

var users = [
{ nombre:"andres", correo:"andres@gmail.com",edad:25+"años" }, { nombre:"carlos", correo:"carlos@gmail.com",edad:26+"años" }, { nombre:"felipe", correo:"felipe@gmail.com",edad:27+"años" }, { nombre:"marlon", correo:"marlon@gmail.com",edad:25+"años" }, { nombre:"jhoan", correo:"jhoan@gmail.com",edad:24+"años" }
]

var correos = [
 users[0].correo,users[1].correo,users[2].correo,users[3].correo,users[4].correo
];