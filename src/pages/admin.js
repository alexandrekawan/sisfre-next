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
            { (!isOpen) ? <HamburgerIcon color={navBtnColor} w='10' h='10' m='1' onMouseEnter={onToggle}/> : <></> }
                {
                    (isOpen)

                        ?

                        <Slide direction='left' in={isOpen} style={
                            {
                                zIndex: 10
                            }
                        }>
                            <VStack onMouseLeave={onToggle} w='fit-content' h='100vh' p='5' bgColor='primary' color='secondary'> 
                                <Box p='1'>
                                    <Avatar>
                                    </Avatar>
                                </Box>
                                <Box p='1' w='100%' _hover={{
                                    bgColor: 'secondary',
                                    color: 'primary'
                                }}>
                                    <Text><CloseIcon w={'3'} h={'3'}/> Faltas</Text>
                                </Box>
                                <Box p='1' _hover={{
                                    bgColor: 'secondary',
                                    color: 'primary'
                                }}>
                                    <Text><CalendarIcon w={'3'} h={'3'}/> Sabado Letivo</Text>
                                </Box>
                            </VStack>
                        </Slide>
                        
                        :

                        <></>
                }
            
            
                <Container>
                    
                </Container>

        </>
    )
}

export default Admin