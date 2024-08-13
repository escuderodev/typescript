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