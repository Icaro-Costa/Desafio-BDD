const { Before, After } = require('@cucumber/cucumber');
const { ServicoPix } = require('../../src/ServicoPix');

Before(function () {
    // Limpa o estado estático do serviço antes de cada cenário
    ServicoPix.limparChaves();
    // O estado do World (this.minhaConta, etc) é resetado automaticamente pelo Cucumber
});

After(function () {
    // Ações após cada cenário (ex: fechar conexões, limpar arquivos)
    // Neste exemplo simples, não precisamos de nada aqui
});
