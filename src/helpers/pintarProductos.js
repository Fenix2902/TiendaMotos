export function pintarProductos(productos){
    productos.forEach(function(producto){
    
        //creando columnas para alojar los productos
    
        let columna = document.createElement('div');
        columna.classList.add("col");
    
        //crear una tarjeta para almacenar la info del producto
    
        let tarjeta = document.createElement('div');
        tarjeta.classList.add("card","h-100","shadow");
    
        //crear imagen
    
        let imagen = document.createElement('img');
        imagen.classList.add("img-fluid","w-100");
        imagen.src = producto.fotos[0];
    
        //Crear un Titulo
    
        let nombre = document.createElement('h5');
        nombre.classList.add("text-center");
        nombre.textContent = producto.nombre;
    
        //Crear Precio
    
        let precioArticulo = document.createElement('h5');
        precioArticulo.classList.add("text-center","text-success","fw-bold");
        precioArticulo.textContent = "USD "+producto.precio;

        //Creando Descripcion

        let descripcion = document.createElement
        
        //Dectectando evento

        tarjeta.addEventListener("mouseover",function(){
            imagen.src = producto.fotos[1];
        })

        tarjeta.addEventListener("mouseout",function(){
            imagen.src = producto.fotos[0];
        })

        //padres e hijos
    
        tarjeta.appendChild(imagen);
        tarjeta.appendChild(nombre);
        tarjeta.appendChild(precioArticulo);
        columna.appendChild(tarjeta);
        fila.appendChild(columna);
        
    })
}