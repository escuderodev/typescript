import { Layout } from "./components/Layout/Layout";
import styled from "styled-components";

const Box = styled.div`
  background-color: orange;
  padding-left: 5px;
`

function App() {
  return (
    <Layout>
      <Box><h1>Faça Login</h1></Box>
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" placeholder="seuemail@provedor.com.br" required/>
      <label htmlFor="password">Senha:</label>
      <input type="password" name="password" id="password" required/>
      <button type="submit">Entrar</button>
    </Layout>
  );
}

export default App;
