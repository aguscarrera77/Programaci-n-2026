const submenu=document.querySelector("#submenu");
const submenuTrigger=document.querySelector("#submenu-trigger");
const submenuItem=document.querySelector('#submenu-Item');

submenuTrigger.addEventListener("click",function(e){
    e.preventDefault();//evita que el enlace recargue la pagina.
    submenu.classList.toggle("active");
});
submenuItem.addEventListener('mouseleave',function(){
    submenu.classList.remove("active");
});

//agregamos una variable que distinga entre el click simple y doble click.

const botonHamburguesa=document.querySelector('#btn-hamburguesa');
const navMovil=document.querySelector('#navMovil');
const submenu2=document.querySelector('#submenu2');
const submenuMovil=document.querySelector('#btn-submenuMovil');

// entre al dom y llame a todos las etiquetas que contiene el boton, menu y submenu.

botonHamburguesa.addEventListener("click",function(){
navMovil.classList.toggle('abierto');
});
//doble para cerrar el boton. Cierra todo.
botonHamburguesa.addEventListener('dblclick',function(){
navMovil.classList.remove('abierto');
submenu2.classList.remove('activo');


})
//click del submenu

submenuMovil.addEventListener('click',function(event){
    event.preventDefault();
    submenu2.classList.toggle('activo');

})
  //-------------- Agregar productos haciendo click en el boton

  const formProducto=document.querySelector('#formProducto');

  const nombreProducto=document.querySelector("#nombreProducto");
  const precioProducto=document.querySelector("#precioProducto");
  const listaProducto=document.querySelector("#listaProducto");

  const productos=[];

  formProducto.addEventListener('submit',function(e){
    e.preventDefault();//evita reset de los inputs.
    const nombre=nombreProducto.value.trim();//guarda valor del input nombre y saca espacios adelante y atras.
    const precio=parseFloat(precioProducto.value);//parsefloat toma valores decimales.
    if(nombre==="" || isNaN(precio))return;//validicion con condicion:si el nombre esta vacio o precio no es un numero la funcion no sigue se interrumpe y vuelve a punto cero por el return.
    const nuevoproducto={
        id:Date.now(),// generar un id de acuerdo la fecha.
        nombre:nombre,
        precio:precio

    };
    productos.push(nuevoproducto);// agrega al array productos un objeto.

    agregarProductoalDom(nuevoproducto);//funcion que va a agragar el nuevo producto en el html receptor.
    formProducto.reset();//resetea los inputs.
    nombreProducto.focus();//vuelve el cursor al input senalado.

  });

  function guardarLocalStorage(){
    localStorage.setItem('productos'.JSON.stringify(productos));
  }

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
     });
    
    listaProducto.appendChild(tarjeta);
  };