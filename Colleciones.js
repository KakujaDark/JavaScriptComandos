/*Coleciones */

//Array
var frut = ["Fresa","Naranja","Mango","Piña"];
//Accediendo por Indice
var fruta = frut[1];
console.log(fruta);

//Añadiendo elemento a final del array
var nuevFruta = frut.push('Platano');
console.log(frut);

//Ordenar arreglos de A-Z
frut.sort();
console.log(frut);
//Ordenar de Z-A
frut.reverse();
console.log(frut);

//Añadir eemento al inicio del Array
var nuevoFrut= frut.unshift('Pera');
console.log(frut);

//Buscar la posicion de un elemento
var nue = frut.indexOf('Naranja');
console.log("La posicion es: " , nue);

//Conviente en un arreglo
var nuevasFr = Array.of("Pez","Salmon","Tiburon");
console.log(nuevasFr);


//Convierte una palabra en arreglo separado
console.log(Array.from('Kakuja'));

//envia la cantidad de elemenetos
const pais =["Mexico","Alemania","Rusia","Polonia"];
console.log(pais.length);

//Devuelve una cadena de caracteres 
console.log(pais.toString());

//Combina varios vectores en uno solo
const cuidades=["Bogota","Medellin","Bucramanga"];
var com = pais.concat(cuidades);
console.log(com);

//Verifica si todo los elementos cumplen una funcion
const numF = [12,13,45,20,22];
const validacion = (nume) => (nume) <40;
console.log(numF.every(validacion));

//Filtra segun un numero determinado de letras
const cosas= ["Pelota","Bate","Tabla"];
const result = cosas.filter(word => word.length >4);
console.log(result);

//Matrices

var paises= ["Alemania","Francia","Polonia",[12,32,54]];
console.log(paises.toString());
//Alterar una posicion
paises[1]= "Inglaterra";
console.log(paises.toString());

//Dividir una matriz por comas
var datos = "Tennis,Zapatos,Tacones,Sandalias"
var dat = datos.split(',');
console.log(dat);

//ir en la direccion opuesta
var dep = "Voleibol,Basket,Soccer,Beisbol";
var deportes = dep.split(',');
var newD = deportes.join(',');
console.log(newD);

//SET
const mySet = new Set();
//agregando valores a set
mySet.add("Kakuja");
mySet.add(21);
mySet.add(25);

//Agregando un vector al set
const lug = {a:3,b:6};
mySet.add(lug);

//Agregarndo directamente
mySet.add({a:"Austria",b:"Alemania"});

console.log(mySet);

//Validaciones
var names= mySet.has("Kakuja");
if(names == true){
   console.log("Tu set tiene la palabra Kakuja");
}else{
   console.log("Los sentimos no encontramos lo que buscas");
}

var objeto = mySet.has(lug);
if(objeto == true){
   console.log("Tu set tiene el objeto lug ", lug);
}else{
   console.log("Los sentimos no encontramos lo que buscas");
}

//Obteniendo valores
var obResut = mySet.values();
console.log(obResut.next().value);

//Repitiendo valores
const valorF = mySet.entries();
for(let entry  of valorF){
   console.log(entry);
}

//for each
function valoresF(a,b,set){
   console.log('s['+a+'] =' + b);
}
new Set(['Bar','Local',undefined]).forEach(valoresF);

//Matriz

const estudiantes=[[5,8,4],[2,5,2],[8,8,9]];
const promedio = estudiantes.map((alumno) =>{
    let suma = alumno.reduce(
        (a,b) => a+b);
        return suma / estudiantes.length;
});
console.log("El primedio de las notas es: ", promedio.toString());