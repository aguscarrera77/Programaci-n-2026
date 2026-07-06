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


//alert("Pagina para mayores de 18 anos.")

//confirm() hace una pregunta y tiene 2 botones si o no. Tiene la logica del booleano es true y false.

//let age=confirm('Eres mayor a 18?')

//console.log(age)

//CONCATENAR: UNIR VARIABLES MAS STRING. STRING MAS STRING. ES USANDO EL +.
//let registro="Dante";
//let saludo='hola '+ " "+registro + ' Como estas';

//console.log(saludo)

//let saludoCompleto=prompt("Hola como estas ") + alert(' mensaje incorrecto.')

//OPERACIONES MATEMATICAS. SUMAR RESTAR DIVIDIR MULTIPLICAR.

let a=10;
let b=4;

console.log(a+b)

//CALCULADORA DE IVA.Cliente compra un producto 4500 sin iva. Entonces la chica de la caja le dice a hugo como le agrego el iva.


let precioProducto=4500;
const iva= precioProducto*0.21;
let precioFinal= precioProducto + iva;

console.log(precioFinal,' es el precio final')

//Jesus entra al gym y contador de personas diario aumenta. Hasta llegada de jesus habia 15 personas. Luego de jesus entraron alicia dante y lauti.

let contadorPersonas=15;
contadorPersonas= contadorPersonas + 4;

console.log('La cantidad de personas dentro de gym hasta lauti es ', contadorPersonas)

//CONVERSOR DE TEMPERATURA. EL VALOR INICIAL EN CELSIUS Y LA APP SOLO ACEPTA FARENHEIT.El valor recibido a las 12 hs es de 25.

let celsius=25;
let  farenheit= (celsius * 1.8 )+ 32;

console.log('La temperatura en Farenheits es de : ', farenheit)

//Promedio de notas de Juan. Juan rindio 3 tp y necesito para la nota final el promedio.  TP1 80pts TP2 90pts TP3 40pts.

let notas1= 80;
let notas2=90;
let  notas3=40;

let promedio= (notas1+notas2+notas3) / 3

console.log('La nota promedio es: ',promedio)

//descuento de un producto. Una remera cuesta 32000. Pero llegaron los descuentos de la tarjeta visa tiene un 15% de rebaja.

let precioOriginal= 32000
const descuento= precioOriginal * 0.15
let preciofinalDescuento= precioOriginal - descuento 
console.log(preciofinalDescuento)

//AREA DE UN TRIANGULO. (BASE * ALTURA)/2. BASE 10CM Y LA ALTURA 20CM

let base=10
let altura=20
let area= (base * altura) / 2

console.log(area)


//Calculadora de asado de amigos.

let totalgastos=Number(prompt('Cuanto gastaste en total bebidas asado pan carbon ensalada'))

let cantidadAmigos=Number(prompt('Cuantos somos'))

let cuantoPongo= totalgastos/cantidadAmigos

alert('Vamos a pagar: '+ cuantoPongo)

