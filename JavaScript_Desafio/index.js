// Cria variável para contagem de simulações do usuário
let contador = 0;
let temporizador;
let lista = document.getElementById('listaInteracoes');

document.getElementById('calcular').addEventListener('click', function() {

 // Captura os valores inseridos pelo usuário
 let valorTransacao = parseFloat(document.getElementById('valor-transacao').value);
 let complexidade = document.getElementById('complexidade').value;
 let conversao = document.getElementById('conversao').value; 

 // Cria variáveis necessárias
 let precoGas;
 let moeda;
 let simbolo;

 // Definição de preço do gas por complexidade
 switch (complexidade) {
  case 'baixa':
    precoGas = 0.01;
    break;
  case 'media':
    precoGas = 0.05;
    break;
  case 'alta':
    precoGas = 0.1;
    break;
 }

// Definição da moeda de visualização
switch(conversao) {
  case 'usd':
    moeda = "dólar";
    simbolo = "$";
    valor = 4.15;
    break;
  case 'eur':
    moeda = "euro";
    simbolo = "€";
    valor = 3.81;
    break;
  case 'brl':
    moeda = "real";
    simbolo = "R$";
    valor = 23.30;
    break;
  case 'jpy':
    moeda = "iene japonês";
    simbolo = "¥";
    valor = 619.83;
    break;
}

// Calcula o custo total do gas
 let custoGas = valorTransacao * precoGas;
 let custoGasConvertido = custoGas * valor;

// Adiciona interação ao histórico
function adicionaHistorico() {

  let li = document.createElement('li');
  li.innerHTML = `
    <p>Valor da Transação: ${valorTransacao} DOT</p>
    <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
    complexidade.slice(1)}</p>
    <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
    <p><strong>Valor em ${moeda + ": " + simbolo + custoGasConvertido.toFixed(2)}</strong></p>
  `
  lista.insertBefore(li, lista.firstChild);
}

// Exibe o resultado caso o valor da transação seja válido
 if (valorTransacao > 0) {

  // Conta uma nova simulação durante a sessão
  contador++;
  document.getElementById('contador').innerHTML = contador;

  document.getElementById('resultado').innerHTML = `
    <p>Valor da Transação: ${valorTransacao} DOT</p>
    <p>Complexidade: ${complexidade.charAt(0).toUpperCase() +
    complexidade.slice(1)}</p>
    <p><strong>Custo Estimado do Gas: ${custoGas.toFixed(2)} DOT</strong></p>
    <p><strong>Valor em ${moeda + ": " + simbolo + custoGasConvertido.toFixed(2)}</strong></p>
  `;

  adicionaHistorico();

 } else {
  document.getElementById('resultado').innerHTML = 
    '<p style="color:red;">Por favor, insira um valor de transação válido.</p>';
 }

// Reinicia o temporizador ativo
if (temporizador) {
  clearTimeout(temporizador)
}

// Inicia temporizador para limpar o histórico de simulação
temporizador = setTimeout(function() {
  document.getElementById('contador').innerText = "0";
  contador = 0;
  document.getElementById('resultado').innerHTML =
  '<p style="color:green;">Esperando nova simulação</p>';
}, 60000); 

});

document.getElementById('limparHistorico').addEventListener('click', function() {
  lista.innerHTML = '';
})