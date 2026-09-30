const listadoProducto=document.querySelector("#listadoProductos");
const btnVaciar=document.querySelector("#btnVaciar");
//fabrico un array que recibe los objetos.
let productos=[];

//funcion que guarde los cambios que le voy haciendo a la lista. Por ej si elimino una de las tarjetas.

function guardarLocalStorage(){
    localStorage.setItem('productos',JSON.stringify(productos));
}
 //los productos de cargan desde el local y se muestran en el nuevo html. Pero siempre la pagina receptora arranca de 0.

 function cargaryRenderizar(){
    listadoProducto.innerHTML="";
    const datosGuardados=localStorage.getItem('productos');
    if(datosGuardados){
        productos=JSON.parse(datosGuardados);
        productos.forEach(producto =>agregarProductoalDom(producto) );
    }


 };

 function agregarProductoalDom(producto){
    const tarjeta=document.createElement("div");
    tarjeta.classList.add("tarjeta-producto");
    tarjeta.dataset.id=producto.id;
    //creo la tarjeta para el html
    tarjeta.innerHTML=`
        <div><strong>
            ${producto.nombre}
        </strong>
        -$${producto.precio.toFixed(2)}
        </div>
        <button class="btn-eliminar">Eliminar</button>
        `;
     const btnEliminar=tarjeta.querySelector(".btn-eliminar");
     btnEliminar.addEventListener('click',function(){
        tarjeta.remove();
        productos=productos.filter(p=> p.id !== producto.id);
        guardarLocalStorage();
        

     });
    
    listadoProducto.appendChild(tarjeta);
  }

  //Funcion que elimina toda la lista completa.

  btnVaciar.addEventListener('click',function(){
    if(productos.length===0)return;
    Swal.fire({
        title:"Estas seguro de borrar",
        text:"Se borraran todos los productos cargados.",
        icon:"warning",
        showCancelButton:true,
        cancelButtonColor:"#d33",
        confirmButtonColor:"#3085d6",
        showConfirmButton:true,
        confirmButtonText:"Si,vaciar",
        cancelButtonText:"Cancelar",
}).then(function(result){
    if(result.isConfirmed){
        productos=[];
        localStorage.removeItem("productos");
        listadoProducto.innerHTML="";
        swal.fire("La lista se ha vaciado.")

    }
  });

  });
//inicio la funcion que carga los productos en el html receptor.
  cargaryRenderizar();

  //Tengo la pagina de cargado abierta y al mismo tiempo la pagina receptora. Carga elementos en pagina de cargado y las agrega en el carrito.

  window.addEventListener('storage',function(e){
        if(e.key==="productos"){
            cargaryRenderizar();
        }
  })
