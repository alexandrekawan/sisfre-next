import Head from 'next/head'
import Link from 'next/link'
import { Image, Input, Button, Flex, Container, VStack } from '@chakra-ui/react'

function ResetPassword() {
    return (
        <>
            <Head>
                <title>Redefinir Senha</title>
            </Head>

            <Flex w='100vw' h='100vh' align='center' justify='center'>
                <Container border='1px' borderStyle='solid' borderColor='gray.400' borderRadius='md' p='auto'>
                    <form method="POST" action="#">
                        <VStack padding='1'>
                            <Image
                                src="/sisfre.png"
                            />
                            <Input type='email' placeholder='E-Mail' required/>
                            
                            <Button colorScheme='green'>Recuperar Senha</Button>
                        </VStack>
                    </form>
                </Container>
            </Flex>
        </>
    )
}

export default ResetPassword
