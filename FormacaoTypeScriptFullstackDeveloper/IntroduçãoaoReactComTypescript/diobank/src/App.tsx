import { Card } from "./components/Card/Card";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App;
