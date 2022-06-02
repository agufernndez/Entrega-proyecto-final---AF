// *******DOM*******
console.dir(document.body.children);

// OBTENET EL VALOR DE LABEL CON EL ID (es mas largo)

// let textoArribaLabel1 = document.getElementById("textoArribaLabel1");
// console.log(textoArribaLabel1.innerHTML);

// let textoArribaLabel2 = document.getElementById("textoArribaLabel2");
// console.log(textoArribaLabel2.innerHTML);

// let textoArribaLabel3 = document.getElementById("textoArribaLabel3");
// console.log(textoArribaLabel3.innerHTML);

// let textoArribaLabel4 = document.getElementById("textoArribaLabel4");
// console.log(textoArribaLabel4.innerHTML);


// FOR OF CON EL NOMBRE DE LA ETIQUETA LABEL (mas corto) PARA OBTENER EL VALOR DE CADA LABEL.
let textosLabels = document.getElementsByTagName("label");
console.log(textosLabels);
for (const textoLabels of textosLabels) {
    console.log(textoLabels.innerHTML); /*con inner.HTML se ve asi*/
    console.log(textoLabels); /*sin inner.HTML se ve asi*/
}

// CONTENIDO DE LOS INPUTS
let contenidoInput=document.getElementsByTagName("input");
console.log(contenidoInput);

// *******EVENTOS*******
// INPUT (si cuando esta escribiendo en nombre y apellido ingresa numeros =que se ponga en ROJO)
let campoNyA = document.getElementById("exampleFormControlInput1");
campoNyA.oninput=()=>{
    if (!isNaN(campoNyA.value))
    campoNyA.style.color="red";
    else{
        campoNyA.style.color="black";
    }
}

let campoCel = document.getElementById("exampleFormControlInput2");
campoCel.oninput=()=>{
    if(isNaN(campoCel.value))
    campoCel.style.color="red";
    else{
        campoCel.style.color="black"
    }
}

// CHANGE
campoNyA.onchange=()=>{
    console.log(`Se agrego nombre y apellido: ${campoNyA.value.toUpperCase()}`)
};

campoCel.onchange=()=>{
    console.log(`Se agrego número de celular: ${campoCel.value}`)
}

let campoEmail = document.getElementById("exampleFormControlInput3");
campoEmail.onchange=()=>{
    console.log(`Se agregó E-mail: ${campoEmail.value.toUpperCase()}`)
}

let campoConsul = document.getElementById ("exampleFormControlTextarea1");
campoConsul.onchange=()=>{
    console.log(`Consulta de ${campoNyA.value.toUpperCase()}: ${campoConsul.value}`)
}

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// carrito de produtos para la proxima entrega sin falta.
// storage para proxima entrega sin falta



