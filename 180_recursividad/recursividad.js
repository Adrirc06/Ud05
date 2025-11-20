function factorial(n) {
    if (n <= 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

function factorialItearivo(n) {
    let res = 1;
    while (n>1) {
        res *= n;
        n--;
    }
    return res;
}

function llamarFactorial() {
    console.log("Valor: "+ factorial(5));
    console.log("-- Recursivo --");    
    console.log("Valor: "+ factorialItearivo(5));
    console.log("-- Iterativo --");
    
    
}

window.onload = function() {
    document.getElementById("factorial").addEventListener("click", llamarFactorial);
    document.getElementById("factorialIterativo").addEventListener("click", factorialItearivo);
}