function calcularTotal() {
    var precio = 1500; // Precio por pregunta
    var cantidad = document.getElementById("cantidad").value; // Número de preguntas
    var estilo = document.getElementById("estilo").value; // Tipo de pregunta

    // Calcula el total
    var total = precio * cantidad;

    // Actualiza el total en la página
    document.getElementById("total").innerText = "$" + total;

    // Actualiza el tipo de pregunta seleccionada
    switch(estilo) {
        case "1":
            document.getElementById("tipoPregunta").innerText = "Preguntas del futuro";
            break;
        case "2":
            document.getElementById("tipoPregunta").innerText = "Preguntas del presente";
            break;
        case "3":
            document.getElementById("tipoPregunta").innerText = "Preguntas del pasado";
            break;
        default:
            document.getElementById("tipoPregunta").innerText = "N/A";
    }

    // Actualiza la cantidad seleccionada
    document.getElementById("cantidadSeleccionada").innerText = cantidad;
}
