
// FOR OF CON EL NOMBRE DE LA ETIQUETA LABEL (mas corto) PARA OBTENER EL VALOR DE CADA LABEL.
let textosLabels = document.getElementsByTagName("label");
console.log(textosLabels);
for (const textoLabels of textosLabels) {
    console.log(textoLabels.innerHTML); /*con inner.HTML se ve el texto*/
    console.log(textoLabels); /*sin inner.HTML se ve con todo el contenido de html*/
}

// CONTENIDO EN HTML DE TODOS LOS INPUTS
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



