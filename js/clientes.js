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

document.getElementById("btnirMenu").addEventListener("click", function () {
  location.href = "../index.html";
});
// Función para mostrar los clientes en la tabla
function mostrarClientes() {
  const tbody = document
    .getElementById("tablaClientes")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  clientes.forEach((cliente, index) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = cliente.nombre;
    row.insertCell().textContent = cliente.apellido;
    row.insertCell().textContent = cliente.telefono;
    row.insertCell().textContent = cliente.correo;
    row.insertCell().textContent = cliente.direccion;
    row.insertCell().textContent = cliente.fechaCreacion
      .toISOString()
      .split("T")[0];

    // Celda de acciones
    const cell = row.insertCell();
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar"); // Añadir la clase 'editar'
    btnEditar.addEventListener("click", () => editarCliente(index));
    cell.appendChild(btnEditar);

    const btnEliminar = document.createElement("button");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.classList.add("eliminar"); // Añadir la clase 'eliminar'
    btnEliminar.addEventListener("click", () => eliminarCliente(index));
    cell.appendChild(btnEliminar);
  });
}

// Función para agregar un nuevo cliente
function agregarCliente() {
  const form = document.getElementById("formAgregarCliente");
  const nombre = form.nombre.value;
  const apellido = form.apellido.value;
  const telefono = form.telefono.value;
  const correo = form.correo.value;
  const direccion = form.direccion.value;

  const nuevoCliente = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion: new Date(),
  };

  clientes.push(nuevoCliente);
  mostrarClientes();
  Swal.fire({
    title: "Cliente Creado",
    icon: "success",
  });
  cerrarModal();
}

// Función para editar un cliente
function editarCliente(index) {
  const cliente = clientes[index];
  document.getElementById("nombreEditar").value = cliente.nombre;
  document.getElementById("apellidoEditar").value = cliente.apellido;
  document.getElementById("telefonoEditar").value = cliente.telefono;
  document.getElementById("correoEditar").value = cliente.correo;
  document.getElementById("direccionEditar").value = cliente.direccion;

  // Guardar el índice del cliente que se está editando
  document.getElementById("formEditarCliente").dataset.index = index;

  // Mostrar el modal de edición
  document.getElementById("modalEditarCliente").style.display = "block";
}

// Función para guardar los cambios al editar un cliente
function guardarCambios() {
  const form = document.getElementById("formEditarCliente");
  const index = form.dataset.index;
  const nombre = form.nombre.value;
  const apellido = form.apellido.value;
  const telefono = form.telefono.value;
  const correo = form.correo.value;
  const direccion = form.direccion.value;

  clientes[index] = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion: new Date(),
  };

  mostrarClientes();
  Swal.fire({
    title: "Cliente Modificado",
    icon: "success",
  });
  cerrarModal();
}

// Función para eliminar un cliente
function eliminarCliente(index) {
  Swal.fire({
    title: "¿Estás seguro de que quieres eliminar este cliente?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      clientes.splice(index, 1);
      mostrarClientes();
      Swal.fire("Eliminado", "El cliente ha sido eliminado.", "success");
    }
  });
}

// Función para cerrar cualquier modal
function cerrarModal() {
  const modals = document.getElementsByClassName("modal");
  for (const modal of modals) {
    modal.style.display = "none";
  }
}

// Asignar eventos
document.getElementById("btnAgregarCliente").addEventListener("click", () => {
  document.getElementById("modalAgregarCliente").style.display = "block";
});
document
  .getElementById("formAgregarCliente")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    agregarCliente();
  });
document.getElementById("formEditarCliente").addEventListener("submit", (e) => {
  e.preventDefault();

  guardarCambios();
});

// Mostrar los clientes iniciales
mostrarClientes();
