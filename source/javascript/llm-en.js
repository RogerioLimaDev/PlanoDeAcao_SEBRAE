var pontosFortes = document.getElementById("pontos-fortes");
var pontosFracos = document.getElementById("pontos-fracos");
var oportunidades = document.getElementById("oportunidades");
var ameacas = document.getElementById("ameacas");
var segmento = document.getElementById("segmento");

function gerarEstrategia() {
  // Disable button and change text
  const botao = document.getElementById("botaoGerarPlano");
  botao.disabled = true;
  botao.textContent = "Generating action plan...";
  botao.style.cursor = "not-allowed";
  botao.style.opacity = "0.6";

  var prompt =
    "<Considering the market for the business segment >" +
    segmento.value +
    "<. A company with the following strengths >" +
    pontosFortes.value +
    "< ,weaknesses >" +
    pontosFracos.value +
    "< seeing as opportunities >" +
    oportunidades.value +
    "< and threats >" +
    ameacas.value +
    "< Write an action strategy for this company in JSON format with the following fields: what_to_do, where_to_do, when_to_do, who_to_do_with, how_to_do, how_long_to_do>";

  fetch("/api/gerar-estrategia-en", {
    // Call backend
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ prompt: prompt }),
  })
    .then((response) => response.json())
    .then((data) => {
      if (data && data.choices && data.choices.length > 0) {
        console.log(data.choices[0].message.content);
        const jsonData = JSON.parse(data.choices[0].message.content);
        atualizarPaginaComJSON(jsonData);
      } else {
        console.error("Invalid API response:", data.error || data);
        alert("Error generating action plan. Please try again.");
      }
      reabilitarBotao();
    })
    .catch((error) => {
      console.error("Error making request:", error);
      alert("Error connecting to API. Please try again.");
      reabilitarBotao();
    });

  function atualizarPaginaComJSON(dados) {
    document.getElementById("oque-fazer").textContent = dados.what_to_do || dados.oque_fazer;
    document.getElementById("onde-fazer").textContent = dados.where_to_do || dados.onde_fazer;
    document.getElementById("quando-fazer").textContent = dados.when_to_do || dados.quando_fazer;
    document.getElementById("com-quem-fazer").textContent = dados.who_to_do_with || dados.com_quem_fazer;
    document.getElementById("como-fazer").textContent = dados.how_to_do || dados.como_fazer;
    document.getElementById("por-quanto-tempo-fazer").textContent = dados.how_long_to_do || dados.por_quanto_tempo_fazer;
    abrirModal();
  }
}

function abrirModal() {
  const modal = document.getElementById("modalPlanoDeAcao");
  modal.style.display = "block";
}

function fecharModal() {
  const modal = document.getElementById("modalPlanoDeAcao");
  modal.style.display = "none";
}

function reabilitarBotao() {
  const botao = document.getElementById("botaoGerarPlano");
  botao.disabled = false;
  botao.textContent = "Click to generate an action plan";
  botao.style.cursor = "pointer";
  botao.style.opacity = "1";
}

window.onclick = function (event) {
  const modal = document.getElementById("modalPlanoDeAcao");
  if (event.target == modal) {
    fecharModal();
  }
};