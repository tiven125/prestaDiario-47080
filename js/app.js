document.addEventListener("DOMContentLoaded", function () {
  const miDivPrestamos = document.getElementById("miDivPrestamos");
  miDivPrestamos.addEventListener("click", irPrestamo);
  const miDivClientes = document.getElementById("miDivClientes");
  miDivClientes.addEventListener("click", irClientes);

  const cobradores = document.getElementById("cobradores");
  cobradores.addEventListener("click", irCobradores);
});

function irClientes() {
  location.href = "../page/clientes.html";
}
function irCobradores() {
  location.href = "../page/cobradores.html";
}
function irPrestamo() {
  location.href = "../page/prestamo.html";
}

const Btnprestamo = document.getElementById("Btnprestamo");
Btnprestamo.addEventListener("click", calcularPrestamo);
// Calculos
function calcularPrestamo() {
  const montoPrestamo = parseFloat(document.getElementById("monto").value);
  const tasaInteresDiaria = parseFloat(document.getElementById("tasa").value);
  const diasPrestamo = parseInt(document.getElementById("dias").value);

  let montoTotal = montoPrestamo;
  for (let dia = 1; dia <= diasPrestamo; dia++) {
    const interesDiario = (montoTotal * tasaInteresDiaria) / 100;
    montoTotal += interesDiario;
    console.log(montoTotal);
  }

  document.getElementById(
    "resultado"
  ).innerText = `El monto total a pagar al final de ${diasPrestamo} días es: $${montoTotal.toFixed()}`;
}
