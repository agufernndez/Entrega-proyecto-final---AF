const arrayProductos = [
    {
        nombre: "Tonico de Agua de Rosas 100 ml",
        alt: "Foto Tonico de Agua de Rosas 100 ml",
        precio: 2500,
        descripcion: "Refrescante tónico de agua de rosas y azahar. Aporta hidración, frescura y luminosidad. Ideal para aplicar luego de la limpieza y durante el día para refrescar e iluminar el rostro. Para pieles secas, normales, mixtas y sensibles.",
        img: "../images/aguaderosas.jpeg",
        cod: 1
    },
    {
        nombre: "Sensitive Milk 100 ml",
        alt: "Foto Sensitive Milk 100 ml",
        precio: 2500,
        descripcion: "Suave leche de limpieza con ingredientes hidratantes y calmantes. Limpia e hidrata. Para pieles normales, secas y sensibles.",
        img: "../images/sensitive.jpeg",
        cod: 2
    },
    {
        nombre: "Glicoglow Milk 100 ml",
        precio: 2500,
        descripcion: "Emulsión de limpieza con ácido glicólico. Aporta luminosidad y suavidad a la piel. Para pieles normales, mixtas y grasas. Anti-age.",
        img: "../images/glico100.jpeg",

        cod: 3

    },
    {
        nombre: "Serum Hialurónico + 100 ml",
        alt: "Foto Serum Hialurónico + 100 ml",
        precio: 3500,
        descripcion: "Serum de hidratación profunda con ácido hialurónico, niacinamida y zinc. Ideal para pieles mixtas/grasas. Se coloca luego de la limpieza. Puede potenciar su efecto colocando una emulsión/crema posterior a él. Aporta mucha hidratacion, regulando la oleosidad de la piel. Luminosidad y suavidad.",
        img: "../images/hialu100.jpeg",
        cod: 4
    },
    {
        nombre: "Gold Cream 50 gr",
        alt:"Foto Gold Cream 50 gr",
        precio: 3500,
        descripcion: "Crema anti-age que aporta una hidración profunda. Ideal para pieles maduras y secas. Da luminosidad y mucha suavidad.",
        img: "../images/gold.jpeg",
        cod: 5
    },
];
let carrito = [];


// Imprimo uno por uno los productos en cards.
imprimirProductosEnHTML (arrayProductos);
function imprimirProductosEnHTML (){
    let productosTodosjs = document.getElementById("productosTodos");
    // console.log(productosTodosjs);
    for (const producto of arrayProductos) {
    let cardProducto=document.createElement("div");
    cardProducto.innerHTML =
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

    `
    ;
    productosTodosjs.appendChild(cardProducto);
    // OJO QUE SI PONGO EL APPEND CHILD FUERA DEL FOR, NO ME ENCUENTRA LA VARIABLE DE LA CARD PORQUE ES LOCAL!!!! 
    }

    // EVENTO PARA CADA BOTON "COMPRAR"
    arrayProductos.forEach(producto => {
    document.getElementById(`btn${producto.cod}`).addEventListener(`click`, function(){
        agregarAlCarrito(producto);
    });
});
}

// se van agregando los productos que pongo "comprar" a la tabla del carrito
function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito)
    // pongo alert pero agregar libreria sweet alert
    alert(`Se ha agregado ${productoNuevo.nombre} con éxito a su carrito `)
    
    document.getElementById("tbody").innerHTML+=
    `
    <tr>
        <td>#0${productoNuevo.cod}</td>
        <td>${productoNuevo.nombre}</td>
        <td>$${productoNuevo.precio}</td>
    `
    // guardo los productos seleccionados en sessionStorage. Cuando se cierra el navegador, se elimina todo.
    sessionStorage.setItem("carrito",JSON.stringify(productoNuevo));
}






// SPREAD: "desparramo" los objetos del array y dsp muestro por consola el que esta en la posicion 2
const nombresProductos = {...arrayProductos};
// console.log(nombresProductos);
// console.log(nombresProductos[2]); 



