//llamo a la memoria para accede a los datos guardados
let infoProducto = JSON.parse(localStorage.getItem("producto"));
console.log(infoProducto)

let foto = document.getElementById("foto");
foto.src = infoProducto.foto

let nombre = document.getElementById("nombre");
nombre.textContent = infoProducto.nombre

let precio = document.getElementById("precio")
precio.textContent = infoProducto.precio

let descripcion = document.getElementById("descripcion")
descripcion.textContent = infoProducto.descripcion

let total = document.getElementById("total")



cantidad.addEventListener('keydown', (evento) => {
    if (evento.key === '-' || evento.key === 'Subtract') {
        evento.preventDefault();
    }
});

let infoCarrito = JSON.parse(localStorage.getItem("carrito"))
let carrito
let pildora = document.getElementById("pildora")
if (infoCarrito != null) {
    carrito = infoCarrito
    pildora.textContent = carrito.length
} else {
    carrito = Array()
}

let btnAgregarProducto = document.getElementById("btnagregarcarrito")

btnAgregarProducto.addEventListener("click", function () {
    carrito.push(infoProducto)
    pildora.textContent = carrito.length
    localStorage.setItem("carrito", JSON.stringify(carrito))
    let precio = infoProducto.precio.split("COP ")[1]
    let cantidad = document.getElementById("cantidad").value
    subtotal(precio,cantidad)
    let convertir = total.textContent
    dolares(convertir)
})

let btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito")
btnLimpiarCarrito.addEventListener("click",function(){
    carrito = Array();
    localStorage.setItem("carrito",JSON.stringify(carrito))
})


function subtotal(precio,cantidad){
    let subtotal = precio*cantidad;
    // console.log(subtotal)
    total.textContent=subtotal
}

function dolares(convertir) {
    let dolar = convertir*0.00021
    //console.log(dolar)
    conversor.textContent=dolar
  }
  
 

