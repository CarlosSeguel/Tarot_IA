function calcularTotal() {
    const precio = 1500; // Precio por pregunta
    let cantidad = document.getElementById("cantidad").value; // Número de preguntas
    let estilo = document.getElementById("estilo").value; // Tipo de pregunta
    let color = document.getElementById("color-select").value; // Color
    let colorElement = document.getElementById("color-circle"); // Elemento de color

    // Calcula el total
    let total = precio * cantidad;

    // Actualiza el total en la página
    document.getElementById("total").innerText = "$" + total;

    // Mapeo de valores para el tipo de pregunta seleccionada
    let tipoPreguntaMap = {
        "1": "Preguntas del futuro",
        "2": "Preguntas del presente",
        "3": "Preguntas del pasado"
    };

    // Actualiza el tipo de pregunta seleccionada
    document.getElementById("tipoPregunta").innerText = tipoPreguntaMap[estilo] || "N/A";

    // Mapeo de valores para el color seleccionado
    let colorMap = {
        "blue": "blue",
        "green": "green",
        "red": "red",
        "purple": "purple",
        "black": "black",
        "white": "white",
        "yellow": "yellow"
    };

    // Actualiza el color seleccionado
    colorElement.style.backgroundColor = colorMap[color];

    // Actualiza la cantidad seleccionada
    document.getElementById("cantidadSeleccionada").innerText = cantidad;
}
