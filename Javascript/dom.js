//querySelector: 1-etiqueta: llamar directamente por el nombre de la etiqueta. ("h1")
//2-por id("#nombre del id")
//3-por class(".nombre del class")
//4-All("llama a todas las etiquetas.Ej:li")

let titulo_principal=document.querySelector("#titulo-principal");

const parrafo=document.querySelector(".texto-destacado");
const listaElementos=document.querySelectorAll('li');

const contenedor=document.querySelector("div");

//.textContent:modifica texto interno de una etiqueta.

titulo_principal.textContent= "Bienvenido a mi Pagina Principal";

//innerHTML: crea,lee o agrega etiquetas.

contenedor.innerHTML="<h2>Subtitulo nuevo</h2><p>Este es un texto plano agregado.</p>";

//style=modifica estilos de css.

parrafo.style.color='yellow';
parrafo.style.backgroundColor='blue';
parrafo.style.fontSize="30px";

//Crear y borrar elementos directamente desde js.
//createElement:crear un elemento en la memoria.

const nuevoItem=document.createElement('li');

nuevoItem.textContent="Producto agregado dinamicamente."
nuevoItem.className="nuevoItem";//className:agrega class etiqueta.

const lista=document.querySelector('#lista-productos');

//appendChild: insertar elementos en una estructura.

lista.appendChild(nuevoItem);
const nuevoItem2=document.createElement('li');
nuevoItem2.textContent="Nuevo Item agregado."
lista.appendChild(nuevoItem2);

//remove: borrar elementos.

const eliminarItem=document.querySelector('.nuevoItem')

eliminarItem.remove();

//.addEventListener=escucha eventos que hace el usuario.
//Sintaxis: .addEventListener(tipo de evento,{... bloque de codigo....})

//1-evento: click

const botonEnviar=document.querySelector("#boton-enviar");

const mensaje=document.querySelector('#mensaje-nuevo')

botonEnviar.addEventListener("click",function(){
    mensaje.textContent="Usted hizo click en el boton";
    mensaje.style.color="green";
    mensaje.style.fontWeight='bold';
})
//metodo includes busca una coincidencia.
const prendas=['boxer','buzo','medias','remeras'];

const prenda=prendas.includes("remera");
const resultado_busqueda=document.querySelector('#resultado-busqueda');

if(prenda){
    resultado_busqueda.textContent="El producto remeras esta en stock.";
    resultado_busqueda.style.color='green';
}else{resultado_busqueda.textContent='No hay stock de remeras';resultado_busqueda.style.color="red"}





