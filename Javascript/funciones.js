//Funciones: bloque de codigo reutilizable.
//Sintaxis: function nombre de la funcion(parametros){
// codigo;
//     return(retorna el valor adentrod de la funcion.)}

/*function sumar (a,b){
    return a + b;
}
console.log(sumar(10,4))

function saludar(nombre){
    console.log("hola " + nombre + " Bienvenido");
}

saludar("Pepe")
//Funcion para calcular el precio final de un producto. EL precio tiene descuento.

function precioFinal(precio,descuento){
    let montoDescuento= (precio*descuento)/100;
    return precio - montoDescuento;

}



let precio=precioFinal(prompt())
console.log(precio)*/

/* CARA O CRUZ*/

function lanzarMoneda(eleccionTirada){
/*Variable de la tirada de la moneda*/

const tirada=Math.random();
let resultadoTirada="";

if(tirada<0.5){
    resultadoTirada="cara";
}
else{resultadoTirada="cruz"}

if(eleccionTirada === resultadoTirada){
    return "Ganaste: salio " + resultadoTirada;
}
else{return "Perdiste: salio" + resultadoTirada}

}

console.log(lanzarMoneda("cara"))
