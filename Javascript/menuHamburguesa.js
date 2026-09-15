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
    e.preventDefault();
    const nombre=nombreProducto.value.trim();
    const precio=parseFloat(precioProducto.value);
    if(nombre==="" || isNaN(precio))return;
    const nuevoproducto={
        id:Date.now(),// generar un id de acuerdo la fecha.
        nombre:nombre,
        precio:precio

    };
    productos.push(nuevoproducto);

    agregarProductoalDom(nuevoproducto);
    formProducto.reset();

  });

  function agregarProductoalDom(nuevoproducto){

  }