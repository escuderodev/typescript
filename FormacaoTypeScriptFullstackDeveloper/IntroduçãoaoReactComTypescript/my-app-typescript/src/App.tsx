import { Card } from "./components/Card";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";

function App() {
  return (
    <>
      <Header/>
      <div>
        Primeiro App React com TypeScript
        <Card
          id={1}
          title="TypeScript"
          description="Como inserir tipagem no JavaScript"
        />
        <Card
          id={2}
          title="MongoDB"
          description="Banco de dados não relacional."
        />
        <Card 
          id={3} 
          title="Express" 
          description="Crie API's REST." />
      </div>
      <Footer message="Desenvolvido por Escuderodev" year="2024"/>
    </>
  );
}

export default App;
