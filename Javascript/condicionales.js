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

/*Validacion de formulario
input Nombre.
1 condicion es que el input no este vacio.
2 String cada de caracteres.

la logica del problema: marcar que un input esta vacio en una variable es "". dentro del input nombre existe cualquier caracter que sea diferente a "".
*/

let inputNombre="      ";

if (inputNombre !==''){
    console.log('Nombre de usuario fue cargado.')

}
else{console.log("Debe llenar el casillero de Nombre.")}

 /* Pedido  de turnos sabiendo que el domingo esta cerrado.

 if(dia==domingo){
    console.log("Cerrado.")
 }
 else{console.log("Pedir turno de lunes a sabado.")}

 if(dia!==domingo){
    console.log("PEDIR TURNO.")
 }
else{console.log('DOMINGO CERRADO.')}*/

/*Ciclo for: bucle que me permite repetir codigo es de manera programada por se la cantidad de vueltas que se repite.
for(iniciador;condicion;contador){bloque de codigo que se repite.}
iniciador: inicia el bucle determina la primera vuelta. En general es 0 o 1.
condicion: ejecuta el bucle siempre y cuando sea TRUE. Si es true el bucle da una vuelta mas.
contador: se ejecuta al terminar la condicion, y suma la cantidad de unidades determinadas para que sigue dando la vuelta.
*/

for(let i=0;i<=3;i++){
    console.log("Vuelta numero "+ i)
}


/* Cuenta regresiva de un lanzamiento de un cohete*/

for(let i=10;i>=0;i--){
    console.log("Lanzamiento en: "+ i);
}

/*ALARMA SUENE 3 VECES*/

let alarmaEncendida=true;

for(let intento=1;intento<=3;intento++){
    console.log('bip bip Alarma sonando.'+ intento +" veces")
}
console.log('Usuario no se desperto.')


/* IF DENTRO DE UN FOR
SIMULADOR DE ASCENSOR: HOTEL 6 PISOS.EL HOTEL TIENE PROBLEMAS DE AIRE ACONDICIONADO EN EL PISO 4. POR LO TANTO EL ASCENSOR NO PARA EN EL CUARTO PISO.*/

for(let piso=0; piso<=6;piso++){
    if(piso !==4){
    
        console.log('Ascensor subiendo... bienvenido al piso: '+ piso)
    
    }else{console.log('Piso 4 Inhabilitado')}


}


/* Sistema operativo del telefono y llego a la configuracion de la pantalla de la bateria. Simular descargar de la bateria desde 25% al 15%. Pero con una regla cuando llego a 20% salte el MODO AHORRO.
*/

for(let porcentaje=25;porcentaje>=15;porcentaje--){
    console.log('Bateria actual: '+ porcentaje + "%")
    if(porcentaje!==20){
        console.log('Bateria baja.')
    }else{console.log('MODO AHORRO ACTIVADO.')}

}