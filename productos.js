const productosPielNormalySeca = [
    {
        nombre: "Tonico de Agua de Rosas 100 ml",
        alt: "Foto Tonico de Agua de Rosas 100 ml",
        precio: "$2500",
        descripcion: "Refrescante tónico de agua de rosas y azahar. Aporta hidración, frescura y luminosidad. Ideal para aplicar luego de la limpieza y durante el día para refrescar e iluminar el rostro. Para pieles secas, normales, mixtas y sensibles.",
        img: "./images/aguaderosas.jpeg"
    },
    {
        nombre: "Sensitive Milk 100 ml",
        alt: "Foto Sensitive Milk 100 ml",
        precio: "$2500",
        descripcion: "Suave leche de limpieza con ingredientes hidratantes y calmantes. Limpia e hidrata. Para pieles normales, secas y sensibles.",
        img: "./images/sensitive.jpeg"
    },
    {
        nombre: "Serum Hialurónico + 100 ml",
        alt: "Foto Serum Hialurónico + 100 ml",
        precio: "$3500",
        descripcion: "Serum de hidratación profunda con ácido hialurónico, niacinamida y zinc. Ideal para pieles mixtas/grasas. Se coloca luego de la limpieza. Puede potenciar su efecto colocando una emulsión/crema posterior a él. Aporta mucha hidratacion, regulando la oleosidad de la piel. Luminosidad y suavidad.",
        img: "./images/hialu100.jpeg"
    },
    {
        nombre: "Gold Cream 50 gr",
        alt:"Foto Gold Cream 50 gr",
        precio: "$3500",
        descripcion: "Crema anti-age que aporta una hidración profunda. Ideal para pieles maduras y secas. Da luminosidad y mucha suavidad.",
        img: "./images/gold.jpeg"
    },
];


const productosPielMixtayGasa = [
    {
        nombre: "Tonico de Agua de Rosas 100 ml",
        precio: "$2500",
        descripcion: "Refrescante tónico de agua de rosas y azahar. Aporta hidración, frescura y luminosidad. Ideal para aplicar luego de la limpieza y durante el día para refrescar e iluminar el rostro. Para pieles secas, normales, mixtas y sensibles."
        
    },
    {
        nombre: "Glicoglow Milk 100 ml",
        precio: "$2500",
        descripcion: "Emulsión de limpieza con ácido glicólico. Aporta luminosidad y suavidad a la piel. Para pieles normales, mixtas y grasas. Anti-age."
    },
    {
        nombre: "Serum Hialurónico + 100 ml",
        precio: "$3500",
        descripcion: "Serum de hidratación profunda con ácido hialurónico, niacinamida y zinc. Ideal para pieles mixtas/grasas. Se coloca luego de la limpieza. Puede potenciar su efecto colocando una emulsión/crema posterior a él. Aporta mucha hidratacion, regulando la oleosidad de la piel. Luminosidad y suavidad."
    }
];

let productosPielNyS = document.getElementById("productosPielNyS");
for (const producto of productos){
    let cardProducto=document.createElement("div");

    cardProducto.innerHTML = `

    <div class="card" style="width: 18rem;">
    <img src="${productosPielNormalySeca.img}" class="card-img-top" alt="${productosPielNormalySeca.alt}">
    <div class="card-body">
      <h3 class="card-title">${productosPielNormalySeca.nombre}</h3>
      <h6 class="card-price">${productosPielNormalySeca.precio}</h6>

      <p class="card-text">${productosPielNormalySeca.descripcion}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>


    <div class="card mb-3" style="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src="${productosPielNormalySeca.img}" class="img-fluid rounded-start" alt="${productosPielNormalySeca.alt}">
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">${productosPielNormalySeca.nombre}</h5>
        <p class="card-text">${productosPielNormalySeca.descripcion}</p>
        <p class="card-text"><small class="text-muted">${productosPielNormalySeca.precio}</small></p>
      </div>
    </div>
  </div>
</div>
    `
}

productosPielNyS.appendChild(cardProducto);



let productosPielMyG = document.getElementById("productosPielMyG");


