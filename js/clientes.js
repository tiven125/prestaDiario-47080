let clientes = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "1234567890",
    correo: "juan.perez@example.com",
    direccion: "Calle Falsa 123",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Maria",
    apellido: "Gonzalez",
    telefono: "9876543210",
    correo: "maria.gonzalez@example.com",
    direccion: "Avenida Siempreviva 456",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Pedro",
    apellido: "Garcia",
    telefono: "1234123412",
    correo: "pedro.garcia@example.com",
    direccion: "Calle Principal 789",
    fechaCreacion: new Date(),
  },
];

document.addEventListener("DOMContentLoaded", mostrarClientes);

function agregarCliente(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const fechaCreacion = new Date();

  const cliente = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion,
  };

  clientes.push(cliente);

  mostrarClientes();

  document.getElementById("formularioCliente").reset();
}

function mostrarClientes() {
  const clientesDiv = document.getElementById("clientes");
  clientesDiv.innerHTML = "";

  clientes.map((cliente) => {
    const p = document.createElement("p");
    p.innerText = `Nombre: ${cliente.nombre}, Apellido: ${cliente.apellido}, Teléfono: ${cliente.telefono}, Correo: ${cliente.correo}, Dirección: ${cliente.direccion}, Fecha de Creación: ${cliente.fechaCreacion}`;
    clientesDiv.appendChild(p);
  });
}

const formularioCliente = document.getElementById("formularioCliente");
formularioCliente.addEventListener("submit", agregarCliente);
