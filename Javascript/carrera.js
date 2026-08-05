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

function carrera(){
    let combustible=60;
    let cantidadVueltas=0;
    let autoSano=true;
    while(combustible>0 && autoSano){
        combustible -=15;
        cantidadVueltas ++;

        let pregunta=prompt("Chocaste en la vuelta?" +cantidadVueltas+"si/no");
        if(pregunta===si){
            autoSano=false;
        }
        return cantidadVueltas;

    }
}

function mostrarReporte(carrera){

}