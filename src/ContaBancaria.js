class ContaBancaria {
    constructor() {
        this.saldo = 0;
        this.lancamentos = [];
    }

    depositar(valor) {
        this.saldo += valor;
    }

    obterSaldo() {
        return this.saldo;
    }

    debitar(valor) {
        if (valor > this.saldo) {
            throw new Error("Saldo insuficiente");
        }
        this.saldo -= valor;
        this.lancamentos.push({ tipo: 'DEBITO', valor: valor, data: new Date() });
    }

    obterUltimoLancamento() {
        return this.lancamentos[this.lancamentos.length - 1];
    }
}

module.exports = { ContaBancaria };
