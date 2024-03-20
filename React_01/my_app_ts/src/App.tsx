import { Card } from "./components/Card";
import { Layout } from "./components/Layout";

function App() {
  return (
    <Layout>
      <p>Seja bem vindo(a) a minha aplicação React!</p>
      <Card id={1} paragraph="TypeScript" details="Details of TypeScript" />
      <Card id={2} paragraph="JavaScript" details="Details of JavaScript"/>
      <Card id={3} paragraph="Java" details="Details of Java"/>
    </Layout>
  );
}

export default App;
