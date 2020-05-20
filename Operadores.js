/*Operadores */

/*TypeOf*/
function multiplicar(a,b){
    b = typeof b !== 'undefined' ? b : 1; 
    console.log ("La multiplicacion de los numeros es: ",a*b);
}
(multiplicar(3));


function nameT(nameA, nameB){
    nameB = typeof nameB ==  'null' ? nameB : "Kakuja";
    console.log("Sus nombres son:" , nameA, "", nameB);
}
nameT("Johanna",'')

/*Aritmeticos + -  / * % ++ -- */
function suma (a, b){
    console.log ("La suma de los dos numeros es: ",a+b);
}
(suma(3,12));

function modulo(ab){
    if(ab % 2 == 0){
        console.log("El numero es divisible por dos");
    }else{
        console.log("El numero no es divisible por dos");
    }
}
(modulo(21));


/*Asignacion */
var age = 21;

var ageS = age +=12;// suma de 21 +12
console.log("La suma es: " , ageS);

var ageR = age -= 10;//resta de 21 - 10
console.log("La Resta es: " , ageR);

var ageM = age *=2;//multiplicacion de 21 * 2
console.log("La Multiplicacion es: " , ageM);

var ageE = age **= 2;//Exponenciacion de 21 a a 2
console.log("La Exponencial es: " , ageE);

//Asignacion Deestructurante
let a,b,rest;
[a,b] = [19,22];
console.log(a);
console.log(b);

[a,b,...rest] = [19,22,34,10,65];
console.log(rest);


/*Termnario ?*/
var ageFinal = 21;
(ageFinal >18 ?(
    console.log("Puedes ingresar")) :
    (console.log("Lo sentimos no cumples con la edad requerida/n tu edad es: ",ageFinal)));
 

/*Logicos && || not*/
function condicion(numa,numb,numc){
    if(numa == numc && numc != numb){
        var suma = numa+numb+numc;
        return suma;
        //console.log("El valor de la suma es: " , suma);
    }else if( numa != 0 || numb == numc){
        var mul = (numa*numb) + numc;
        return mul;
        //console.log("El valor de la multiplicacion es: " , mult);
    }else{
        var rest = (numa-numb-numc);
        return rest;
        //console.log("El valor de la resta es: " , rest);
    }
}
console.log("El valor final es: ",condicion(12,10,12));


/*InstanceOf devuelve valores de true o false*/ 

var ageV = 2;
ageV instanceof Number;

var dia = new Date(1998,10,15);
if(dia instanceof Date){
    console.log("tu Nacimiento fue: " + dia);
}else{
    console.log("Lo sentimos la fecha ingresada no es de tipo Date");
}


/*Funciones con spread operaciones de propagacion*/
function cocinar(ingred1, ingred2, ingred3){
    console.log("Ingrediente 1: ", ingred1);
    console.log("Ingrediente 2: ", ingred2);
    console.log("Ingrediente 3: ", ingred3);
    console.log("Mas Ingredientes: ", ingred);
}
var ingred = ["Cafe","Chocolate"];
cocinar("Wisky","Capuccino","Vodka",ingred);

//This
const numero ={
    num:42,
    func : function(){
        return this.num;
    },
};
console.log(numero.func);