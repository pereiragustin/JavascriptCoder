

// Pedimos nombre de ingreso.

let nombre = prompt("Ingresa tu nombre");

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



