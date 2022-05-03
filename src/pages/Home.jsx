import React, { useState, useEffect } from "react";
import { Box, useColorModeValue, Container, Flex, Spacer, Text } from '@chakra-ui/react'
import { DateCalendar } from '../components/calendar'
import Btn from '../components/Btn'
import { Auth } from "aws-amplify";

// const Home = ({name}) => {


function Home() {
    const [ name, setName ] = useState('');
    useEffect(() => {
    checkUser(); // new function call
    }, []);

    async function checkUser() {
        const user = await Auth.currentAuthenticatedUser();
        setName(user.username);
    }

    return (
        <>
            <Container className="home" p="4" maxW="7xl" h={'200vw'}>
                <Flex alignItems='center' py='3'>

                    <Text fontSize='1.2rem' color='gray.400'> Welcome { name }</Text>

                    <Spacer />
                </Flex>
                <Box id="calendar-wrap" p="3" borderRadius="lg">
                    <Box
                        p="3"
                        borderRadius="lg"
                        maxW="350px"
                        boxShadow="2xl"
                        color={ useColorModeValue('blue.500', 'white') }
                        bg={ useColorModeValue('white', '#4D5E7C') }
                    >
                        <DateCalendar />
                    </Box>
                </Box>
            </Container>
        </>

    )
}
export default Home;
