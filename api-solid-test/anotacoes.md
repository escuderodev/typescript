# === anotações importantes ===

- iniciar projeto => npm init -y
- instalar libs => npm i -D typescript @types/node
- criar arquivo de ocnfiguração do typescript => npx tsc --init
- mudar target pata es2017
- instalar o jest => npm i -D jest @swc/core @swc/jest @types/jest
- iniciar o jest => npx jest --init
- instalar ts-node => npm i -D ts-node
- no arquivo jest.config.ts, procurar por tranform e ajustar conforme abaixo:
  transform: {
    "^.+\\.(t|j)sx?$": [
      "@swc/jest",{
        jsc: {
          parser: {
            syntax: 'typescript',
            tsx: false,
            decorator: true,
          },
          target: 'es2017',
          keepClassNames: true,
          transform: {
            legacyDecorator: true,
            decoratorMetadata: true,
          },
        },
        module: {
          type: 'es6',
          noInterop: false,
        },
      },
    ],
  },
- 