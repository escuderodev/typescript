import {
  Box,
  Button,
  Center,
  ChakraProvider,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Box minHeight={"100vh"} backgroundColor={"#222222"} color={"white"} padding={'25px'}>
        <Box backgroundColor={"gray"} borderRadius={'5px'} padding={"1rem"}>
          <FormControl>
            <Center fontSize={'2rem'}>
              <h1>Faça Login</h1>
            </Center>
            <FormLabel>Email:</FormLabel>
            <Input
              type="email"
              placeholder="seuemail@provedor.com.br"
              required
            />
            <FormLabel>Senha:</FormLabel>
            <Input type="password" placeholder="password" required/>
            <Center>
              <Button type="submit" colorScheme="red" size={'lg'} marginTop={'1rem'}>Entrar</Button>
            </Center>
          </FormControl>
        </Box>
      </Box>
    </ChakraProvider>
  );
}

export default App;
