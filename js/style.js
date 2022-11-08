

// Pedimos nombre de ingreso.

let nombre = prompt("Ingresa tu nombre");;

if (nombre.trim() == "") {
    alert("no ingresaste nombre de usuario");
}
else {
    alert("Bienvenido" + nombre);
}



// solicitamos cupon de descuento en caso que tenga el codigo, si no tiene el codigo pasamos derecho  a las secciones
// solicitamos un maximo de 3 intenos
// una vez aceptado el cupon, ofrecemos un 15% de descuento 

let palabraClave = "cupon1234"
let tieneCupon = confirm("Usted tiene codigo de descuento?")

if (tieneCupon == true) {

    let contador = 0 
   let cupon =  prompt("Ingrese su codigo de descuento")

    while (palabraClave != cupon && contador<=3) {
        cupon = prompt("Su codigo no fue aceptado. Ingreselo nuevamente")
        contador = contador + 1
    }

    if (contador<= 3)
    alert("Su codigo fue aceptado con exito, tiene un 15% de descuento");
}

// Solicitamos al cliente en que seccion del e commerce, desea ingresar.


let opciones = prompt("elegi una opcion: \n1 - Seccion Cocina \n2 - Seccion Dormitorio \n3 - Seccion Jardin ")

if (opciones == 1) {
    alert("Bienvenid@ a la Seccion Cocina");
} else if (opciones == 2) {
    alert("Bienvenid@ a la Seccion Dormitorios");
} else if (opciones == 3) {
    alert("Bienvenid@ a la Seccion Jardineria");
}



// Productos  y carrito
//Mostramos los productos en caso que el cliente quiera comprar.



const productos =  [
{ nombre: "Cubiertos", precio: 1500 },
{ nombre: "kit Ollas ", precio: 2400 },
{ nombre: "Tazas Porcelana", precio: 400 },
{ nombre: "Set 4 servilletas", precio: 250 },
{ nombre: "Tabla estampada", precio: 700 },
];

let carrito = []

let seleccion = prompt ("Hola desea comprar algun producto SI o NO");

while ( seleccion != "SI" && seleccion != "NO" ){

    alert("por favor ingrese SI o NO")
    seleccion = prompt ("Hola desea comprar algun producto SI o NO")
}

if( seleccion == "SI"){
    alert("A continuacion lista de productos")
    let todosLosProductos = productos.map(
        (producto)=> producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "))
} else if ( seleccion == "NO"){

    alert("Gracias por visitarnos!");
}

while( seleccion !="NO") {
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Cubiertos" || producto == "kit Ollas" || producto == "Tazas Porcelana" || producto == "Set 4 servilletas" || 
    producto == "Tabla estampada" ){
        switch(producto) {
            case"Cubiertos":
            precio = 1500; 
            break;
            case"kit Ollas":
            precio = 2400; 
            break;
            case"Tazas Porcelana":
            precio = 400; 
            break;
            case"Set 4 servilletas":
            precio = 250; 
            break;
            case"Tabla estampada":
            precio = 700; 
            break;
            default:
                break;
        }
        let unidades = parseInt(prompt("cuantas unidades quiere llevar"))


        carrito.push({producto,unidades, precio})
        console.log(carrito)
        } else {
            alert("Ese producto no se encuentra disponible")
        }

        seleccion = prompt("desa seguir comprando??")
        while(seleccion === "no"){
            alert("gracias por la compra! Que lo disfrutes")
            carrito.forEach((carritoFinal) => {
                console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades},total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
            })
            break;
        }
        }

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log(`el total a pagar por su compra es: ${total}`)




