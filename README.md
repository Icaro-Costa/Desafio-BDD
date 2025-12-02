# Desafio BDD - Transferência PIX

Este projeto é um exemplo prático de Behavior Driven Development (BDD) aplicado a uma funcionalidade de transferência PIX.

## Estrutura do Projeto

- **features/**: Contém os arquivos `.feature` com a descrição das histórias de usuário e cenários em Gherkin.
  - `transferencia_pix.feature`: A especificação da funcionalidade.
- **src/**: Contém o código fonte da aplicação (simulado).
  - `ContaBancaria.js`: Classe que representa a conta do usuário.
  - `ServicoPix.js`: Serviço que orquestra a transferência.
- **tests/**: Contém a implementação dos testes.
  - `step_definitions.js`: O código que liga os passos do Gherkin ao código da aplicação.

## Como Executar

1. Certifique-se de ter o Node.js instalado.
2. Instale as dependências:
   ```bash
   npm install
   ```
3. Execute os testes:
   ```bash
   npm test
   ```

## Cenários Cobertos

1. **Sucesso**: Transferência realizada com saldo suficiente e chave válida.
2. **Saldo Insuficiente**: Tentativa de transferência sem fundos.
3. **Chave Inexistente**: Tentativa de transferência para um destinatário desconhecido.
