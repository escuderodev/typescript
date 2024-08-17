# === anotações importantes ===

- criar projeto react => npx create-react-app my-app --template typescript
- em src, criar pasta components
- em components, criar os components necessários
- utilizar os components
- obs.: podemos passar valores como parâmetros para os nossos components da seguinte forma:
    - no component Card:
    interface ICard {
    id: number
    }

    export const Card = ({id}: ICard) => {
        return (
        <div>
            <h1>Card {id}</h1>
            <p>Descrição do card.</p>
        </div>
        )
    } 
    - no App.tsx:
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
- instalar lib styled-components => npm i styled-components
- instalar os tipos necessários => npm i -D @types/styled-components
- desconsiderar styled-components e passar aq usar ChackraUI
- instalar chackraui => npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion
- 