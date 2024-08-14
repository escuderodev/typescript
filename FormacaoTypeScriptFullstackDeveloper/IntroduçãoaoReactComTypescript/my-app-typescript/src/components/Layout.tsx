import { Footer } from "./Footer"
import { Header } from "./Header"

export const Layout = ({ children }: any) => {
    return (
        <>
          <Header/>
          {children}
          <Footer message="Desenvolvido por Escuderodev" year="2024"/>
        </>
    )
}