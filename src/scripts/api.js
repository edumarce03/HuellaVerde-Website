const apiKey = "uQEMI25aOcEdwTXWLqyA"; // Reemplaza con tu clave de API
const apiUrl = "https://www.carboninterface.com/api/v1/estimates";

// Función para realizar la solicitud a la API
async function fetchCarbonData(requestBody) {
  try {
    const response = await fetch(apiUrl, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
    }

    const data = await response.json();
    return data.data.attributes.carbon_kg;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
}

// Funcionalidad de los tabs
document.querySelectorAll("[data-tab]").forEach((tab) => {
  tab.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = tab.getAttribute("data-tab");
    document.querySelectorAll(".tab-pane").forEach((pane) => {
      pane.classList.add("hidden");
    });
    document.getElementById(targetId).classList.remove("hidden");

    // Actualizar estilos de los tabs
    document.querySelectorAll("[data-tab]").forEach((t) => {
      t.classList.remove("border-[#31572C]", "border-b-2");
    });
    tab.classList.add("border-[#31572C]", "border-b-2");
  });
});

// Mostrar el primer tab por defecto
document.querySelector("[data-tab]").click();

// Función para generar recomendaciones basadas en el resultado
function getRecommendation(result, type) {
  if (type === "transport") {
    if (result < 10) {
      return "¡Buen trabajo! Tu huella de carbono es baja. Considera usar más el transporte público o la bicicleta para reducirla aún más.";
    } else if (result < 50) {
      return "Tu huella de carbono es moderada. Intenta compartir el coche o utilizar vehículos más eficientes en combustible para reducir tus emisiones.";
    } else {
      return "Tu huella de carbono es alta. Considera alternativas como el tren o reducir los viajes largos en coche cuando sea posible.";
    }
  } else if (type === "electricity") {
    if (result < 100) {
      return "¡Excelente! Tu consumo eléctrico es eficiente. Sigue utilizando electrodomésticos de bajo consumo y apaga los dispositivos cuando no los uses.";
    } else if (result < 500) {
      return "Tu consumo eléctrico es moderado. Considera cambiar a bombillas LED y mejorar el aislamiento de tu hogar para reducir el consumo.";
    } else {
      return "Tu consumo eléctrico es alto. Evalúa la posibilidad de instalar paneles solares o contratar un proveedor de energía verde.";
    }
  } else if (type === "flight") {
    if (result < 500) {
      return "Tu vuelo tiene un impacto relativamente bajo. Para futuros viajes, considera opciones de transporte terrestre cuando sea posible.";
    } else if (result < 1000) {
      return "El impacto de tu vuelo es considerable. Piensa en combinar viajes o utilizar videoconferencias para reuniones cuando sea factible.";
    } else {
      return "Tu vuelo tiene un alto impacto en emisiones. Considera compensar tus emisiones de carbono a través de proyectos de reforestación o energía renovable.";
    }
  }
}

// Función para mostrar el resultado y la recomendación
function displayResult(result, elementId, type) {
  const resultElement = document.getElementById(elementId);
  const recommendation = getRecommendation(result, type);
  resultElement.innerHTML = `
    <p>Huella de carbono: ${result.toFixed(2)} kg CO2</p>
    <p class="mt-2 text-sm text-gray-600"><strong>Recomendación:</strong> ${recommendation}</p>
  `;
}

// Manejador para el formulario de transporte
document
  .getElementById("transport-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const distance = document.getElementById("transport-distance").value;
    const transport = document.getElementById("transport-type").value;

    const transportTypes = {
      car: "vehicle",
      bus: "vehicle",
      train: "flight",
      plane: "flight",
    };

    const requestBody = {
      type: transportTypes[transport],
      distance_unit: "km",
      distance_value: parseFloat(distance),
    };

    if (transport === "car" || transport === "bus") {
      requestBody.vehicle_model_id = "7268a9b7-17e8-4c8d-acca-57059252afe9";
    }

    if (transport === "plane" || transport === "train") {
      requestBody.passengers = 1;
      requestBody.legs = [
        { departure_airport: "SFO", destination_airport: "LAX" },
      ];
    }

    try {
      const result = await fetchCarbonData(requestBody);
      displayResult(result, "transport-result", "transport");
    } catch (error) {
      document.getElementById(
        "transport-result"
      ).innerText = `Error: ${error.message}`;
    }
  });

// Manejador para el formulario de electricidad
document
  .getElementById("electricity-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const amount = document.getElementById("electricity-amount").value;
    const country = document.getElementById("electricity-country").value;
    const state = document.getElementById("electricity-state").value;

    const requestBody = {
      type: "electricity",
      electricity_unit: "kwh",
      electricity_value: parseFloat(amount),
      country: country.toLowerCase(),
      state: state.toLowerCase(),
    };

    try {
      const result = await fetchCarbonData(requestBody);
      displayResult(result, "electricity-result", "electricity");
    } catch (error) {
      document.getElementById(
        "electricity-result"
      ).innerText = `Error: ${error.message}`;
    }
  });

// Manejador para el formulario de vuelos
document
  .getElementById("flight-form")
  .addEventListener("submit", async function (e) {
    e.preventDefault();
    const passengers = document.getElementById("flight-passengers").value;
    const departure = document.getElementById("flight-departure").value;
    const arrival = document.getElementById("flight-arrival").value;

    const requestBody = {
      type: "flight",
      passengers: parseInt(passengers),
      legs: [
        {
          departure_airport: departure.toUpperCase(),
          destination_airport: arrival.toUpperCase(),
        },
      ],
    };

    try {
      const result = await fetchCarbonData(requestBody);
      displayResult(result, "flight-result", "flight");
    } catch (error) {
      document.getElementById(
        "flight-result"
      ).innerText = `Error: ${error.message}`;
    }
  });
