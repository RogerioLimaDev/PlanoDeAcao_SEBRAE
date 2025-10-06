var pontosFortes = document.getElementById("pontos-fortes");
var pontosFracos = document.getElementById("pontos-fracos");
var oportunidades = document.getElementById("oportunidades");
var ameacas = document.getElementById("ameacas");
var segmento = document.getElementById("segmento");

function gerarEstrategia() {
  // Desabilita o botão e muda o texto
  const botao = document.getElementById("botaoGerarPlano");
  botao.disabled = true;
  botao.textContent = "Gerando plano de ação...";
  botao.style.cursor = "not-allowed";
  botao.style.opacity = "0.6";

  var prompt =
    "<Considerando o mercado para o segmento de >" +
    segmento.value +
    "<. uma empresa com os seguintes pontos fortes >" +
    pontosFortes.value +
    "< ,os pontos fracos >" +
    pontosFracos.value +
    "<enxergando como oportunidades >" +
    oportunidades.value +
    "< e as ameaças >" +
    ameacas.value +
    "< Escreva uma estratégia de acão para essa empresa em formato JSON com os seguintes campos:oque_fazer, onde_fazer, quando_fazer, com_quem_fazer, como_fazer, por_quanto_tempo_fazer>";

  fetch("/api/gerar-estrategia", {
    // Chama seu backend
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
        console.error("Resposta inválida da API:", data.error || data);
        alert("Erro ao gerar plano de ação. Tente novamente.");
      }
      reabilitarBotao();
    })
    .catch((error) => {
      console.error("Erro ao fazer a requisição:", error);
      alert("Erro ao conectar com a API. Tente novamente.");
      reabilitarBotao();
    });

  function atualizarPaginaComJSON(dados) {
    document.getElementById("oque-fazer").textContent = dados.oque_fazer;
    document.getElementById("onde-fazer").textContent = dados.onde_fazer;
    document.getElementById("quando-fazer").textContent = dados.quando_fazer;
    document.getElementById("com-quem-fazer").textContent =
      dados.com_quem_fazer;
    document.getElementById("como-fazer").textContent = dados.como_fazer;
    document.getElementById("por-quanto-tempo-fazer").textContent =
      dados.por_quanto_tempo_fazer;
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
  botao.textContent = "Clique para gerar um plano de ação";
  botao.style.cursor = "pointer";
  botao.style.opacity = "1";
}

window.onclick = function (event) {
  const modal = document.getElementById("modalPlanoDeAcao");
  if (event.target == modal) {
    fecharModal();
  }
};
