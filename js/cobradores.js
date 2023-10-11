let cobradoress = [
  {
    nombre: "Juan",
    apellido: "Pérez",
    telefono: "1234567890",
    correo: "juan.perez@example.com",
    direccion: "Calle Falsa 123",
    fechaCreacion: new Date(),
  },
];

document.addEventListener("DOMContentLoaded", mostrarcobradoress);

function agregarcobradores(e) {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const apellido = document.getElementById("apellido").value;
  const telefono = document.getElementById("telefono").value;
  const correo = document.getElementById("correo").value;
  const direccion = document.getElementById("direccion").value;
  const fechaCreacion = new Date();

  const cobradores = {
    nombre,
    apellido,
    telefono,
    correo,
    direccion,
    fechaCreacion,
  };

  cobradoress.push(cobradores);

  mostrarcobradoress();

  document.getElementById("formulariocobradores").reset();
}

function mostrarcobradoress() {
  const cobradoressDiv = document.getElementById("cobradoress");
  cobradoressDiv.innerHTML = "";

  cobradoress.map((cobradores) => {
    const p = document.createElement("p");
    p.innerText = `Nombre: ${cobradores.nombre}, Apellido: ${cobradores.apellido}, Teléfono: ${cobradores.telefono}, Correo: ${cobradores.correo}, Dirección: ${cobradores.direccion}, Fecha de Creación: ${cobradores.fechaCreacion}`;
    cobradoressDiv.appendChild(p);
  });
}

const formulariocobradores = document.getElementById("formulariocobradores");
formulariocobradores.addEventListener("submit", agregarcobradores);
