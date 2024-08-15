interface ICard {
    id: number,
    title: string,
    description: string
}

export const Card = ({id, title, description}: ICard) => {
    return (
      <div>
        <h1>Card {id}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    )
}