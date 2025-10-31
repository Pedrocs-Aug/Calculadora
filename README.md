# 🧮 Calculadora Web com Temas (Light/Dark)

## 📄 Sobre o Projeto
Este é um projeto de uma calculadora simples desenvolvida para web, utilizando **HTML, CSS e JavaScript puros**. O principal objetivo foi criar uma interface funcional e responsiva com a capacidade de alternar entre um **tema claro (Light)** e um **tema escuro (Dark)**.

É um ótimo projeto para demonstrar proficiência em manipulação do DOM e lógica de programação básica em JavaScript, além de uso de CSS para temas dinâmicos.

## ✨ Funcionalidades
A calculadora possui as funcionalidades básicas esperadas:
* **Operações Aritméticas Básicas**: Adição (`+`), Subtração (`-`), Multiplicação (`x` ou `*`) e Divisão (`/`).
* **Limpar (AC)**: Reseta o display para `0`.
* **Apagar (⌫)**: Remove o último caractere ou operador do display.
* **Cálculo de Percentual (%)**:
    * Para um único número, calcula o valor percentual (ex: `50%` resulta em `0.5`).
    * Em uma operação (ex: `100 + 10 %`), calcula a porcentagem do primeiro número e aplica a operação (ex: `100 + 10` resulta em `100 + 10` (10% de 100)). *Baseado na lógica implementada no `index.js`.*
* **Cálculo (=)**: Avalia a expressão no display.
* **Temas**: Botão para alternar entre os temas **Claro (☀️)** e **Escuro (🌙)**, alterando o estilo da aplicação através da troca de arquivos CSS.

## 💻 Tecnologias Utilizadas
As seguintes tecnologias foram utilizadas na construção do projeto:
* **HTML5**
* **CSS3** (com `@import` de fontes do Google Fonts e uso de classes para temas)
* **JavaScript (ES6+)**

## ⚙️ Como Executar o Projeto

Para visualizar e executar este projeto localmente, siga os passos abaixo:

1.  **Clone o repositório** para sua máquina local.
    ```bash
    git clone [LINK_DO_SEU_REPOSITORIO]
    ```
2.  **Navegue até a pasta do projeto**.
    ```bash
    cd nome-da-pasta-do-projeto
    ```
3.  **Abra o arquivo `index.html`** em seu navegador web (Google Chrome, Firefox, etc.).

Alternativamente, você pode utilizar uma extensão de servidor local no seu editor de código (como o *Live Server* do VS Code) para ter um ambiente mais próximo de produção.

## 🤝 Contribuição
Sinta-se à vontade para sugerir melhorias, corrigir bugs ou adicionar novas funcionalidades.
1.  Faça um Fork do projeto.
2.  Crie uma nova branch para sua feature (`git checkout -b feature/minha-nova-feature`).
3.  Faça commit das suas mudanças (`git commit -m 'feat: Adicionando nova feature'`).
4.  Faça Push para a branch (`git push origin feature/minha-nova-feature`).
5.  Abra um Pull Request.

## 🔑 Licença
Este projeto está sob a licença [Nome da Licença, ex: MIT].