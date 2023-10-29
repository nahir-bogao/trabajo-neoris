/**  let variableAnalizada = "Nahir";
switch(variableAnalizada) {
    case "Martin":
        console.log("la variable dice Martin");
        break
    case "hola":
        console.log("la variable dice hola");
        break
    default:
        console.log("la varible no coincide con nada");
        break
}


for (let i = 0; i < 5; i++) {
    console.log(i); 
} 
let i = 0;
let length = nombres.length;
let nameEncontrado = false;
while (condicion) {
   console.log("posicion num: ", index);
   
   if (nombres[indix] == "Carmen") {
      nameEncontrado = true;
      console.log("Nombre encontrado en la posicion ", index);
      console.log(nombres[index]);
   } else {
        index ++
   }
} */


//Lo repite una vez (entra la menos una vez) y despues tiene la condicion para ver si lo
// sigue repitiendo
do {
    
} while (condition);

function saludar(nombre, apellido) {
    console.log(`Hola! su nombre es ${nombre} y su apellido es: ${apellido}`);
}

function obtenerTexto(nombre, apellido) {
    let texto = console.log(`Hola! su nombre es ${nombre} y su apellido es: ${apellido}`) 
    return texto
}

let nombreIngresado = prompt("Ingrese su nombre")
let apellidoIngresado = prompt("Ingrese su apellido")

//saludar(nombreIngresado, apellidoIngresado)
