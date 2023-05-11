// Contacto //

class Contacto{
    constructor(nombreUsuario, apellidoUsuario, emailUsuario, mensajeUsuario){
        this.nombre = nombreUsuario;
        this.apellido = apellidoUsuario;
        this.email = emailUsuario;
        this.mensaje = mensajeUsuario;
    }
}

let instancias = [];

let boton = document.getElementById("enviar");

let nombreApellido = /^[a-zA-ZáéíóúñÑ]*$/;

let correo = /^[a-zA-Z0-9.+@\.com]*$/;

let mensajeFormulario = /^[a-zA-Z0-9áéíóúñÑ_]*$/;


let nombre = document.getElementById("inputNombre");

let labelNombre = document.getElementById("labelNombre");

let apellido = document.getElementById("inputApellido");

let labelApellido = document.getElementById("labelApellido");

let email = document.getElementById("inputEmail");

let labelEmail = document.getElementById("labelEmail");

let mensaje = document.getElementById("inputMensaje");

let labelMensaje = document.getElementById("labelMensaje");


/* Eventos */

nombre.addEventListener("keyup",function(){
    if(nombreApellido.test(nombre.value)){
        console.log("el nombre es valido");
        labelNombre.innerText = "el nombre es valido";
        labelNombre.style.borderBottom = "1px solid greenyellow"
    }else {
        console.log("el nombre no es valido")
        labelNombre.innerText = "el nombre no es valido";
        labelNombre.style.borderBottom = "1px solid red"
    }
    if(nombre.value == ""){
        console.log("el campo esta vacio, por favor escribe algo")
        labelNombre.innerText = "el campo esta vacio, por favor escribe algo";
        labelNombre.style.borderBottom = "1px solid blue"
    }
});

apellido.addEventListener("keyup",function(){
    if(nombreApellido.test(nombre.value)){
        console.log("el apellido es valido");
        labelApellido.innerText = "el apellido es valido";
        labelApellido.style.borderBottom = "1px solid greenyellow"
    }else {
        console.log("el apellido no es valido")
        labelApellido.innerText = "el apellido no es valido";
        labelApellido.style.borderBottom = "1px solid red"
    }
    if(apellido.value == ""){
        console.log("el campo esta vacio, por favor escribe algo")
        labelApellido.innerText = "el campo esta vacio, por favor escribe algo";
        labelApellido.style.borderBottom = "1px solid blue"
    }
});

email.addEventListener("keyup",function(){
    if(correo.test(email.value)){
        console.log("el email es valido");
        labelEmail.innerText = "el email es valido";
        labelEmail.style.borderBottom = "1px solid greenyellow"
    }else {
        console.log("el email no es valido")
        labelEmail.innerText = "el email no es valido";
        labelEmail.style.borderBottom = "1px solid red"
    }
    if(email.value == ""){
        console.log("el campo esta vacio, por favor escribe algo")
        labelEmail.innerText = "el campo esta vacio, por favor escribe algo";
        labelEmail.style.borderBottom = "1px solid blue"
    }
});

mensaje.addEventListener("keyup",function(){
    if(mensajeFormulario.test(mensaje.value)){
        console.log("el mensaje es valido");
        labelMensaje.innerText = "el mensaje es valido";
        labelMensaje.style.borderBottom = "1px solid greenyellow"
    }else {
        console.log("el mensaje no es valido")
        labelMensaje.innerText = "el mensaje no es valido";
        labelMensaje.style.borderBottom = "1px solid red"
    }
    if(mensaje.value == ""){
        console.log("el campo esta vacio, por favor escribe algo")
        labelMensaje.innerText = "el campo esta vacio, por favor escribe algo";
        labelMensaje.style.borderBottom = "1px solid blue"
    }
});

function crearInstancia(evento){

    evento.preventDefault();

    instancias.push( new Contacto(nombre,apellido,email,mensaje) )

    console.log("Contacto guardado");

    mostrarMensaje();

    document.getElementById("inputNombre").value = "";
    document.getElementById("inputApellido").value = "";
    document.getElementById("inputEmail").value = "";
    document.getElementById("inputMensaje").value = "";
    
}

function mostrarMensaje(){
    console.clear();
    instancias.map(
        function(usuario){
            console.table(usuario);

        }
    );
};

boton.addEventListener("click", crearInstancia);






// Reloj //

function tiempo() {
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;

    mm = (mm < 10) ? "0" + mm : mm;

    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" +ss;

    let reloj = document.querySelector('#reloj');
    reloj.innerHTML = time
}

setInterval(tiempo, 1000)