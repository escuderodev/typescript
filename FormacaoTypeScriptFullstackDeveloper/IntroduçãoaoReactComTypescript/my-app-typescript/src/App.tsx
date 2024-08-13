import { Card } from "./components/Card";

function App() {
  return (
    <>
      <div>
        Primeiro App React com TypeScript
        <Card id={1}/>
        <Card id={2}/>
        <Card id={3}/>
      </div>
      <div>
        Footer
      </div>
    </>
  );
}

export default App;
