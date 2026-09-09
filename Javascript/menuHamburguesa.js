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

let clickTimer;



