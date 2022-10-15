--Desafio do Curso realizado na 4linux  https://4linux.com.br/ :)
function criaMoeda(nome, sigla, valor) {
return {nome: nome, sigla: sigla, valor: valor};
}
let moedas = {
usd: criaMoeda('Dólar', 'USD', 5.2482194),
eur: criaMoeda('Euro', 'EUR', 5.252694),
gbp: criaMoeda('Libra', 'GBP', 6.0515173),
jpy: criaMoeda('Iene', 'JPY', 0.036508241),
ars: criaMoeda('Peso', 'ARS', 0.037272098)
};

let casa = {
taxa: 0.1
}

casa.proporVenda = function (moeda, quantidade) {
let valorAjustado = moeda.valor * (1 + this.taxa);
return quantidade * valorAjustado;
}
casa.proporCompra = function (moeda, quantidade) {
let valorAjustado = moeda.valor * (1 - this.taxa);
return quantidade * valorAjustado;
}

casa.proporTroca = function (moeda1, qtd1, moeda2, qtd2) {
let propostaCompra = this.proporCompra(moeda1, qtd1),
propostaVenda = this.proporVenda(moeda2, qtd2);
return propostaVenda - propostaCompra;
}

casa.criarTabela = function (moedas) {
let tabela = [];
for (let moeda in moedas) {
let linha = {};
linha['Moeda'] = moedas[moeda].nome + ' (' + moedas[moeda].sigla + ')';
linha['Valor de compra'] = this.proporCompra(moedas[moeda], 1);
linha['Valor de venda'] = this.proporVenda(moedas[moeda], 1);
tabela.push(linha);
}
return tabela;
}
