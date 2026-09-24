const name = "Karol Torres";

let age = Number(prompt("Escribe tu edad:"));

let proyectofavorito = "Arcane";

function Proyecto() {console.log(proyectofavorito);}
function saludar(name) {console.log("Hola "+name);}

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