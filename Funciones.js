/*Funcion de flecha o Arrow*/
var saludar = name => "Hola " + name;
console.log(saludar("Kakuja"));

var suma = num1 => (num1+15);
console.log("La suma es:" ,suma(12));

var sumar = (a,b) => a+b;
console.log("La suma de A y B es: ", sumar(12,4));

var generar = (a,b) =>{
    var datoC= 5;
    return a+b+datoC;
}
console.log("La suma de A,B y C es: ", generar(21,19));

/*Clausulas */

function inicio(){
    var name = "Kakuja";
    function complit(){
        console.log("Su nombre es: "+name+"");
    }
    return complit();
}
inicio();


function multiplicar (a,b=4){
    return (a*b);
}
(multiplicar(2));


function recursion(a){
    if (a <=1){
        return a;
    }
    return a* recursion(a-1);
}
console.log(recursion(5));

/*Funciones*/ 
function saludar(){
    var saludo = "Hola soy Kakuja";
    console.log(saludo);
}
saludar();
/*Ingresar parametros*/
function saludarD(name,age){
    console.log( "Hola soy " + name+ " y tengo " + age + " años");
}
saludarD("Kakuja", 21);


function saludarM(name,age){
    console.log("Hola soy KakujaDark");
    console.log("Edad: " + age);
    var result = (name + " Tiene " + age+ " años");
    return result;
}
var msj = saludarM("KakujaD", 21);
console.log(msj);




