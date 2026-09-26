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

const lista = Number(prompt("Escribe el numero limite de tu lista:"));

const numerosPares = []; 

for (let i = 1; i <= lista; i++) { 

     if (i % 2 === 0) {
         numerosPares.push(i); 
     }
}

console.log(numerosPares);




/*Intento de Numeros Primos / WIP

const limit = Number(prompt("Escribe el numero limite de tu lista:"));

const limit = numero => {
    
    if (numero <= 1) return false;

    for (let i = 2; i < numero; i++){
        if (numero % i === 0){
            return;
        }
    }
    return true;
}

console.log(limit(12));
*/