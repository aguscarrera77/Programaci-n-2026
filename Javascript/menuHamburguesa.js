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

  const formProducto=document.querySelector("#formProducto");

  formProducto.addEventListener("submit",function(e){
    e.preventDefault();
    const nombreProducto=document.querySelector("#nombreProducto");
    const precioProducto=document.querySelector("#precioProducto");

    const nombre=nombreProducto.value;
    const precio=parseFloat(precioProducto.value);

    let productos=JSON.parse(localStorage.getItem("productos")) || [];

    const nuevoProducto={
      id:Date.now(),
      nombre:nombre,
      precio:precio
    }
    productos.push(nuevoProducto);
    localStorage.setItem("productos",JSON.stringify(productos));
    Swal.fire({
  title: "excelente!",
  text: "agrego un producto a lista correctamente!",
  icon: "success"
});
    formProducto.reset();
    nombreProducto.focus();

  })



  
