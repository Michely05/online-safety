document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM completamente cargado");

  const events = [
    {
      date: "10",
      month: "DIC",
      type: "Workshop",
      title: "Seguridad en Redes Wifi",
      location: "Aula 1",
      time: "9:00 - 12:30",
      status: "LIBRE",
    },
    {
      date: "10",
      month: "DIC",
      type: "Workshop",
      title: "Prevención de Ataques de Phishing",
      location: "Aula 2",
      time: "10:00 - 13:00",
      status: "LIBRE",
    },
    {
      date: "11",
      month: "DIC",
      type: "Conferencia",
      title: "Ciberseguridad en el Sector Financiero",
      location: "Auditorio",
      time: "10:00 - 12:00",
      status: "LLENO",
    },
    {
      date: "11",
      month: "DIC",
      type: "Workshop",
      title: "Investigación de Malware Avanzado",
      location: "Aula 5",
      time: "16:00 - 17:30",
      status: "LIBRE",
    },
    {
      date: "12",
      month: "DIC",
      type: "Conferencia",
      title: "Seguridad en Aplicaciones Web",
      location: "Auditorio",
      time: "9:30 - 11:30",
      status: "LIBRE",
    },
    {
      date: "12",
      month: "DIC",
      type: "Workshop",
      title: "Simulación de Ataques Red Team vs Blue Team",
      location: "Aula 1",
      time: "8:30 - 11:30",
      status: "LLENO",
    },
  ];

  const eventContainer = document.getElementById("event-container");

  function generateEventCards(events) {
    events.forEach((event) => {
      const statusClass = event.status === "LIBRE" ? "bg-success" : "bg-danger";
      const cardHTML = `
                <div class="col-12 mb-3">
                    <div class="card shadow-lg">
                        <div class="row g-0">
                            <div class="col-2 bg-warning text-center text-white d-flex flex-column justify-content-center">
                                <h5 class="mb-0">${event.month}</h5>
                                <h2 class="mb-0">${event.date}</h2>
                            </div>
                            <div class="col-8 bg-light p-3">
                                <h6 class="text-uppercase fw-bold">${event.type}</h6>
                                <p class="mb-1">${event.title}</p>
                                <p class="mb-0 text-muted">
                                    <i class="bi bi-geo-alt"></i> ${event.location} &middot; ${event.time}
                                </p>
                            </div>
                            <div class="col-2 d-flex align-items-center justify-content-center ${statusClass} text-white">
                                <span class="fw-bold">${event.status}</span>
                            </div>
                        </div>
                    </div>
                </div>`;
      eventContainer.insertAdjacentHTML("beforeend", cardHTML);
    });
  }

  // Llamamos a la función para generar las tarjetas
  generateEventCards(events);
});
