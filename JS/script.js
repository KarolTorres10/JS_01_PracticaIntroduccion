/*Creación de Variables
const name = "Karol Torres";

let age = Number(prompt("Escribe tu edad:"));

let proyectofavorito = "Arcane";

function Proyecto() {console.log(proyectofavorito);}
function saludar(name) {console.log("Hola "+name);}
*/



/*Ejercicio Condicional
const limitage = 18;

if (age < limitage){
    console.log("Es menor de edad");
}
else if (age === limitage){
    console.log("Tiene 18 anos, es mayor");
}
else {
    console.log("Es mayor de edad");
}

if (age >= limitage && proyectofavorito){
    console.log("El usuario es mayor de edad y su proyecto favorito es: "+ proyectofavorito);
}
else {
    console.log("El usuario no cumple los requisitos");
}
*/



/*Numeros Pares
const lista = Number(prompt("¿Hasta que numero te gustaria saber los numeros pares?"));

const numerosPares = []; 

for (let i = 1; i <= lista; i++) { 

     if (i % 2 === 0) {
         numerosPares.push(i); 
     }
}

console.log(numerosPares);
*/



/*Numeros Primos
const limit = Number(prompt("Escribe el numero limite de tu lista para saber los numeros primos:"));

const numerosPrimos = []; 

for (let i = 2; i <= limit; i++) {

let esPrimo = true;

    for(let j = 2; j <= Math.sqrt(i); j++){

        if (i % j === 0){
            esPrimo = false;
            break;
        }
    }
    if (esPrimo){
        numerosPrimos.push(i);
    }
}

console.log(numerosPrimos);
*/



/*Estructura de un objeto
let pokemon1= {
    name: "Squirtle",
    type: "Agua",
    number: 4,
    description: "Tortuga de agua que lanza chorros de agua."
};
*/


/*Arreglo*/
let LAIKA_movies = [
{
    name: "Coraline",
    genero: "Fantasia",
    ano: 2009,
    description: "Una niña que descubre una puerta secreta hacia una versión idealizada pero siniestra de su hogar."
},
{
    name: "ParaNorman",
    genero: "Terror",
    ano: 2012,
    description: "Un niño capaz de hablar con los muertos que debe salvar a su pueblo de una maldición de zombis."
},
{
    name: "Los Boxtrolls",
    genero: "Aventura",
    ano: 2014,
    description: "Un niño huerfano criado por una comunidad de simpaticos recolectores de basura subterraneos."
},
{
    name: "KUBO",
    genero: "Aventura",
    ano: 2016,
    description: "Una aventura epica en el Japon feudal donde un niño con un poder musical debe proteger a su familia."
},
{
    name: "Mr. Link",
    genero: "Comedia",
    ano: 2019,
    description: "Una comedia de viajes sobre un investigador que busca demostrar la existencia de Pie Grande."
},
];
