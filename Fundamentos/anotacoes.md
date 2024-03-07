# Anotações Importantes

- instalar o node.js;
- instalar o typscript com o comando = npm i -g typescript
- instanciar o node em nosso projeto com o comando = npm --y
- instalar duas dependencias com os comandos abaixo:
    - npm i -D typescript (dependência de desenvolvimento)
    - npm i -D ts-node-dev (dependência de desenvolvimento)
- inicializar o typescript no projeto com o comando = npx tsc --init

- para executar um arquivo typescrit é necessário converter o arquivo ts em js com o comando = npx tsc app.ts

- instalar o ts-node para reproduzir arquivos .ts com o comando = npm i -D ts-node

- para agilizar a execução dos arquivos .ts abrimos o arquivo package.json e na seção scripts inserimos os dados abaixo:
    - "dev": "ts-node-dev app.ts",
    - após podemos executar com o comando = npm run dev

