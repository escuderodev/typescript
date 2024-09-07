# anotações importantes

- instalar typescript globalmente: npm i -g typescript
- iniciar um projeto node: npm init -y
- instalar typescript como dependência de desenvolvimento: npm i -D typescript 
- instalar ts-node-dev como dependência de desenvolvimento: npm i -D ts-node-dev
- criar o arquivo de configuração do typescript: npx tsc --init
- recriar o arquivo app.js como app.ts e depois convertê-lo em js com: npx tsc app.ts
- para não pdicar transpilando o arquivo ts em js utilizaremos o ts-node-dev: npx ts-node-dev app.ts
- no arquivo package.json, criar script ["dev": "ts-node-dev app.ts"] para executar diretamente arquivos .ts
- próxima aula: https://web.dio.me/course/o-que-e-o-typescript/learning/8f3cfcc8-85b8-444b-ae9f-cff4a5b3322c?back=/track/formacao-typescript-fullstack-developer&tab=undefined&moduleId=undefined