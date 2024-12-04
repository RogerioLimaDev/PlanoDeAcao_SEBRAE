var pontosFortes = document.getElementById("pontos-fortes");
var pontosFracos = document.getElementById("pontos-fracos");
var oportunidades = document.getElementById("oportunidades");
var ameacas = document.getElementById("ameacas");
var segmento = document.getElementById("segmento");


function gerarEstrategia() {

var prompt = '<Considerando o mercado para o segmento de >' + segmento.value + 
'<. uma empresa com os seguintes pontos fortes >' + pontosFortes.value + '< ,os pontos fracos >'
+ pontosFracos.value + '<enxergando como oportunidades >' + oportunidades.value + '< e as ameaças >' + ameacas.value + 
'< Escreva uma estratégia de acão para essa empresa em formato JSON com os seguintes campos:oque_fazer, onde_fazer, quando_fazer, com_quem_fazer, como_fazer, por_quanto_tempo_fazer>';

var YOUR_API_KEY = ""

fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + YOUR_API_KEY // Adicione sua chave de API
    },
    body: JSON.stringify({
        "model": "gpt-3.5-turbo", // Use 'gpt-4' se desejar
        "messages": [
            { "role": "system", "content": "Você é um especialista em estratégias de negócio." }, // Mensagem inicial (opcional)
            { "role": "user", "content": prompt } // Substitua 'prompt' pelo conteúdo desejado
        ],
        "temperature": 0.5,
        "max_tokens": 300
    })
})
.then(response => response.json()) // Parse o JSON da resposta
.then(data => {
    if (data && data.choices && data.choices.length > 0) {
        console.log(data.choices[0].message.content);
        const jsonData = JSON.parse(data.choices[0].message.content); // Converte para JSON, se necessário
        atualizarPaginaComJSON(jsonData); 
    } else {
        console.error("Resposta inválida da API:", data.error || data);
    }
})
.catch(error => {
    console.error("Erro ao fazer a requisição:", error);
});

function atualizarPaginaComJSON(dados) {
    document.getElementById("oque-fazer").textContent = dados.oque_fazer;
    document.getElementById("onde-fazer").textContent = dados.onde_fazer;
    document.getElementById("quando-fazer").textContent = dados.quando_fazer;
    document.getElementById("com-quem-fazer").textContent = dados.com_quem_fazer;
    document.getElementById("como-fazer").textContent = dados.como_fazer;
    document.getElementById("por-quanto-tempo-fazer").textContent = dados.por_quanto_tempo_fazer;
}
}