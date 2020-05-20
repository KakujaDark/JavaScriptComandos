/*ciclos for, while, do..while, labels para ciclos, break, continue, for..in, for..Of */
var k =0;
//Ciclo For
for(let i =0;i<9;i++){
    k += 1;
    console.log("Los numeros son: " +k+ "");
}
//Ciclo While
var x=0;
var n =0;
while(n <3){
    n++;
    x += n;
    console.log(n);
}

//Ciclo Do - While
let result = "";
let i =0;

do{
    i = i +1;
    result = result + i;
}while(i < 5);
console.log(result);

//Labels para ciclos - Break
var numF = 0;
while(numF < 6){ //Break rompe el ciclo si se cumple la condicion en la que se encuentra
    if(i = 3){
        break;
    }
    i++;
}
return (i);
console.log("Finalizo la ejecucion en: " , i, " Debido al break");

//Labels para ciclos - Continue
var i = 0;
var k = 0;
while(i < 5){
    i++;
    if(i == 3){
        continue;
    }
    k += i;
    console.log("el valor de k son " , k);
} 

//for of  con let
let iter = [19,24,22];
for(let value of iter){
    value +=1;// genera que el valor dentro del objeto aumente en 1 por cada posicion
    console.log(value);
}

//for of con const
for(const val of iter){
     //Mantiene el valor del objeto estatico 
    console.log(val);
}

//for of con String
let nameK = "Kakuja";
for(let value of nameK){
    console.log(value);//Nuestra letra por letra de a parala Kakuja
}

//for in
var obje ={a:1,b:12,c:21}; 
for(const value in obje){
    console.log("obje.${value} = ${obje[value]}");//Muestra todos los valores que corresponden al objeto
}
