import { Input, Button, Flex, Container } from '@chakra-ui/react'

function Login() {
    return (
        <Flex w='100vw' h='100vh' align='center' justify='center'>
            <Container border='1px' borderStyle='solid' borderColor='black' borderRadius='md'>
                <form method="POST" action="#">
                    <Input type="email" required/>
                    <Button type="submit">Enviar</Button>
                </form>
            </Container>
        </Flex>
    )
}

export default Login