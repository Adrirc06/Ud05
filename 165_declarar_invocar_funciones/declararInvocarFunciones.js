function saludo() {
    console.log("Hola");
}

function saludoConMensaje(mensaje) {
    console.log(mensaje);
}

function triple(n) {
    return 3*n;
}

function pares(array) {
    let nPares = 0;

    if (array instanceof Array) {
        for (n of array) {
            if (n%2 == 0) {
                nPares++;
            }
        }

        return nPares;
    }
}

function declararInvocarFunciones() {
    saludo();
    saludoConMensaje("Hola");
    let [x, y, z] = [6, 4, "Hola"];

    // Funcion triple

    console.log("Llamadas");
    console.log(triple(9)); // 27
    console.log(triple(x)); // 18
    console.log(triple(x + y)); // 30
    console.log(triple(triple(x) + triple(y))); // 30
    console.log(triple(triple(9))); // 81
    console.log(triple(z)); //NaN
    
    // Funcion pares

    console.log(pares([1, 2, 3, 4, 5, 6, 7, 8]));

    console.log(pares([triple(1), triple(2), triple(3)]));
    
}
window.onload = function() {
    document.getElementById("declararInvocarFunciones").addEventListener("click", declararInvocarFunciones);
}