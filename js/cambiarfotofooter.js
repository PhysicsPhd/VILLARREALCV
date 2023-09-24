/*
Esta función de JavaScript sirve para cambiar la foto del foter con los botones "Siguiente" y "Atrás".
*/

const images=[
    {srctext:"imagenes/imagen1.jpg", alttext:"Foto de los integrantes de la Escuela José Antonio Balseiro 2023."}, 
    {srctext:"imagenes/imagen2.jpg", alttext:"Foto de Julián Villarreal en el Instituto Balseiro."}, 
    {srctext:"imagenes/imagen3.jpg", alttext:"Foto de Julián Villarreal en el Centro Atómico Bariloche."}
];

let contador=1;

function fotosig(){
    console.log("Click sobre botón siguiente");
    if (contador>1) {
        contador=-1;
    }
    contador=contador+1;
    document.getElementById("footerfoto").src=images[contador].srctext;
    document.getElementById("footerfoto").alt=images[contador].alttext;
}

function fotoant(){
    console.log("Click sobre botón siguiente");
    if (contador<1) {
        contador=3;
    }
    contador=contador-1;
    document.getElementById("footerfoto").src=images[contador].srctext;
    document.getElementById("footerfoto").alt=images[contador].alttext;
}