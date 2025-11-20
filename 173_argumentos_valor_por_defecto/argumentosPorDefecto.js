function saludo(texto = "Hola") {
    console.log(texto);
}

function argumentosPorDefecto() {
    saludo();
    saludo("Buenos días");

}

function media(...numeros) {
    let acu = 0; 
    for (let n of numeros) {
        acu += n;
    }

    return acu/numeros.length;
}

function calcularMedia() {
    console.log(media(10, 20));
    console.log(media(10, 20, 30));
    console.log(media(10, 20, 30, 40));
    console.log(media(10, 20, 30, 40, 50));
}

function f(x, y, ...mas) {
    console.log("x: "+ x +", y: "+ y +", mas: "+ mas);
}

function calcularFuncion() {
    f(10, 20)
    f(10, 20, 30)
    f(10, 20, 30, 40);
    
}

window.onload = function() {
    argumentosPorDefecto();
    document.getElementById("argumentosPorDefecto").addEventListener("click", argumentosPorDefecto);
    document.getElementById("calcularMedia").addEventListener("click", calcularMedia);
    document.getElementById("calcularFuncion").addEventListener("click", calcularFuncion);
}