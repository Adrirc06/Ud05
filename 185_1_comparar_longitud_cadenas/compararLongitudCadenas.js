function ordenPersonal(a, b) {
    return a.length - b.length;
}

function compararLongitud() {
    let cadena1 = prompt("Introduce cadena uno: ");
    let cadena2 = prompt("Introduce cadena dos: ");

    let resultado = ordenPersonal(cadena1, cadena2);

    if (resultado == 0) {
        alert("Son iguales --> "+ resultado)
    } else if (resultado > 0) {
        alert("cadena1 es mayor --> "+ resultado)
    } else {
        alert("cadena2 es mayor --> "+ resultado)
    }
}

window.onload = function() {
    document.getElementById("compararLongitud").addEventListener("click", compararLongitud);
}