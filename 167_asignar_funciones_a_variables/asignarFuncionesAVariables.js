function asignarFuncionesAVariables() {
    const trip = function(x) {
        return 3*x;
    }

    console.log("Llamada a la funcion trip --> "+ trip(3));

    let x = trip;

    console.log("Llamada a la funcion x --> "+ x(3));
    

}

window.onload = function() {
    // document.getElementById("asignarFuncionesAVariables").addEventListener("click", asignarFuncionesAVariables);
    asignarFuncionesAVariables();
}