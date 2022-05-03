// import "@fontsource/calistoga"
import "@fontsource/inter"

import React, { useState, useEffect } from 'react';
import {
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
    Spacer,
    Container,
    VStack,
} from '@chakra-ui/react';
import { Auth } from 'aws-amplify';
import Goals from '../../components/goals/Goals';
import './style.css'
// import { Link } from 'react-router-dom';

function Paired() {
    const [ name, setName ] = useState('');

    useEffect(() => {
        checkUser();
    }, []);

    async function checkUser() {
        let user = await Auth.currentAuthenticatedUser();
        setName(user.username);
    }



    return (
        <>
            <Container h={ '100%' }>
                <Center py={ 5 }>
                    <Box id="pair-card"
                        maxW={ '300px' }
                        w={ 'full' }
                        bg={ useColorModeValue('#f5f5f5', 'gray.800') }
                        boxShadow={ 'xl' }
                        rounded={ 'md' }
                        overflow={ 'hidden' }
                    >
                        <Box h={ '100px' }
                            w={ 'full' } bg={ '' }>

                        </Box>
                        <Flex p={ 6 } mt={ '-2em' } justify={ 'space-evenly' }>
                            <Flex mt={ -12 }>
                                <Avatar
                                    as={ Button }
                                    size={ 'lg' }
                                    src={ '' }
                                    bg={ 'gray.300' }
                                    alt={ 'Author' }
                                    css={ {
                                        border: '2px solid white',
                                    } }
                                />
                            </Flex>
                            <Box maxW={ '50px' } mt={ '-1.5em' } >
                                <Image w={ 'sm' } src={ 'https://firebasestorage.googleapis.com/v0/b/olt-amplify.appspot.com/o/colorlogo%20.svg?alt=media&token=0e607de1-d81d-4175-8d2d-0e38539a0bc3' } />
                            </Box>
                            <Flex justify={ 'center' } mt={ -12 }>
                                <Avatar
                                    as={ Button }
                                    size={ 'lg' }
                                    src={ '' }
                                    bg={ 'gray.300' }
                                    alt={ 'Author' }
                                    css={ {
                                        border: '2px solid white',
                                    } }
                                />
                            </Flex>
                        </Flex>


                        <Flex p={ 6 }>
                            <Flex justify={ 'center' } mt={ -12 } align={ 'start' }>
                                <Box ml={ '1.1em' }>
                                    <Text fontWeight={ 600 } color={ useColorModeValue('#56799c', 'white') }
                                    >
                                        { name }
                                    </Text>
                                </Box>
                            </Flex>
                            <Spacer />
                            <Flex justify={ 'center' } mt={ -12 }>
                                <Box mr={ '.9em' }>
                                    <Text fontWeight={ 600 } color={ useColorModeValue('#56799c', 'white') }
                                    >
                                        partner
                                    </Text>
                                </Box>
                            </Flex>
                        </Flex>
                        <Container w={ '100%' } bg={ useColorModeValue('#f5f5f5', 'gray.600') }
                        >
                            <Box >
                                <Stack spacing={ 0 } align={ 'center' } mt={ '-2.5em' } pb={ 7 }>
                                    <Text color={ useColorModeValue('gray.500', 'white') } py={ '2' }> Together for </Text>
                                    <Container maxW={ 'sm' }>
                                        <Stack direction={ 'row' } spacing={ '4' } justify={ 'center' }>

                                            <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                                                <VStack>
                                                    <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                                                        1
                                                    </Text>
                                                    <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>year</Text>
                                                </VStack>                    </Box>
                                            <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                                                <VStack>
                                                    <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                                                        5
                                                    </Text>
                                                    <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>months</Text>
                                                </VStack>
                                            </Box>
                                            <Box width={ '50px' } p={ '1' } borderRadius={ 'sm' } bg={ 'white' } boxShadow={ 'lg' }>
                                                <VStack>
                                                    <Text fontSize={ '.9rem' } fontWeight={ '600' } color={ 'gray.500' } mb={ '-0.5em' } pt={ '.3em' }>
                                                        10
                                                    </Text>
                                                    <Text fontSize={ '.5rem' } m={ '0' } color={ 'gray.500' }>days</Text>
                                                </VStack>
                                            </Box>
                                        </Stack>
                                        <Box>
                                        </Box>
                                    </Container>
                                </Stack>


                            </Box>
                        </Container>
                    </Box>

                </Center>
                <Container maxW={ 'lg' }>
                    <Goals />

                </Container>
            </Container>

        </>
    );
}

export default Paired;
