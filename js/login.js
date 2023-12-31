// Crear un arreglo de usuarios
const usuarios = [
  {
    nombreUsuario: "juan",
    contrasena: "Juan125",
    correoElectronico: "Juan125@.com",
    rol: "administrador",
  },
  {
    nombreUsuario: "tiven0125",
    contrasena: "Pluton0125",
    correoElectronico: "tiven@.com",
    rol: "cobrador",
  },
  {
    nombreUsuario: "ryan",
    contrasena: "105495",
    correoElectronico: "ryan@.com",
    rol: "cobrador",
  },
];

const formulario = document.getElementById("formulario");

//? Eventos
formulario.addEventListener("submit", validarUsuarios);
//? funciones

// Validar Usuario
function validarUsuarios(e) {
  e.preventDefault();

  let usuarioEncontrado = false;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const rol = document.getElementById("rol").value;

  for (let i = 0; i < usuarios.length; i++) {
    if (
      password == usuarios[i].contrasena &&
      email == usuarios[i].correoElectronico &&
      rol == usuarios[i].rol
    ) {
      Swal.fire({
        title: "Bienvenido " + usuarios[i].nombreUsuario,
        icon: "success",
      });
      // alert("Bienvenido " + usuarios[i].nombreUsuario);
      usuarioEncontrado = true;

      setTimeout(function () {
        if (usuarios[i].rol == "administrador") {
          location.href = "../index.html";
        } else {
          location.href = "../page/vistaCobradores.html";
        }
      }, 2000);

      break;
    }
  }
  if (!usuarioEncontrado) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Credenciales incorrectas. Vuelta a intentar ",
    });
    formulario.reset();
  }
}
