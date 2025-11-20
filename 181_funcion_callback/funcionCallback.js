function llamarLog() {
    let mensaje = "Hola";
    escribe(mensaje, console.log);
}

function llamarAlert() {
    let mensaje = "Hola";
    escribe(mensaje, alert);
}

function llamarError() {
    let mensaje = "Hola";
    escribe(mensaje, console.error);
}

function escribe(dato, funcion) { 
    funcion(dato);
}


window.onload = function() {
    document.getElementById("llamarLog").addEventListener("click", llamarLog);
    document.getElementById("llamarError").addEventListener("click", llamarError);
    document.getElementById("llamarAlert").addEventListener("click", llamarAlert);
}