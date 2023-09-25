// iniciar Secccion

var usuarios = [
  {
    nombreUsuario: "juan",
    contrasena: "Juan125",
    correoElectronico: "Juan125@.com",
  },
  {
    nombreUsuario: "tiven0125",
    contrasena: "Pluton0125",
    correoElectronico: "tiven@.com",
  },
  {
    nombreUsuario: "ryan",
    contrasena: "105495",
    correoElectronico: "ryan@.com",
  },
];

//? funciones

// intetos Ingresar

function validarUsuarios() {
  let usuarioEncontrado = false;

  let intentos = 1;
  while (intentos <= 3) {
    let inpcorreoElectronico = prompt("Ingrese el correo electronico");
    let inpcontrasena = prompt("Ingrese la Contraseña");

    for (let i = 0; i < usuarios.length; i++) {
      if (
        inpcontrasena == usuarios[i].contrasena &&
        inpcorreoElectronico == usuarios[i].correoElectronico
      ) {
        alert("Bienvenido " + usuarios[i].nombreUsuario);
        calcularPrestamo();
        usuarioEncontrado = true;
        break;
      }
    }
    if (!usuarioEncontrado) {
      alert("Credenciales incorrectas. Intento" + intentos);
    } else {
      break;
    }
    intentos++;
  }
}

validarUsuarios();

function calcularPrestamo() {
  // Solicitar al usuario el monto del préstamo, tasa de interés diaria y días de préstamo
  const montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
  const tasaInteresDiaria = parseFloat(
    prompt("Ingrese la tasa de interés diaria (%):")
  );
  const diasPrestamo = parseInt(
    prompt("Ingrese la cantidad de días del préstamo:")
  );

  // Calcular el monto total a pagar
  let montoTotal = montoPrestamo;
  for (let dia = 1; dia <= diasPrestamo; dia++) {
    const interesDiario = (montoTotal * tasaInteresDiaria) / 100;
    montoTotal += interesDiario;
    console.log(montoTotal);
  }

  // Mostrar el monto total a pagar al final de los días especificados
  alert(
    `El monto total a pagar al final de ${diasPrestamo} días es: $${montoTotal.toFixed()}`
  );
}
