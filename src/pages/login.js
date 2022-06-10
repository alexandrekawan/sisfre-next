import Link from 'next/link'
import Head from 'next/head'
import { Text, Image, Input, Button, Flex, Container, VStack } from '@chakra-ui/react'

function Login() {
    return (
        <>
            <Head>
                    <title>SisFRE</title>
            </Head>

            <Flex w='100vw' h='100vh' align='center' justify='center'>
                <Container border='1px' borderStyle='solid' borderColor='gray.400' borderRadius='md' p='auto'>
                    <form method="POST" action="#">
                        <VStack padding='1'>
                            <Image
                                src="/sisfre.png"
                            />
                            <Input type='email' placeholder='E-Mail' required/>
                            <Input type='password' placeholder='Senha' required/>
                            <Link href='/reset-password'><Text color='blue.600'>Esqueceu sua senha?</Text></Link>
                            <Link href='/admin'><Button bgColor='primary' color='secondary'>Entrar</Button></Link>
                        </VStack>
                    </form>
                </Container>
            </Flex>
        </>
    )
}

export default Login