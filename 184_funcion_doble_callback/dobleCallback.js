function doble(y) {
    return 2*y;
}

function escribir(x, accion) {
    console.log(accion(x));
}

function dobleCallback() {
    escribir(12, doble);
}

function dobleCallbackAnonima() {
    escribir(12, function(y) {
        return 2*y;
    })
}

function dobleCallbackFlecha() {
    escribir(12, (y => 2*y));
}

window.onload = function() {
    document.getElementById("dobleCallback").addEventListener("click", dobleCallback);
    document.getElementById("dobleCallbackAnonima").addEventListener("click", dobleCallbackAnonima);
    document.getElementById("dobleCallbackFlecha").addEventListener("click", dobleCallbackFlecha);
}