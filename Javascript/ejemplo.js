//console.log() es una funciona nativa.sirve para que escriba en la consola del navegador estructuras de javascript.
console.log("Hola si ves esto en la consola el archivo de javascript funciona bien")

//variables unidad funcional de javascript. Guardan informacion con nombre. 2 tipos let puede cambiar el valor en cualquier momento de mi programa y const tiene un valor fijo y no cambia en ninguna parte del programa.

//let nombre='agustin';
//const pi=3.14;

//console.log(nombre)
//console.log(pi)

//prompt(): abre una ventana de texto para que el usuario escriba algo.

//prompt("Que dia es hoy")

//let name=prompt('Cual es tu nombre');

//console.log(name)


//alert(): es otra funcion nativa lanza un cartel con texto y solo tiene el boton de aceptar.


alert("Pagina para mayores de 18 anos.")

//confirm() hace una pregunta y tiene 2 botones si o no. Tiene la logica del booleano es true y false.

let age=confirm('Eres mayor a 18?')

console.log(age)

//CONCATENAR: UNIR VARIABLES MAS STRING. STRING MAS STRING. ES USANDO EL +.
let registro="Dante";
let saludo='hola '+ " "+registro + ' Como estas';

console.log(saludo)

let saludoCompleto=prompt("Hola como estas ") + alert(' mensaje incorrecto.')