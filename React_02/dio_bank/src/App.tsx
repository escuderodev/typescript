import { Layout } from './components/Layout';
import styled from 'styled-components'

const Box = styled.div`
background-color: orange
`

function App() {
  return (
    <Layout>
      <Box>
        <h1>Faça o login</h1>
      </Box>
      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"/>
      <label htmlFor="password">Senha:</label>
      <input type="password" name="password" id="password" />
      <button type="submit">Entrar</button>
    </Layout>
  );
}

export default App;
