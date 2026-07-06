//condicionales: genero una condicion que tiene dos salidas posibles true o false. True el bloque de codigo se transcribe y false el programa sigue su camino sin entrar al condicional.
//Sintaxis if(condicion){    BLOQUE DE CODIGO.    }

let edad=35;

if (edad>=18){
    console.log('Usted ingreso a la pagina')
}

//Operadores Logicos.
// igual: == 
//  extremadamente igual: === no solamente el valor sino tambien el tipo de dato. 5== "5" TRUE, 5==="5" FALSE.
// > y <: mayor o menor.
// != y !==: distinto o diferente a...
// &&: AND que significa y.....
//||: OR que signifa o.
// ! NOT .... cuidado!! invierte el resultado logico.

// logueo clasico.

let pass_correcto='admin1234'
let pass_ingresada='admin134'

if(pass_correcto===pass_ingresada) {
    console.log("BIENVENIDO A LA PAGINA")
}
else{console.log("Password incorrecto.")}

// Validacion de una compra.

let totalCompra=2500;
let esSocio=false;

//si es socio recibe 10% de descuento.

if( totalCompra>0 && esSocio===true){
let precioFinal= totalCompra * 0.90;
console.log('Usted tiene descuento: el precio final es ',precioFinal)
}
else{console.log("No se le aplica el descuento por raton...",totalCompra)}


// Sistema de mantenimiento a prueba de error. pagina en mantenimiento.

let paginaMantenimiento=false;

if(!paginaMantenimiento){
    console.log("LA PAGINA ESTA FUERA DE SERVICIO: MANTENIMIENTO.")
}

// SENSOR DEL CINTURON DE SEGURIDAD.

let cinturonabrochado= false;

if(!cinturonabrochado){
    console.log('BEEP BEEP BEEP BEEP')
}