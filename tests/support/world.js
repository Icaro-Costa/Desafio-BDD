const { setWorldConstructor } = require('@cucumber/cucumber');

class CustomWorld {
    constructor() {
        this.minhaConta = null;
        this.resultadoTransferencia = null;
    }
}

setWorldConstructor(CustomWorld);
