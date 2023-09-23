let contador=2;

document.getElementById("botonfotosig").addEventListener("click",fotosig);
document.getElementById("botonfotoant").addEventListener("click",fotoant);

function fotosig(){
    console.log("Click sobre botón siguiente");
    if (contador>2) {
        contador=0;
    }
    contador=contador+1;
    document.getElementById("footerfoto").src="imagen"+contador+".jpg";
    document.getElementById("footerfoto").alt="Foto de blabla"+contador;
}

function fotoant(){
    console.log("Click sobre botón siguiente");
    if (contador<2) {
        contador=4;
    }
    contador=contador-1;
    document.getElementById("footerfoto").src="imagen"+contador+".jpg";
    document.getElementById("footerfoto").alt="Foto de blabla"+contador;
}