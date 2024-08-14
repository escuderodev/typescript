interface IFooter {
    message: string,
    year: string
}

export const Footer = ({message, year}: IFooter) => {
    return (
      <div>
        <p>{message} {year}</p>
      </div>
    )
}