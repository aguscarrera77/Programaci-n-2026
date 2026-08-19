const frutas=["manzana","pera","frutilla"]

/*length: es el metodo que cuenta cuantos elementos tiene un Array.*/

console.log(frutas)
console.log(frutas[3])
console.log(frutas.length)

/*push: agrega un elemento al array en su ultima posicion*/

console.log(frutas.push('mandarina'))
console.log(frutas.length)
console.log(frutas)

/*pop:eliminar el ultimo elemento del Array.*/

console.log(frutas.pop())
console.log(frutas)

/*modificar su estructura usando un indice*/

frutas[3]="uvas"
console.log(frutas)

/*Historial de paginas.*/

const historialPaginas=[]

/*usuario navega en 3 paginas distintas. */

historialPaginas.push('ole.html');
historialPaginas.push('marca.html');
historialPaginas.push('elmercurio.html');

console.log(historialPaginas)

const historialModificado=historialPaginas.pop();

console.log(historialModificado)
console.log(historialPaginas)


/*unshift: agrega elemenos al princicio del array*/

/*contador de tareas. Por prioridad.*/

const contadorTareas=['lavar platos','sacar al perro']

// surge tarea Pagar Municipales.

contadorTareas.unshift("Pagar tasas municipales");
console.log(contadorTareas)

// shift: elimina el elemento de inicio.

const tareasHechas= contadorTareas.shift();

console.log(contadorTareas)

//Recorro un array: para recorrer un array uso el ciclo for. Usamos los indices... como marca de cada elemento. Siempre arranco con el indice let i=0. Para que recorra la cantidad exacta de elementos primero debe contarlos....la sintaxis es i < array.length 

// Mostrar un catalogo de productos usando una funcion.

const prendas=['buzo','remera','boxer','medias'];

function mostrarCatalogo(){
    for(let i=0;i<prendas.length;i++){
        const item= i + 1;
        console.log(`${item}-Producto:${prendas[i]}`)
    }
}
 
mostrarCatalogo()
 

//Calcular el total de una compra... usando funciones.
//For...of: trabaja con variables temporales..recorriendo los elementos directamente. 

const compras=[200,140,50,49]


function calcularTotal(listaPrecios){
    let total=0;
for(const compra of listaPrecios ){
    total += compra;
}
    
return total;
}

console.log(`Total a pagar $${calcularTotal(compras)}`)

console.log(calcularTotal(compras))