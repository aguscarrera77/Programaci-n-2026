const listaCarrito=document.querySelector("#listacarrito");
const totalpagar=document.querySelector("#totalpagar");

function mostrarCarrito(){
    const datosGuardados=localStorage.getItem("productos");
    if(datosGuardados){
        const productos=JSON.parse(datosGuardados);
        if(productos.length===0){
            listaCarrito.innerHTML="<p>El carrito esta vacio.<p>";
            totalpagar.textContent="Sin total a pagar.";
            return;
        }

    
   listaCarrito.innerHTML="";
   let sumaTotal=0;
   //busco en el array si hay productos y lo recorro.

   productos.forEach(producto=>{
   //sumar el precio. llamo al acumulador.
   sumaTotal+=producto.precio;
   //creamos el elemento html de cada producto.
   const item=document.createElement("div");
   item.classList.add('item-carrito');
   item.innerHTML=`<p>${producto.nombre}</p>- $${producto.precio}`;
   listaCarrito.appendChild(item);

});
totalpagar.textContent=sumaTotal.toFixed(2);
};




}