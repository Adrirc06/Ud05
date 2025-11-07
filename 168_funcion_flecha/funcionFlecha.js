function funcionFlecha() {
    const triple = x => 3*x; 
    /* Es lo mismo que 
    function (x) {
        return 3*x;
    } */
    console.log(triple(20));
    
    // Funcion flecha con dos parametros

    const media = (x, y) => (x + y) / 2;

    console.log(media(10, 20));
    
    // Funcion flecha con declaracion de varias filas

    const sumatorio = n =>{
        let acu = 0;
        for (let i = n; i > 0; i--) {
            acu += i;
        }
        return acu;
    }

    console.log("El sumatorio es " + sumatorio(3));

    const saludoDos = () => {
        console.log("Adios sin parametros");
    }

    saludoDos();
    
}

window.onload = function() {
    funcionFlecha();
}