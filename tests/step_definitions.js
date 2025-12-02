const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');
const { ContaBancaria } = require('../src/ContaBancaria');
const { ServicoPix } = require('../src/ServicoPix');

// Não usamos mais variáveis globais (let minhaConta...), usamos 'this' do World

Given('que meu saldo atual é de R$ {moeda}', function (saldoInicial) {
    this.minhaConta = new ContaBancaria();
    this.minhaConta.depositar(saldoInicial);
});

Given('que existe um destinatário com a chave PIX {string}', function (chavePix) {
    ServicoPix.registrarChaveTeste(chavePix);
});

When('eu confirmo uma transferência de R$ {moeda} para a chave {string}', function (valor, chave) {
    this.resultadoTransferencia = ServicoPix.realizarTransferencia(this.minhaConta, chave, valor);
});

When('eu tento transferir R$ {moeda} para a chave {string}', function (valor, chave) {
    this.resultadoTransferencia = ServicoPix.realizarTransferencia(this.minhaConta, chave, valor);
});

Then('a transferência deve ser processada com sucesso', function () {
    expect(this.resultadoTransferencia.sucesso).to.be.true;
});

Then('meu saldo atualizado deve ser R$ {moeda}', function (saldoEsperado) {
    expect(this.minhaConta.obterSaldo()).to.equal(saldoEsperado);
});

Then('o extrato deve registrar uma saída de R$ {moeda}', function (valorDebitado) {
    const ultimoLancamento = this.minhaConta.obterUltimoLancamento();
    expect(ultimoLancamento.tipo).to.equal('DEBITO');
    expect(ultimoLancamento.valor).to.equal(valorDebitado);
});

Then('o sistema deve bloquear a transação', function () {
    expect(this.resultadoTransferencia.sucesso).to.be.false;
});

Then('deve exibir a mensagem de erro {string}', function (mensagemErro) {
    expect(this.resultadoTransferencia.erro).to.equal(mensagemErro);
});

Then('meu saldo deve permanecer R$ {moeda}', function (saldoEsperado) {
    expect(this.minhaConta.obterSaldo()).to.equal(saldoEsperado);
});

Then('o sistema deve notificar que a chave não foi encontrada', function () {
    expect(this.resultadoTransferencia.sucesso).to.be.false;
    expect(this.resultadoTransferencia.erro).to.equal("Chave não encontrada");
});

Then('nenhuma alteração deve ser feita no meu saldo', function () {
    // Verificação implícita ou explícita se necessário
});
