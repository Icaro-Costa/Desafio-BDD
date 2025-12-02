class ServicoPix {
    static chavesRegistradas = new Set();

    static registrarChaveTeste(chave) {
        this.chavesRegistradas.add(chave);
    }

    static limparChaves() {
        this.chavesRegistradas.clear();
    }

    static realizarTransferencia(contaOrigem, chaveDestino, valor) {
        if (!this.chavesRegistradas.has(chaveDestino)) {
            return { sucesso: false, erro: "Chave não encontrada" };
        }

        try {
            contaOrigem.debitar(valor);
            return { sucesso: true };
        } catch (e) {
            return { sucesso: false, erro: e.message };
        }
    }
}

module.exports = { ServicoPix };
