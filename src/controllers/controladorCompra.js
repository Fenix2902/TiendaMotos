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
    let precio = infoProducto.precio.split("USD ")[1]
    let cantidad = document.getElementById("cantidad").value
    subtotal(precio,cantidad)
})

let btnLimpiarCarrito = document.getElementById("btnLimpiarCarrito")
btnLimpiarCarrito.addEventListener("click",function(){
    carrito = Array();
    localStorage.setItem("carrito",JSON.stringify(carrito))
})


function subtotal(precio,cantidad){
    let subtotal = precio*cantidad;
    console.log(subtotal)
    total.textContent=subtotal
}

// let btnConversor = document.getElementById("btnConversor")
// btnConversor.addEventListener("click",function(){
    
    
// })

function Dolares(total) {
    let dolar = total*0.00023
    console.log(dolar)
  }
  
Dolares(total)