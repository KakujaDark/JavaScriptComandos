//Funcion Constructora
function vehiculo(marca1,year1,modelo1){
    this.marca1=marca1;
    this.year1=year1;
    this.modelo1=modelo1;   
}
var miVehiculo= new vehiculo("Ford",1998,"Mustang");
var miVehiculo1= new vehiculo("Nissan",1996,"300X");
console.log(miVehiculo);

function persona (nombre,edad,sexo){
    this.nombre=nombre;
    this.edad=edad;
    this.sexo=sexo;
}
var miPersona= new persona("Kakuja",21,"Femenino");
var miPersona= new persona("Johanna",18,"Femenino");
console.log(miPersona);

function AutoFinal(marca1,year1,modelo1,propietario){
    this.marca1=marca1;
    this.year1=year1;
    this.modelo1=modelo1;
    this.propietario=propietario
}
var Auto= new AutoFinal("Ford",1998,"Mustang","Johanna");
var Auto= new AutoFinal("Nissan",1996,"300X","KakujaD");
console.log(Auto);

//CREATE
var animal ={
    tipo : 'Invertebrado',
    mostrarTipo : function(){
        console.log(this.tipo);
    }
};

//Crear un nuevo objeto de la variable animal
var animalF = Object.create(animal);
animalF.mostrarTipo();

//Crear otro Objeto y cambiar el tipo 
var fish = Object.create(animal);
fish.tipo = "Acuatico"
fish.mostrarTipo();


//Getter and Setter
var ejemplo={
    a:12,
    get b(){
        return this.a + 1;
    },
    set c(x){
        this.a = x/2;
    }
};
var div = ejemplo.c=20;
console.log("La suma del numero +1 es: ",ejemplo.b);
console.log("La division del numero  es: ",div);

//Objetos
var auto = new Object();
auto.marca = "Toyota";
auto.year = 1998;
auto.modelo = "Mustang";
auto["color"] = "Morado";//Otra manera de asociar elementos al objeto
console.log(auto);


/*This*/ 
function car(carro, nombre, tipo){
    this.carro = carro;
    this.nombre = nombre;
    this.tipo = tipo
}
var final = new car("Honda", "Kakuja","Programmer");
var ca=final instanceof car;
var ce=car instanceof Object;
if(ca && ce == true){
    console.log(final);
}else{
    console.log("Lo sentimos los datos son incorrectos");
}


/*Super */
class Animal{
    constructor(raza,sexo,nombre){
    this.raza = raza;
    this.sexo = sexo;
    this.nombre = nombre;
    }

    getName(){
        return this.nombre;
    }
    getRaza(){
        return this.raza;
    }
    setSexo(value){
        return this.sexo;
    }

}
const animalC= new Animal("Tacita de te","Macho","Riuk");
const animalD= new Animal("Samoyano","Macho","Kira");

 /*Clase heredada*/
class Perro extends Animal{
    constructor(raza,sexo,nombre,edad){
        super(raza,sexo,nombre);
        this.edad = edad;
    }
    getEdad(){
        return this.edad;
    }
} 
const perroF = new Perro("Golden","Hembra","Valak",2);

//Imprimiendo resultados
console.log("listado de los animales", animalC);
console.log("listado de los animales", animalD);
console.log("listado de los animales", perroF);

//Comparando objetos
var fruta = {name : "Fresa"};
var fru = {name : "Fresa"};
var valueF = (fruta == fru);//Retorna false
console.log(valueF);

var frt = fruta;
var valueT = (fruta == frt);//Retorna True por que a frt se le dio el valor contenido en fruta
console.log(valueT);
