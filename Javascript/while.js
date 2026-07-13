/*while: mientras. Va a dar la cantidad de vueltas dependiendo de la condicion.
sintaxis: while(condicion){
(bloque de codigo);contador
}*/

let indice=1;

while(indice<=4){
    console.log('Numero de vuelta'+ indice);indice++;
}

/*PRIMER PROBLEMA. VOY A CREAR UN SISTEMA PIN CAJERO AUTOMATICO.PIN DE 4 DIGITOS.EL SISTEMA DETECTA QUE ESTA MAL EL PIN Y LA DE OTRA POSIBILIDAD AL USUARIO*/

let pinCorrecto="1234"
let pinIngresado=prompt('Ingrese su PIN')
let intentos=1

while(pinCorrecto !== pinIngresado){
    alert('Intento: '+intentos+"PIN "+ pinIngresado +' Incorrecto');
    pinIngresado=prompt('Ingrese de nuevo un PIN');intentos++;
}

console.log('Bienvenido en su cuenta.');