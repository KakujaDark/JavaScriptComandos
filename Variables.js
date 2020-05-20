"use strict"
//Use strict se utiliza para que JavaScript detecte el uso inadecuado de variables,parametros o funciones

var num = 21;
const name = "Kakuja";
let lastName = "Johanna";

/* Tipos de Datos*/
var code;
var active = true;
var cuidad = null;
var lastAge = "22";
var ambiente = Symbol('Dev');
var age= 21;
var nombres = ['Johanna', 'Maria', 'Shalom'];

/*Conversion de Datos*/
var stringAge = String(age);
var numLastName = Number(lastAge);

//Literales

var colors = ["Yellow",'Red',"Purple"];//Array

var age_Decimal = 36;//Entero
var age_Octa = 036;//Octadecimal
var age_Hexa = 0x1E; //Hexadecimal

var num_Flo = 3.1415;//Valor flotante
var num_Exp = 3.1E12;//Valor con exponente 12 se expresa con E (exponente) y luego su valor numerico

var carFinal = {//Objeto
    rueda = 4,
    color = "Purple",
    combustible = "Disel"
};
console.log(carFinal.color);
console.log(carFinal.combustible);//Obtiene el valor del objeto que contenga el dato combustible
console.log(carFinal[2]);//Busca por posicion dentro del objeto

console.log("Hola soy  \"Kakuja\", Adoro la \n Programacion ");//String






