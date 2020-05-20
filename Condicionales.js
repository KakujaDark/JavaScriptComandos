/*Sentencias condicionales if - else- switch*/
var num1 = 3;
var num2 = 5;

/*Condicion If */
if(num1 > num2){
    console.log("El numero " + num1 + " Es mayor que el numero " + num2);
}

/*Condicion if - else*/
if(num1 > num2){
    console.log("El numero " + num1 + " Es mayor que el numero " + num2);
}else{
    console.log("El numero " + num2 + " Es mayor que el numero " + num1)
}

/*Condicional Switch */
var num3 = 4;
console.log("Ingrese un numero de 1 a 5");
switch(num3){
    case 1:
        console.log("El numero Ingresado es 1");
        break;
    case 2:
        console.log("El numero Ingresado es 2");
        break;
    case 3:
        console.log("El numero Ingresado es 3");
        break;
    case 4:
        console.log("El numero Ingresado es 4");
        break;
    case 5:
        console.log("El numero Ingresado es 5");
        break;
    default:
        console.log("Lo sentimos el numero ingresado no existe");
        break;
}