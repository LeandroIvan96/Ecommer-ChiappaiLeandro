const articulos = [
    {
        id: "Pc1",
        titulo: "PC I3- 12100",
        imagen: "./img/I312100.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 479000
    },
    {
        id: "Pc2",
        titulo: "PC I5-11400K",
        imagen: "./img/I511400.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 199000
    },
    {
        id: "Pc3",
        titulo: "PC AMD Ryzen7 5700G",
        imagen: "./img/AMD5700g.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 354000
    },
    {
        id: "Pc4",
        titulo: "PC AMD Ryzen7 X",
        imagen: "./img/AMD7700.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 636800
    },
    {
        id: "Pc5",
        titulo: "PC I7-12700",
        imagen: "./img/I712700.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 250400
    },
    {
        id: "Pc6",
        titulo: "PC I9-12900",
        imagen: "./img/I912900.jpg",
        categoria: {
            nombre: "Pc",
            id: "pc"
        },
        precio: 714000
    },
    // Monitores
    {
        id: "Monitor27",
        titulo: "Monitor Samsung 27",
        imagen: "./img/Monitor27.png",
        categoria: {
            nombre: "Monitor",
            id: "monitor"
        },
        precio: 99000
    },
    {
        id: "Monitor32",
        titulo: "Monitor Samsung 32",
        imagen: "./img/Monitor32.png",
        categoria: {
            nombre: "Monitor",
            id: "monitor"
        },
        precio: 169000
    },
    // Perifericos
    {
        id: "Kit",
        titulo: "Kit Teclado + Mouse",
        imagen: "./img/KitGaming.png",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 45099
    },
    {
        id: "Auris",
        titulo: "Auriculares Gamer Logitech Astro A10",
        imagen: "./img/Auriculares.jpg",
        categoria: {
            nombre: "Perifericios",
            id: "perifericos"
        },
        precio: 52789
    },
    {
        id: "Microfono",
        titulo: "Microfono Hyperx",
        imagen: "./img/Microfono.jpg",
        categoria: {
            nombre: "Perifericos",
            id: "perifericos"
        },
        precio: 109989
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const titulo = document.querySelector("#titulo-principal");
let botonesAgregar = document.querySelectorAll(".articulo-agregar");
const cantidad = document.querySelector("#cantidad");

function cargarProductos(articulosElegidos){

    contenedorProductos.innerHTML = '';

    articulosElegidos.forEach(articulo =>{
        const div = document.createElement("div");
        div.classList.add("articulos");
        div.innerHTML = `<img class="articulo-imagen"class="articulo-imagen"  height="300px" width= "250px" src="${articulo.imagen}" alt="${articulo.titulo}">
        <div class="articulo-detalle">
            <h3 class="articulo-titulo">${articulo.titulo}</h3>
            <p class="articulo-precio">$${articulo.precio}</p>
            <button class="articulo-agregar" id ="${articulo.id}">Agregar</button>
        </div>`;
        contenedorProductos.append(div);
    })

    actualizarBotonesAgregar();
}

cargarProductos(articulos);

botonesCategorias.forEach(boton => {
    boton.addEventListener("click", (e) => {

        botonesCategorias.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active")
        
        if (e.currentTarget.id !== 'todos')
        {
            const articulosCategoria = articulos.find(articulo => articulo.categoria.id === e.currentTarget.id);
            const articulosBoton = articulos.filter(articulo => articulo.categoria.id === e.currentTarget.id);
            titulo.innerHTML = articulosCategoria.categoria.nombre;
            cargarProductos(articulosBoton);
            return
        }
        else{
            titulo.innerHTML = "Todos los articulos";
            cargarProductos(articulos);
        }

        console.log(e.currentTarget.id);


    } )
})

function actualizarBotonesAgregar(){
    botonesAgregar = document.querySelectorAll(".articulo-agregar");

    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", agregarAlCarrito);
    })
}

const articulosEnCarrito=[];

function agregarAlCarrito(e){
    const idBoton = e.currentTarget.id;
    const articulosAgregados = articulos.find(articulo => articulo.id === idBoton);
    
     if (articulosEnCarrito.some(articulo => articulo.id === idBoton)){
        const index = articulosEnCarrito.findIndex(articulo => articulo.id === idBoton);
        articulosEnCarrito[index].cantidad++;


     }  
     else{
        articulosAgregados.cantidad = 1;
        articulosEnCarrito.push(articulosAgregados);
     }

     console.log(articulosEnCarrito);
}

function actualizarCantidad(){
    
}
