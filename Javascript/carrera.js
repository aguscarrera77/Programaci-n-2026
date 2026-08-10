//let combustible= 60;
//let cantidadVueltas=0;
//let autoSano=true;

//while(autoSano && combustible >0){
//combustible -=15;
    //cantidadVueltas ++;
//Solicitar respuesta de como esta el auto.
//let respuesta=prompt("Chocaste el auto? (si/no)").toLowerCase();
//if(!(respuesta==="no")){
//autoSano=false;
//}
//}

//console.log("Carrera Finalizada.")

//console.log("Cantidad de vueltas: " + cantidadVueltas)

function simuladorCarrera(){

let combustible=60;
let cantidadVueltas=0;
let autoSano=true;
while(autoSano && combustible > 0 ){
cantidadVueltas++;
combustible -=15;

let respuesta= prompt("Chocaste: (si/no)".toLowerCase())

if(!(respuesta==="no"))
{
    autoSano=false;
}


}

console.log("-------------------------------------------------");
console.log("Cantidad de vueltas: "+ cantidadVueltas);

if(!autoSano){
    console.log("La carrera termino porque chocaste.")
}
else {console.log("La carrera termino porque se quedo sin combustible.")}


}

simuladorCarrera();