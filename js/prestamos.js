// Cargar los préstamos desde el localStorage
let prestamos = JSON.parse(localStorage.getItem("prestamos")) || [];

// Llena las opciones de los selectores de cliente y cobrador
function llenarOpciones() {
  const selectCobrador = document.getElementById("cobrador");
  const selectCliente = document.getElementById("cliente");

  clientes.forEach((cliente) => {
    const option = document.createElement("option");
    option.textContent = `${cliente.nombre} ${cliente.apellido}`;
    option.value = `${cliente.nombre} ${cliente.apellido}`;
    selectCliente.appendChild(option);
  });

  cobradores.forEach((cobrador) => {
    const option = document.createElement("option");
    option.textContent = `${cobrador.nombre} ${cobrador.apellido}`;
    option.value = `${cobrador.nombre} ${cobrador.apellido}`;
    selectCobrador.appendChild(option);
  });
}

// Maneja el envío del formulario de préstamo
function realizarPrestamo() {
  const form = document.getElementById("formRealizarPrestamo");
  const cobrador = form.cobrador.value;
  const cliente = form.cliente.value;
  const monto = parseFloat(form.monto.value);
  const tasaInteres = parseFloat(form.tasaInteres.value);
  const plazo = parseInt(form.plazo.value);
  const proposito = form.proposito.value;

  const nuevoPrestamo = {
    cobrador,
    cliente,
    monto,
    tasaInteres,
    plazo,
    proposito,
    fechaCreacion: new Date(),
  };

  // Añade el nuevo préstamo al array
  prestamos.push(nuevoPrestamo);

  // Guardar los préstamos en el localStorage
  localStorage.setItem("prestamos", JSON.stringify(prestamos));

  alert("Préstamo guardado con éxito");
  location.href = "../index.html";
}

document
  .getElementById("btnVolverIndex")
  .addEventListener("click", function () {
    location.href = "../index.html";
  });

// Asigna el evento de envío al formulario y llena las opciones de los selectores
document
  .getElementById("formRealizarPrestamo")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    realizarPrestamo();
  });
llenarOpciones();
