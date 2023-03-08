//llamo a la memoria para accede a los datos guardados
let infoProducto = JSON.parse(localStorage.getItem("producto"));
console.log(infoProducto)

let foto=document.getElementById("foto");
foto.src = infoProducto.foto

let nombre=document.getElementById("nombre");
nombre.textContent=infoProducto.nombre

let precio=document.getElementById("precio")
precio.textContent=infoProducto.precio

let descripcion=document.getElementById("descripcion")
descripcion.textContent=infoProducto.descripcion

