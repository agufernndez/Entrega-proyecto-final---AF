
let carritoCompras = [];
let productosJSON=[];

// **********************************AGREGANDO CARDS DESDE ARCHIVO JSON
// Imprimo uno por uno los productos en cards.
function imprimirProductosEnHTML (){
    let productosTodos = document.getElementById("productosTodos");
    for (const producto of productosJSON) {
    let cardProducto=document.createElement("div");
    cardProducto.innerHTML +=(
    `
    <div class="card " style="width: 18rem;">
    <img src="${producto.img}" class="card-img-top" alt="${producto.alt}">
    <div class="card-body">
      <h5 class="card-title">${producto.nombre}</h5>
      <h5 class="card-title">$${producto.precio}</h5>
      <h6 class="card-title">Cod.#0${producto.cod}</h6>
      <p class="card-text">${producto.descripcion}</p>
      <button type="button" class="btn btn-primary" id="btn${producto.cod}">Comprar</button>
    </div>
  </div>

    `)
    ;
    productosTodos.appendChild(cardProducto);
    
    }
    // EVENTO PARA CADA BOTON "COMPRAR"
    for (const producto of productosJSON) {
        //Evento para cada boton
        document.getElementById(`btn${producto.cod}`).onclick= function() {
           agregarACarrito(producto);
       };
   }

}

class ProductoCarrito {
    constructor(objProd) {
        this.cod = objProd.cod;
        this.foto = objProd.img;
        this.nombre = objProd.nombre;
        this.precio = objProd.precio;
        this.descripcion=objProd.descripcion;
        this.cantidad = 1;
    }
}

function agregarACarrito(productoNuevo) {
    let encontrado = carritoCompras.find(p => p.cod == productoNuevo.cod);
    console.log(encontrado);
    if (encontrado == undefined) {
        let prodACarrito = new ProductoCarrito(productoNuevo);
        carritoCompras.push(prodACarrito);
        console.log(carritoCompras);
        swal("Agregado al carrito", "Tu producto se ha agregado con exito al carrito", "success");
        //agregamos una nueva fila a la tabla de carrito
        document.getElementById("tbody").innerHTML+=(
    `
            <tr id='fila${prodACarrito.cod}'>
                <td> #${prodACarrito.cod} </td>
                <td> ${prodACarrito.nombre}</td>
                <td id='${prodACarrito.cod}'> ${prodACarrito.cantidad}</td>
                <td> $${prodACarrito.precio}</td>
                <td> <button class='btn btn-light' onclick='eliminar(${prodACarrito.cod})'>🗑️</button>
            </tr>`);
        
        // <td> <button class='btn btn-light'         id="boton${prodACarrito.cod}"

        // >🗑️</button>

        
        // para cada boton eliminar, tengo que hacer un evento.
        // let boton=document.getElementById(`boton${prodACarrito.cod}`);
        // for (const producto of productoNuevo){
        //     boton.onclick=()=>function(){
        //         eliminarProducto(producto);
        //     }
        // }
        
        
    } else {
        //pido al carro la posicion del producto 
        let posicion = carritoCompras.findIndex(p => p.cod == productoNuevo.cod);
        console.log(posicion);
        carritoCompras[posicion].cantidad += 1;
        document.getElementById(productoNuevo.cod).innerHTML=carritoCompras[posicion].cantidad;
    }
    document.getElementById("totalCarrito").innerText=(`Total: $ ${calcularTotal()}`);

}

function calcularTotal() {
    let suma = 0;
    for (const producto of carritoCompras) {
        suma = suma + (producto.precio * producto.cantidad);
    }
    return suma;
}

function eliminarProducto(cod){
    let indice=carritoCompras.findIndex(producto => producto.cod==cod);
    carritoCompras.splice(indice,1);
    let fila=document.getElementById(`fila${cod}`);
    document.getElementById("tbody").removeChild(fila);
    document.getElementById("totalCarrito").innerText=(`Total: $ ${calcularTotal()}`);
}


//GETJSON de productos.json
async function obtenerJSON() {
    const URLJSON="/productos.json"
    const resp=await fetch("productos.json")
    const data= await resp.json()
    productosJSON = data;
    imprimirProductosEnHTML();
}
