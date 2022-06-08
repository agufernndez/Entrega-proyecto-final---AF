
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
    // OPERADOR TERNARIO
    (!isNaN(campoNyA.value))?campoNyA.style.color="red":campoNyA.style.color="black";

    // if (!isNaN(campoNyA.value))
    // campoNyA.style.color="red";
    // else{
    //     campoNyA.style.color="black";
    // }
}

// INPUT (si cuando esta escribiendo en celular ingresa letras =que se ponga en ROJO)
let campoCel = document.getElementById("exampleFormControlInput2");
campoCel.oninput=()=>{
    // OPERADOR TERNARIO
    (isNaN(campoCel.value))?campoCel.style.color="red":campoCel.style.color="black";

    // if(isNaN(campoCel.value))
    // campoCel.style.color="red";
    // else{
    //     campoCel.style.color="black"
    // }
}

// CHANGE. Cuando se registre el ingreso de un dato que aparezca por consola lo ingresado
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

// SWEET ALERT EN BOTON "ENVIAR" DEL FORMULARIO CONSULTAS
let boton=document.getElementById("boton");
boton.onclick=()=>{
    swal({
        title: "Tu consulta fue enviada!",
        text: "Gracias por contactarnos.",
        icon: "success",

    });
}




