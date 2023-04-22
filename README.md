# Angular App

Este projeto foi criado para a aula de Programação Web 1 do IFPB. É uma aplicação simples que permite ao usuário inserir seu nome e exibi-lo na tela.

## Tecnologias

- Angular
- CSS

## Como executar

1. Clone este repositório em sua máquina local.
2. Instale as dependências do projeto executando o comando `npm install`.
3. Execute o projeto usando o comando `ng serve`.
4. Acesse a aplicação em `http://localhost:4200`.

## Como contribuir

1. Fork este repositório.
2. Crie um branch para a sua feature (`git checkout -b feature/nome-da-sua-feature`).
3. Commit suas alterações (`git commit -m 'Adicionando nova feature'`).
4. Push para o branch criado (`git push origin feature/nome-da-sua-feature`).
5. Abra um pull request para este repositório.

## Responsividade

A aplicação é responsiva e se adapta a diferentes tamanhos de tela. As seguintes alterações foram feitas no arquivo `app.component.css` para tornar a aplicação responsiva:

- A largura do elemento `.conteudo` foi definida em relação à altura (`width: calc(2.5 * 250px);`), para que ele mantenha uma proporção em diferentes tamanhos de tela.
- Foram adicionadas duas media queries para ajustar o tamanho do elemento `.conteudo` e a largura do elemento `input` em telas menores.

## Editor usado

CodeSandbox

## Autor

Heberty Vieira

