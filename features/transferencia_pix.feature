# language: pt
Funcionalidade: Transferência PIX

  Como um correntista do banco digital,
  Eu quero realizar transferências instantâneas via PIX,
  Para que eu possa enviar dinheiro para outras pessoas ou pagar serviços rapidamente a qualquer hora do dia.

  Cenário: Transferência realizada com sucesso
    Dado que meu saldo atual é de R$ 1000,00
    E que existe um destinatário com a chave PIX "joao@email.com"
    Quando eu confirmo uma transferência de R$ 200,00 para a chave "joao@email.com"
    Então a transferência deve ser processada com sucesso
    E meu saldo atualizado deve ser R$ 800,00
    E o extrato deve registrar uma saída de R$ 200,00

  Cenário: Tentativa de transferência com saldo insuficiente
    Dado que meu saldo atual é de R$ 50,00
    E que existe um destinatário com a chave PIX "loja@email.com"
    Quando eu tento transferir R$ 100,00 para a chave "loja@email.com"
    Então o sistema deve bloquear a transação
    E deve exibir a mensagem de erro "Saldo insuficiente"
    E meu saldo deve permanecer R$ 50,00

  Cenário: Transferência para chave inexistente
    Dado que meu saldo atual é de R$ 500,00
    Quando eu tento transferir R$ 50,00 para a chave "chave_inexistente@banco.com"
    Então o sistema deve notificar que a chave não foi encontrada
    E nenhuma alteração deve ser feita no meu saldo
