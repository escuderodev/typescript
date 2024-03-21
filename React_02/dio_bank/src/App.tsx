import { Layout } from './components/Layout';

function App() {
  return (
    <Layout>
      <h1>Faça o login</h1>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"/>
      <label htmlFor="password">Senha:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Entrar</button>
    </Layout>
  );
}

export default App;
