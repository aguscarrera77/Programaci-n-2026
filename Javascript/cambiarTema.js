//Primer paso trabajamos con .add y .remove

const boton=document.querySelector("#btn-cambiar");
const titulo=document.querySelector("#titulo-contenedor");



/*boton.addEventListener("click",function(){
    //Pregunto el body ya tiene clase modo oscuro?
    if(document.body.classList.contains("modo-oscuro")){document.body.classList.remove("modo-oscuro");
        titulo.textContent="Pagina en modo claro";
    }
    else{document.body.classList.add("modo-oscuro");
        titulo.textContent="Pagina en modo oscuro.";
    }
});*/


// metodo toogle: funciona con booleano true o false

boton.addEventListener("click",function(){
    //generar una variable que contenga el modo-oscuro.
    const quedoOscuro=document.body.classList.toggle("modo-oscuro");

    if(quedoOscuro){
        titulo.textContent="Pagina en modo oscuro.";
    }else{titulo.textContent="Pagina en modo claro.";}
})

//Evento input...tomar los cambios de texto que se producen en los inputs.

const inputUsuario=document.querySelector("#input-usuario");
const mensaje=document.querySelector("#mensaje-validacion");
const formulario=document.querySelector("#box-formulario");
const password=document.querySelector("#password");
const textoRespuesta=document.querySelector("#texto-respuesta");
const btnEnviar=document.querySelector("#btn-enviar");

inputUsuario.addEventListener("input",function(){
    const textoActual=inputUsuario.value;
    if(textoActual.length === 0){
        mensaje.textContent="Agregue su usuario";
    }else if(textoActual.length < 5 ){
        mensaje.textContent="El usuario tiene que tener al menos 5 caracteres";
        mensaje.style.color='red';}
    else{mensaje.textContent="Nombre usuario Correcto";
        mensaje.style.color="green"
    }
});

//Submit: retrasar el evento submit porque sino se refresca la pagina y los datos del formulario se pierden.


 formulario.addEventListener("submit",function(event){
 //voy a anular la carga de datos. form al enviar los datos deja los inputs vacios. El metodo para cortar el envio se la Prevent default.
 event.preventDefault();
 //capturo los valores.leer los valores que el usuario escribio en los inputs con el metodo value.
const nombre=inputUsuario.value;
const passValue= password.value;

//Validaciones: condiciones que voy a poner para que mi formulario no tengo errores en la carga de los datos. 

//1 paso de validacion: es que los inputs no esten vacios.

if(nombre !=="" && passValue !==""){
    textoRespuesta.textContent='Bienvenido '+ nombre;
    textoRespuesta.style.color="green";
// OPCIONAL!!mostrar los valores o datos capturados.

console.log("Usuario: ",nombre);
console.log("Contrasena: ",passValue);

//reseteo de formulario.

formulario.reset();
    
}else{
    textoRespuesta.textContent="Por favor llene los casilleros. No puedo tener campos vacios.";
    textoRespuesta.style.color="red";
}

 });
