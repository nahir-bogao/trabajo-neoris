/**class Persona{
    constructor(nombreIngre, apellidoIngre){
        this.nombre = nombreIngre;
        this.apellido = apellidoIngre;
    }

    saludar(){
        console.log("hola", this.nombre);
    }
}

let personaReal = new Persona("nahir", "ssdfghk");
personaReal.saludar();

let persona = {
    nombre: "Ale",
    apellido: "campos",
    auto: {
        Marca: "toyota",
        modelo: "carolina",
    }
}
*/

let elemento = document.getElementById("titulo");
elemento.innerHTML = "hola";

console.log(elemento.innerHTML);
