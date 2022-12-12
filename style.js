
const secciones = document.getElementById("secciones");
const verCarrito = document.getElementById("verCarrito");
const CarritoContainer = document.getElementById("carrito-container");










const productos = [ 
    {
        id: 1,
        nombre:"Kit Servilletas",
        precio: 250,
       Img: './img/jonathan-borba-A7XkW6Eni2k-unsplash.jpg',
    },
    {
        id: 2,
        nombre:"Kit Ollas",
        precio: 2400,
        Img: './img/cooker-king-AOVtEuU9UGc-unsplash.jpg'
        
    },
    {
        id: 3,
        nombre:"Kit Cubiertos",
        precio: 450,
        Img:"./img/jarek-ceborski-yw3UaP-5ybM-unsplash.jpg"
    },
    {
        id: 4,
        nombre:"Cuadros Dormitorio",
        precio: 750,
        Img:"./img/kam-idris-kyt0PkBSCNQ-unsplash.jpg"
    },
    {
        id: 5,
        nombre:"Cama Matrimonail",
        precio: 17000,
        Img:"./img/kenny-eliason-iAftdIcgpFc-unsplash.jpg"
    },
    {
        id: 6,
        nombre:"Almohadones",
        precio: 950,
        Img:"./img/calvin-hanson-duuX5iVcBiw-unsplash (1).jpg"
    },

    
]




let carrito = [] ;

productos.forEach((producto) => {
    let content = document.createElement("div");
    content.className = "card-body", 
    content.innerHTML = `
    <img src="${producto.Img}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio} $</p>
    
    `;

    secciones.append(content);

let comprar = document.createElement("button")
comprar.innerText = "comprar";
comprar.className = "comprar";
content.append(comprar);

comprar.addEventListener("click", () => {
    carrito.push({
        nombre: producto.nombre,
        id : producto.id,
        precio : producto.precio,
        Img : producto.Img,
        precio : producto.precio,


    })
})
});




verCarrito.addEventListener("click", () => {
  
    const  CarritoHeader= document.createElement("div");
    CarritoHeader.className = "modal-header";
    CarritoHeader.innerHTML = `
    <h1 class="carrito-header-tittle">Mi carrito</h1>
    `;

CarritoContainer.append(CarritoHeader);

const modalbutton = document.createElement("h1");
// modalbutton.innerText = "Total"; // 
modalbutton.className = "modal-header-button";

CarritoHeader.append(modalbutton);


// EN ESTE SECTOR, me suma lo que seleccione y las imagenes con los costos, por falta de tiempo no llegue a editarlo con CSS
carrito.forEach((productos) => {

    let carritoContent = document.createElement("div")
carritoContent.className = "modal-content"
carritoContent.innerHTML = `
<img src="${productos.Img}">
    <h3>${productos.nombre}</h3>
    <p class="price">${productos.precio} $</p>
`;
CarritoContainer.append(carritoContent);
});

const total = carrito.reduce((acc, recorrido) => acc + recorrido.precio, 0);
const totalCompra = document.createElement("div")
totalCompra.className = "total-compra"
totalCompra.innerHTML = `total a pagar: ${total} $`;
CarritoContainer.append(totalCompra)
});






