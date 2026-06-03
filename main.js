const buttons = document.querySelectorAll(".btn");

const daily = document.getElementById("daily");
const weekly = document.getElementById("weekly");
const monthly = document.getElementById("monthly");

let dados;

// deixa Daily ativo quando a página carregar
buttons[0].classList.add("active");

// carrega o JSON
fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    dados = data;
    atualizarDashboard("daily");
  });

// função para ativar botão
function ativarBotao(botaoClicado) {
  buttons.forEach((btn) => {
    btn.classList.remove("active");
  });

  botaoClicado.classList.add("active");
}

// eventos dos botões
daily.addEventListener("click", () => {
  ativarBotao(daily);
  atualizarDashboard("daily");
});

weekly.addEventListener("click", () => {
  ativarBotao(weekly);
  atualizarDashboard("weekly");
});

monthly.addEventListener("click", () => {
  ativarBotao(monthly);
  atualizarDashboard("monthly");
});

// atualiza os cards
function atualizarDashboard(periodo) {
  const periodoTexto = {
    daily: "Last Day",
    weekly: "Last Week",
    monthly: "Last Month",
  };

  document.querySelector(".work-hours").textContent =
    dados[0].timeframes[periodo].current + "hrs";
  document.querySelector(".work-period").textContent =
    periodoTexto[periodo] + " - " + dados[0].timeframes[periodo].previous + "hrs";

  document.querySelector(".play-hours").textContent =
    dados[1].timeframes[periodo].current + "hrs";
  document.querySelector(".play-period").textContent =
    periodoTexto[periodo] + " - " + dados[1].timeframes[periodo].previous + "hrs";

  document.querySelector(".study-hours").textContent =
    dados[2].timeframes[periodo].current + "hrs";
  document.querySelector(".study-period").textContent =
    periodoTexto[periodo] + " - " + dados[2].timeframes[periodo].previous + "hrs";

  document.querySelector(".exercise-hours").textContent =
    dados[3].timeframes[periodo].current + "hrs";
  document.querySelector(".exercise-period").textContent =
    periodoTexto[periodo] + " - " + dados[3].timeframes[periodo].previous + "hrs";

  document.querySelector(".social-hours").textContent =
    dados[4].timeframes[periodo].current + "hrs";
  document.querySelector(".social-period").textContent =
    periodoTexto[periodo] + " - " + dados[4].timeframes[periodo].previous + "hrs";

  document.querySelector(".self-care-hours").textContent =
    dados[5].timeframes[periodo].current + "hrs";
  document.querySelector(".self-care-period").textContent =
    periodoTexto[periodo] + " - " + dados[5].timeframes[periodo].previous + "hrs";
}