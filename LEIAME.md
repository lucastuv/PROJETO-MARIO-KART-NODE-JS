# 🏎️ PROJETO MARIO KART - NODE.JS

Este projeto é uma aplicação backend desenvolvida com Node.js que simula partidas de Mario Kart, armazenando resultados e pontuações em tempo real. Ele foi desenvolvido como forma de praticar conceitos fundamentais de backend, estruturação de APIs REST, lógica de programação e persistência de dados com JSON.

## 💡 Objetivo do Projeto

Criar um sistema simples que simula corridas do Mario Kart, onde os jogadores acumulam pontos a cada partida e seus desempenhos são registrados. O objetivo principal é aprender e praticar os fundamentos da construção de APIs utilizando o Node.js com JavaScript puro, sem frameworks como Express.

---

## 🚧 Etapas do Desenvolvimento

### 1. **Planejamento e Organização**

Antes de iniciar o código, defini os seguintes pontos:

* A estrutura dos dados (jogadores, corridas, pontuação).
* A regra de pontuação baseada na colocação de cada jogador.
* Como armazenar os dados de forma persistente (arquivo `.json` local).
* O escopo inicial da aplicação.

### 2. **Criação da Estrutura de Pastas**

O projeto foi organizado em três arquivos principais:

* `index.js`: Ponto de entrada da aplicação.
* `jogadores.json`: Arquivo para persistência dos dados dos jogadores.
* `funcoes.js`: Onde foram implementadas as funções principais da lógica da aplicação.

### 3. **Desenvolvimento das Funcionalidades**

Implementei as seguintes funções principais:

* `corrida(jogadores)`: Recebe uma lista de jogadores e simula uma corrida, atribuindo pontuações conforme a posição.
* `gerarPontuacao(jogadores)`: Calcula e atualiza a pontuação total de cada jogador.
* `atualizarBanco(jogadores)`: Persiste os dados atualizados no arquivo `jogadores.json`.

Essas funções manipulam arrays e objetos JavaScript para organizar as posições dos jogadores e aplicar as regras de pontuação. Tudo foi feito utilizando lógica de programação pura, reforçando minha habilidade em JavaScript e na manipulação de dados.

### 4. **Leitura e Escrita de Arquivos**

Utilizei o módulo `fs` (File System) do Node.js para:

* Ler os dados dos jogadores.
* Atualizar os resultados das corridas.
* Garantir que os dados sejam salvos entre execuções do programa.

### 5. **Testes e Simulações**

Durante o desenvolvimento, simulei diversas corridas com diferentes ordens de jogadores para validar a lógica de pontuação e persistência.

---

## 🛠️ Tecnologias Utilizadas

* **Node.js** (JavaScript)
* **Módulo nativo `fs`** para manipulação de arquivos
* **JSON** para simular um banco de dados local

---

## 🎯 Habilidades Demonstradas

* Lógica de programação com JavaScript puro
* Manipulação de arquivos com Node.js
* Estruturação de código modular e reutilizável
* Uso de JSON para persistência de dados
* Organização de um projeto real com versionamento Git

---

## 📌 Considerações Finais

Este projeto foi essencial para consolidar meu entendimento sobre Node.js sem o uso de frameworks. Foi uma ótima oportunidade para exercitar boas práticas, como separação de responsabilidades e organização de código. A aplicação é simples, mas funcional e demonstra minha capacidade de construir soluções backend do zero.

