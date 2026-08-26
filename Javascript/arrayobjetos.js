//  objeto.

const producto1={
    nombre:'teclado',
    precio:1200,
    stock:true,

}
//Objeto con 3 arrays con claves y valores.

const catalogo=[
{nombre:'teclado',precio:1200,stock:true},//indice 0
{nombre:'monitor',precio:850,stock:true},//indice 1
{nombre:'cpu',precio:900,stock:false}//indice 2 
];


console.log(catalogo)

//Notacion de punto: 


console.log(producto1.nombre)//objeto.
console.log(catalogo[1].precio)//array de objeto.

//Modificar o agregar propiedadas al objeto.

producto1.stock=false;
producto1.marca="Samsung"

console.log(producto1)

//Metodos de array de objetos.

//Filto o filter:recorre una lista,filtra segun la condicion y arma un nuevo array.

//mostrar productos disponibles.

const productosDisponibles= catalogo.filter(function(producto){
    return producto.precio <= 850;
})

console.log(productosDisponibles)

//find o buscador o encontrar: buscar dentro del array y trae el primero que cumple con la condicion.

const productoBuscado=catalogo.find(function (producto){
    return producto.nombre === "cpu";
})

console.log(productoBuscado)

//map o transformador: toma la lista original y crea una nueva lista. Porque algun elemento fue modificado.

const soloNombres=catalogo.map(function(producto){
    return producto.nombre;
})

console.log(soloNombres)

//forEach:recorre cada objeto del array y lo imprime.

catalogo.forEach(function(producto){
    console.log("Nombre producto: " + producto.nombre + " Precio: $ " + producto.precio)
})

const alumnos=[
    {id:101,nombre:"Mario",nota:9,materia:"Matematica"},
        {id:102,nombre:"Ana",nota:5,materia:"Lengua"},
            {id:103,nombre:"Norma",nota:8,materia:"Fisica"},
    {id:104,nombre:"Martin",nota:3,materia:"Fisica"},
    {id:105,nombre:"Sandra",nota:10,materia:"Historia"},

]

//Saber quien esta aprobado (mayor 6) y de la materia Fisica.

const aprobadosFisica= alumnos.filter(alumno=> alumno.nota >=6 && alumno.materia==='Fisica' )

console.log(aprobadosFisica)

const lista=document.querySelector("#lista-aprobados")



aprobadosFisica.forEach(function(alumno){
    lista.innerHTML += "<li>"+ alumno.nombre+ " Nota- "+ alumno.nota + "</li>";
})

//Preceptor necesito saber cual es el alumno con id:104.

const alumnoBuscado=alumnos.find(alumno=>alumno.id===104);
console.log(alumnoBuscado)

//Lista con nombre y la nota del estudiante.


const boletines=alumnos.map(alumno=> "Alumno: "+ alumno.nombre + " Nota- "+ alumno.nota)


console.log(boletines)


