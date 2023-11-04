document.addEventListener("DOMContentLoaded", function () {
  const miDivPrestamos = document.getElementById("miDivPrestamos");
  miDivPrestamos.addEventListener("click", irPrestamo);

  const simuladorPrestamos = document.getElementById("simuladorPrestamos");
  simuladorPrestamos.addEventListener("click", irSimulador);

  const miDivClientes = document.getElementById("miDivClientes");
  miDivClientes.addEventListener("click", irClientes);

  const cobradores = document.getElementById("cobradores");
  cobradores.addEventListener("click", irCobradores);

  const informe = document.getElementById("informe");
  informe.addEventListener("click", irInforme);

  const divisa = document.getElementById("divisa");
  divisa.addEventListener("click", irDivisa);
});

function irClientes() {
  location.href = "../page/clientes.html";
}
function irCobradores() {
  location.href = "../page/cobradores.html";
}
function irPrestamo() {
  location.href = "../page/prestamos.html";
}
function irSimulador() {
  location.href = "../page/simulador.html";
}
function irInforme() {
  location.href = "../page/informes.html";
}

function irDivisa() {
  location.href = "../page/divisa.html";
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
