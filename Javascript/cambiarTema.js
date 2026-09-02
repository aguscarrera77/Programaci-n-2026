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

const inputUsuario=document.querySelector("#input-usuario")
const mensaje=document.querySelector("#mensaje-validacion")

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
})