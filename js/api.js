async function fetchData() {
  try {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    const data = await response.json();
    console.log(data);
    displayData(data);
  } catch (error) {
    console.error("Ha ocurrido un error al obtener los datos: ", error);
  }
}

function displayData(data) {
  const currencyNames = {
    USD: "Dólar Estadounidense",
    EUR: "Euro",
    JPY: "Yen Japonés",
    GBP: "Libra Esterlina",
    AUD: "Dólar Australiano",
    CAD: "Dólar Canadiense",
    CHF: "Franco Suizo",
    CNY: "Yuan Chino",
    SEK: "Corona Sueca",
    NZD: "Dólar de Nueva Zelanda",
    HKD: "Dólar de Hong Kong",
    SGD: "Dólar de Singapur",
    MXN: "Peso Mexicano",
    RUB: "Rublo Ruso",
    ZAR: "Rand Sudafricano",
    KRW: "Won Surcoreano",
    SAR: "Rial Saudí",
    TRY: "Lira Turca",
    BRL: "Real Brasileño",
    INR: "Rupia India",
    COP: "Peso Colombiano",
  };

  const grid = document.getElementById("grid");
  for (const [currency, rate] of Object.entries(data.rates)) {
    if (currencyNames[currency]) {
      const item = document.createElement("div");
      item.className = "grid-item";
      item.innerHTML = `<strong>${currencyNames[currency]}:</strong> 1 Dólar Estadounidense (USD) equivale a ${rate} ${currency}`;
      grid.appendChild(item);
    }
  }
}

fetchData();

const volver = document
  .getElementById("volver")
  .addEventListener("click", function () {
    location.href = "/index.html";
  });
