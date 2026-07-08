/* Como piensa if? solo busca que la condicion sea true. para entrar en el bloque codigo.
Operador not !: cambiar el valor booleano. Es el que cambia la verdad.
*/

/*1 EJEMPLO: CARRITO DE COMPRAS VACIO. EL USUARIO ENTRA AL CARRITO PARA PAGAR UN PRODUCTO PERO ESTA VACIO.*/

let carritoProductos= false;

if(!carritoProductos){
    console.log("El carrito esta vacio. Agregue un producto para terminar con el pago.")
}

/* 2.Verificar si el usuario autentifico el login*/

let usuarioAutenticado= false;

if(!usuarioAutenticado){
    console.log('Acceso denegado. Redirigiendo a la pagina de inicio.')
}

/*Operador distinto a (!==) : compara dos cosas y devuelve true cuando estas son diferentes.*/
 
/* 3. Validacion de formulario.*/

let mailIngresado="agus@gmail.com";

/* El usuario ingreso un valor de texto diferente a texto vacio*/

if(mailIngresado !== ""){
    console.log("Correo valido. Procesando el registro.")
}
else{console.log("El campo correo debe estar completo.")}

let cuentaVerificada=false;

if(!cuentaVerificada){
    console.log("ok")
}

/* Como lee javascript y como razona ante este bloque
1. entra el if y ve: !cuentaVerificada..... si la cuenta NO esta verificada.... se imprime el codigo.
2.cual es el valor el if: false.
3.como actua el signo ! dentro del if: transforma el valor del if en true.
4.el if se ejecuta se imprime el bloque de codigo.
*/

/* 4. Envio del formulario. Bloqueamos el boton para que se haga un solo click de envio. Evitamos duplicacion de valores.*/

let formularioCargando=false;

/* queremos permitir el click SOLO SINO esta cargando*/

if(!formularioCargando){
    console.log("Boton habilitado.Puedes enviar el formulario cargado")
}
else{console.log("Boton bloqueado: espere a que envie el formulario cargado.")}

/*Control de stock. e-commerce quiere que al quedar pocas unidades aparezca un cartel que digo Ultimas prendas.*/

let stockDisponible=1;

/*Primera pensamiento logico: Stock displonible tiene que ser distinto o mayor 0.
Segundo pensamiento logico: stock normal cuando sea mayor a 1.*/

if(stockDisponible !== 0 && stockDisponible===1){
    console.log("ATENCION SOLO QUEDA UN PRODUCTO DISPONIBLE.COMPRA YA!!!!")
}

/* MITO DEL FALSE EN LA VARIABLE!!!!!!!!
EL IF NO REACCIONA AL VALOR QUE TIENE LA VARIABLE!!!!!!!
EL IF SOLO REACCIONA SI EL RESULTADO AL FINAL DEL PARENTESIS ES VALOR TRUE.
SI QUIERO QUE EL VALOR DE LA VARIABLE TENGO PESO EN EL IF.... DEBO USAR ! NEGACION DENTRO DE ESE IF. PORQUE CAMBIO EL VALOR BOLEANO. 
*/

let usuarioDescuento=false;

if(!usuarioDescuento){
    console.log("Precio es el regular no se aplican descuentos.")
}