let articulosEnCarrito = localStorage.getItem("articulosEnCarrito");
articulosEnCarrito = JSON.parse(articulosEnCarrito);

const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorCarritoProductos = document.querySelector("#carrito-articulos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let botonesEliminar = document.querySelectorAll(".carrito-articulos-eliminar");
const botonVaciar = document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal = document.querySelector("#total")


function cargarArticulosCarrito(){
    if (articulosEnCarrito){

        contenedorCarritoVacio.classList.add("visible='true'");
        contenedorCarritoProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
    
        contenedorCarritoProductos.innerHTML = "";
    
        articulosEnCarrito.forEach(articulo => { 
    
        const div = document.createElement("div");
        div.classList.add("carrito-articulo");
        div.innerHTML=`
        <img class="carrito-articulo-imagen" src="${articulo.imagen}" alt="${articulo.titulo}">
        <div class="carrito-articulo-titulo">
        <small>Titulo</small>
        <h3>${articulo.titulo}</h3>
        </div>
        <div class="carrito-articulo-cantidad">
        <small>Cantidad</small>
        <h3>${articulo.cantidad}</h3>
        </div>
        <div class="carrito-articulo-precio">
        <small>Precio</small>
        <h3>${articulo.precio}</h3>
        </div>
        <div class="carrito-articulo-subtotal">
        <small>Subtotal</small>
        <h3>${articulo.precio * articulo.cantidad}</h3>
        </div>
        <button class="carrito-articulos-eliminar" id = "${articulo.id}"><i class="bi bi-trash"></i></button>`;
    
        contenedorCarritoProductos.append(div); 
    
        })
    
    }
    else{
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorCarritoProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    }

    actualizarBotonesEliminar();
    actualizarTotal();

}
cargarArticulosCarrito();


function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-articulos-eliminar");

    botonesEliminar.forEach(boton => {
        boton.addEventListener("click", eliminarDelCarrito);
    })
}

function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index = articulosEnCarrito.findIndex(articulo => articulo.id === idBoton);
    articulosEnCarrito.splice(index,1 );
    cargarArticulosCarrito();

    localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito))

}

botonVaciar.addEventListener("click", vaciarCarrito);

function vaciarCarrito(){
    articulosEnCarrito.length = 0;
    localStorage.setItem("articulosEnCarrito", JSON.stringify(articulosEnCarrito));
    cargarArticulosCarrito();
}

function actualizarTotal(){
    const totalCalculado = articulosEnCarrito.reduce((acc, articulo) => acc + (articulo.precio * articulo.cantidad), 0);
    total.innetText = `$${totalCalculado}`;
}
