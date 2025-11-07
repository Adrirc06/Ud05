function saludo(texto = "Hola") {
    console.log(texto);
}

function argumentosPorDefecto() {
    saludo();
    saludo("Buenos días");

}

window.onload = function() {
    argumentosPorDefecto();
}