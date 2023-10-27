// Función para mostrar los préstamos en la tabla
function mostrarPrestamos() {
  const tbody = document
    .getElementById("tablaPrestamos")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  const prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

  prestamos.forEach((prestamo, index) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = prestamo.cobrador;
    row.insertCell().textContent = prestamo.cliente;
    row.insertCell().textContent = prestamo.monto;
    row.insertCell().textContent = prestamo.tasaInteres;
    row.insertCell().textContent = prestamo.plazo;
    row.insertCell().textContent = prestamo.proposito;
    row.insertCell().textContent = prestamo.fechaCreacion.split("T")[0];
  });
}

// Función para volver al inicio
function volverAlInicio() {
  location.href = "/index.html";
}

// Asignar eventos
document
  .getElementById("btnVolverIndex")
  .addEventListener("click", volverAlInicio);

// Mostrar los préstamos al cargar la página
mostrarPrestamos();
