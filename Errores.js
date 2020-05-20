/*Sentencia de captura de errores try/catch y trow*/
var val1 = 100;
var val2 = 20;

try{
    if(val1 > val2){
        console.log("Hola "+val1+" es mayor que " +val2+"");
    }else{
        throw new error("Hola "+val1+" No es mayor que " +val2+"");
    }
}catch(error){
    console.log(error);
}
