import Head from 'next/head'
import { Container, VStack, Box, Text, Avatar } from '@chakra-ui/react'
import { CalendarIcon, CloseIcon } from '@chakra-ui/icons'

function Admin() {
    return (
        <>
            <Head>
                <title>Administração</title>
            </Head>

            <Container color='white' bg='green'>
                <VStack>
                    <Box p='1'>
                        <Avatar>
                        </Avatar>
                    </Box>
                    <Box p='1'>
                        <Text><CloseIcon w={'3'} h={'3'}/> Faltas</Text>
                    </Box>
                    <Box p='1'>
                        <Text><CalendarIcon w={'3'} h={'3'}/> Sabado Letivo</Text>
                    </Box>
                </VStack>
            </Container>
        </>
    )
}

export default Admin