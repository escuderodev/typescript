# === ANOTAÇÕES IMPORTANTES ===

- iniciar projeto => npm init -y
- instalar o typescript e seu type => npm i typescript @types/typescript
- instalar express e seu type => npm i express @types/express
- instalar ts-node => npm i ts-node
- criar arquivo de ocnfiguração do typescript => npx tsc --init
- criar pasta src
- em src, criar pasta model
- em model, criar entidade Customer.ts
- o atributo document de customer poderá ser uma variação de cpf e cnpj, sendo assim, devemos criar uma interface para Document
- em model, criar como implementações de Document as classes cpf e cnpj
- após implementar Cpf e Cnpj, em Customer, alterar o tipo do atributo document para Document
- instalar uuid para geração do id => npm i uuid @types/uuid
- em model, criar classe Uuid.ts
- em Uuid.ts, importar validate => import { validate as validateUuid } from "uuid" para realizar validação dos uuid
- após implementar Uuid, devemos alterar o atributo id de customer para o tipo Uuid
- para criar nossos document's, vamos antes criar a classe DocumentFactory.ts
- 