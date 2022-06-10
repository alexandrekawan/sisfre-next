import Head from 'next/head'
import { Container, VStack, Box, Text, Avatar, Flex, Slide, useDisclosure } from '@chakra-ui/react'
import { HamburgerIcon, CalendarIcon, CloseIcon } from '@chakra-ui/icons'

function Admin() {
    const { isOpen, onToggle } = useDisclosure()
    const navBtnColor = ((!isOpen) ? 'primary' : 'secondary')

    return (
        <>
            <Head>
                <title>Administração</title>
            </Head>
            <Container w='100vw' h='100vh'>
                { <HamburgerIcon color={navBtnColor} onMouseEnter={onToggle}/> }

                <Slide direction='left' in={isOpen} style={
                        {
                            zIndex: 10
                        }
                    }>
                        <VStack onMouseLeave={onToggle} w='xs' h='100vh' bgColor='primary' color='secondary'> 
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
                    </Slide>
                
            </Container>
        </>
    )
}

export default Admin