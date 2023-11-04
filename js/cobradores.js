let cobradores = [
  {
    nombre: "Laura",
    apellido: "Gómez",
    telefono: "1234567890",
    correo: "laura.gomez@example.com",
    direccion: "Calle 10 #15-30, Bogotá, Colombia",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Carlos",
    apellido: "Ramírez",
    telefono: "9876543210",
    correo: "carlos.ramirez@example.com",
    direccion: "Carrera 20 #5-45, Medellín, Colombia",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Sofía",
    apellido: "Martínez",
    telefono: "1234123412",
    correo: "sofia.martinez@example.com",
    direccion: "Calle 15 #30-10, Cali, Colombia",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Daniel",
    apellido: "Fernández",
    telefono: "4567891230",
    correo: "daniel.fernandez@example.com",
    direccion: "Carrera 5 #45-15, Barranquilla, Colombia",
    fechaCreacion: new Date(),
  },
  {
    nombre: "Ana",
    apellido: "López",
    telefono: "7890123456",
    correo: "ana.lopez@example.com",
    direccion: "Calle 25 #12-45, Cartagena, Colombia",
    fechaCreacion: new Date(),
  },
];

document.getElementById("btnirMenu").addEventListener("click", function () {
  location.href = "../index.html";
});

// Función para mostrar los cobradores en la tabla
function mostrarCobradores() {
  const tbody = document
    .getElementById("tablaCobradores")
    .getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";

  cobradores.forEach((cobrador, index) => {
    const row = tbody.insertRow();
    row.insertCell().textContent = cobrador.nombre;
    row.insertCell().textContent = cobrador.apellido;
    row.insertCell().textContent = cobrador.telefono;
    row.insertCell().textContent = cobrador.correo;
    row.insertCell().textContent = cobrador.direccion;
    row.insertCell().textContent = cobrador.fechaCreacion
      .toISOString()
      .split("T")[0];

    // Celda de acciones
    const cell = row.insertCell();
    const btnEditar = document.createElement("button");
    btnEditar.textContent = "Editar";
    btnEditar.classList.add("editar");
    btnEditar.addEventListener("click", () => editarCobrador(index));
    cell.appendChild(btnEditar);

    const btnEliminar = document.createElement("button");
    btnEliminar.classList.add("eliminar");
    btnEliminar.textContent = "Eliminar";
    btnEliminar.addEventListener("click", () => eliminarCobrador(index));
    cell.appendChild(btnEliminar);
  });
}

// Función para agregar un nuevo cobrador
function agregarCobrador() {
  const form = document.getElementById("formAgregarCobrador");
  const nombre = form.nombre.value;
  const apellido = form.apellido.value;
  const telefono = form.telefono.value;
  const correo = form.correo.value;
  const direccion = form.direccion.value;

  const nuevoCobrador = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion: new Date(),
  };

  cobradores.push(nuevoCobrador);
  mostrarCobradores();
  Swal.fire({
    title: "Cobrador Creado",
    icon: "success",
  });
  cerrarModal();
}

// Función para editar un cobrador
function editarCobrador(index) {
  const cobrador = cobradores[index];
  document.getElementById("nombreEditar").value = cobrador.nombre;
  document.getElementById("apellidoEditar").value = cobrador.apellido;
  document.getElementById("telefonoEditar").value = cobrador.telefono;
  document.getElementById("correoEditar").value = cobrador.correo;
  document.getElementById("direccionEditar").value = cobrador.direccion;

  // Guardar el índice del cobrador que se está editando
  document.getElementById("formEditarCobrador").dataset.index = index;

  // Mostrar el modal de edición
  document.getElementById("modalEditarCobrador").style.display = "block";
}

// Función para guardar los cambios al editar un cobrador
function guardarCambios() {
  const form = document.getElementById("formEditarCobrador");
  const index = form.dataset.index;
  const nombre = form.nombre.value;
  const apellido = form.apellido.value;
  const telefono = form.telefono.value;
  const correo = form.correo.value;
  const direccion = form.direccion.value;

  cobradores[index] = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion: new Date(),
  };

  mostrarCobradores();
  Swal.fire({
    title: "Cobrador Modificado",
    icon: "success",
  });
  cerrarModal();
}

// Función para eliminar un cobrador
function eliminarCobrador(index) {
  Swal.fire({
    title: "¿Estás seguro de que quieres eliminar este cobrador?",
    text: "No podrás revertir esta acción",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      cobradores.splice(index, 1);
      mostrarCobradores();
      Swal.fire("Eliminado", "El cobrador ha sido eliminado.", "success");
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
document.getElementById("btnAgregarCobrador").addEventListener("click", () => {
  document.getElementById("modalAgregarCobrador").style.display = "block";
});
document
  .getElementById("formAgregarCobrador")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    agregarCobrador();
  });
document
  .getElementById("formEditarCobrador")
  .addEventListener("submit", (e) => {
    e.preventDefault();
    guardarCambios();
  });

// Mostrar los cobradores iniciales
mostrarCobradores();
