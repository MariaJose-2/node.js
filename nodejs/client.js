function generarTablaSupermercado() {
    const tbody = document.getElementById("tbody-supermercado");

    fetch("http://localhost:3030/api/supermercado")
    .then(response => response.json ())
    .then(supermercado => {
        supermercado.forEach(function (supermercado) {
            const fila = tbody.insertRow();
            const celdaId = fila.insertCell();
            const celdaNombre = fila.insertCell();
            const celdaMarca = fila.insertCell();
            const celdaPrecio = fila.insertCell();
            const celdaCantidad = fila.insertCell();

            celdaId.textContent = supermercado.id;
            celdaNombre.textContent = supermercado.nombre;
            celdaMarca.textContent = supermercado.marca;
            celdaPrecio.textContent = supermercado.precio;
            celdaCantidad.textContent = supermercado.cantidad;
        });
    });
}

generarTablaSupermercado();