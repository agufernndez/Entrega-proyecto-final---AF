
const arrayPielNormalySeca = [
    {
        nombre: "Tonico de Agua de Rosas 100 ml",
        alt: "Foto Tonico de Agua de Rosas 100 ml",
        precio: 2500,
        descripcion: "Refrescante tónico de agua de rosas y azahar. Aporta hidración, frescura y luminosidad. Ideal para aplicar luego de la limpieza y durante el día para refrescar e iluminar el rostro. Para pieles secas, normales, mixtas y sensibles.",
        img: "images/aguaderosas.jpeg"
    },
    {
        nombre: "Sensitive Milk 100 ml",
        alt: "Foto Sensitive Milk 100 ml",
        precio: 2500,
        descripcion: "Suave leche de limpieza con ingredientes hidratantes y calmantes. Limpia e hidrata. Para pieles normales, secas y sensibles.",
        img: "./images/sensitive.jpeg"
    },
    {
        nombre: "Serum Hialurónico + 100 ml",
        alt: "Foto Serum Hialurónico + 100 ml",
        precio: 3500,
        descripcion: "Serum de hidratación profunda con ácido hialurónico, niacinamida y zinc. Ideal para pieles mixtas/grasas. Se coloca luego de la limpieza. Puede potenciar su efecto colocando una emulsión/crema posterior a él. Aporta mucha hidratacion, regulando la oleosidad de la piel. Luminosidad y suavidad.",
        img: "images/hialu100.jpeg"
    },
    {
        nombre: "Gold Cream 50 gr",
        alt:"Foto Gold Cream 50 gr",
        precio: 3500,
        descripcion: "Crema anti-age que aporta una hidración profunda. Ideal para pieles maduras y secas. Da luminosidad y mucha suavidad.",
        img: "images/gold.jpeg"
    },
];

// SPREAD: "desparramo" los objetos del array y dsp muestro por consola el que esta en la posicion 2
const nombresProductos = {...arrayPielNormalySeca};
console.log(nombresProductos);
console.log(nombresProductos[2]);

function imprimirProductosEnHTML (arrayPielNormalySeca){

    let productosPielNySjs = document.getElementById("productosPielNyS");
    console.log(productosPielNySjs);

    for (const producto of arrayPielNormalySeca) {
    let cardProducto=document.createElement("div");

    cardProducto.innerHTML = 
    `
    <div class="card" style="width: 18rem;">
    <img src="${arrayPielNormalySeca.img}" class="card-img-top" alt="${arrayPielNormalySeca.alt}">
    <div class="card-body">
      <h5 class="card-title">${arrayPielNormalySeca.nombre}</h5>

      <p class="card-text">${arrayPielNormalySeca.descripcion}</p>
      <a href="#" class="btn btn-primary">Comprar</a>
    </div>
  </div>
    `;
    productosPielNySjs.appendChild(cardProducto);
    // OJO QUE SI PONGO EL APPEND CHILD FUERA DEL FOR, NO ME ENCUENTRA LA VARIABLE DE LA CARD PORQUE ES LOCAL!!!! 
    }
}
imprimirProductosEnHTML (arrayPielNormalySeca);





const arrayPielMixtayGasa = [
    {
        nombre: "Tonico de Agua de Rosas 100 ml",
        precio: 2500,
        descripcion: "Refrescante tónico de agua de rosas y azahar. Aporta hidración, frescura y luminosidad. Ideal para aplicar luego de la limpieza y durante el día para refrescar e iluminar el rostro. Para pieles secas, normales, mixtas y sensibles."
        
    },
    {
        nombre: "Glicoglow Milk 100 ml",
        precio: 2500,
        descripcion: "Emulsión de limpieza con ácido glicólico. Aporta luminosidad y suavidad a la piel. Para pieles normales, mixtas y grasas. Anti-age."
    },
    {
        nombre: "Serum Hialurónico + 100 ml",
        precio: 3500,
        descripcion: "Serum de hidratación profunda con ácido hialurónico, niacinamida y zinc. Ideal para pieles mixtas/grasas. Se coloca luego de la limpieza. Puede potenciar su efecto colocando una emulsión/crema posterior a él. Aporta mucha hidratacion, regulando la oleosidad de la piel. Luminosidad y suavidad."
    }
];

// DESTRUCTURACION DE ARRAY
// 1ER Y 2DO PRODUCTO
const [a, b,] = arrayPielMixtayGasa;
console.log(a,b,);
// 3ER PRODUCTO
const [ , ,c] = arrayPielMixtayGasa;
console.log(c);



// const {nombre, precio, descripcion} = arrayPielMixtayGasa;
// const arrayNombre = [nombre];
// console.log(arrayNombre);

// let productosPielMyG = document.getElementById("productosPielMyG");


