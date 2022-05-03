
import React, { useReducer } from 'react'
import {
    Box,
    Flex,
    Text,
    Image,
    Grid,
    NumberInput,
    NumberInputField,
    NumberInputStepper,
    NumberIncrementStepper,
    NumberDecrementStepper,
    GridItem,
    Spacer,
    Tooltip,
    Container,
    useColorModeValue,
    IconButton,
    Tabs, TabList, TabPanels, Tab, TabPanel
} from '@chakra-ui/react';
import { RiHeart2Line, RiUserHeartLine, RiChatHeartLine } from 'react-icons/ri'
import { BiGift, BiCoffeeTogo, BiBeenHere } from 'react-icons/bi'
import { MdAccessAlarms, MdRoomService, MdSpa } from 'react-icons/md'
import { CgShoppingBag } from 'react-icons/cg'
import { GiLoveLetter } from 'react-icons/gi'
import { HiOutlineTicket } from 'react-icons/hi'
import { IoIosIceCream } from 'react-icons/io'
import { BsPeople, BsCardChecklist } from 'react-icons/bs'
import { FiMessageCircle } from 'react-icons/fi'
import './style.css'


function Goals() {
    // const userPoints = {
    //     points: ''
    // }
    // const [ formVal, dispatch ] = useReducer(
    //     (currentTotal, newTotal) => ({ ...currentTotal, ...newTotal }),
    //     userPoints,
    // )
    // const { points } = formVal
    // const onValChange = (event) => {
    //     const { points, value } = event.target
    //     dispatch({ [ points ]: value })
    //     console.log(formVal)
    // }
    // const onSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(formVal)
    // }
    const colors = useColorModeValue(
        // [ '#e6e6fa', '#E6EDEC', '#fbeff5', '#aac8f475', '#E9EBEF', '#ffe8bc8a' ],
        [ 'white', 'white', 'white', 'white', 'white', 'white' ],
        [ '#764d74', '#4d4d76', '#2e3648', '#e6e6fa', 'teal.900', 'blue.900' ],
    )


    const [ tabIndex, setTabIndex ] = React.useState(0)
    const bg = colors[ tabIndex ]

    // const [ footer, setFooter ] = React.useState(0)
    // const fbg = footerBg[ footer ]

    return (
        <div>
            <Container centerContent maxW='container.sm' minH='300px' px='3' color='gray.500' m={ 'auto' }>

                <Container centerContent>



                    <Box>
                        <Tooltip width={ '100%' } label="Select actionable goals based on your partner's love languages" aria-label='A tooltip'>
                            <Text fontSize='2xl' flex={ '0 1 270' } mb={ '2' }>Goals</Text>
                        </Tooltip>
                    </Box>




                </Container>
                <Box bg={ 'transparent' } border={ '.1em' } boxShadow={ '2xl' } borderRadius={ '2xl' }>
                    <Box fontSize={ 'sm' } bg={ 'transparent' }>
                        <Tabs className='tab' onChange={ (index) => setTabIndex(index) } bg={ bg } size={ 'sm' } borderRadius={ 'lg' } height={ '260px' }>
                            <TabList className='tablist' justifyContent={ 'center' } w={ '100%' }>

                                <Grid className='grid' templateColumns='repeat(6, 1fr)' gap={ 1 } bg={ 'lavendar' } fontSize={ 'xs' }>
                                    {/* CUSTOM */ }
                                    <Tab _selected={ { color: 'purple.600', bg: '#e6e6fa' } }>
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <RiHeart2Line /> } />
                                        </GridItem>
                                    </Tab>

                                    {/* QUALITY TIME */ }
                                    <Tab _selected={ { color: '#478b7e', bg: '#c8e2df' } }>
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <MdAccessAlarms /> } />
                                        </GridItem>
                                    </Tab>

                                    {/* GIFTS */ }

                                    <Tab _selected={ { color: '#DA83AC', bg: '#fbeff5' } } >
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <BiGift /> } />
                                        </GridItem>
                                    </Tab>

                                    {/* SERVICE */ }
                                    <Tab _selected={ { color: '#6fa3cb', bg: '#aac8f475' } } >
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <MdRoomService /> } />
                                        </GridItem>
                                    </Tab>
                                    {/* TOUCH */ }

                                    <Tab _selected={ { color: '#d6a339', bg: '#f1e093' } } >
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <BsPeople /> } />
                                        </GridItem>
                                    </Tab>

                                    {/* WORDS OF AFFIRMATION */ }
                                    <Tab _selected={ { color: '#eaa434', bg: ' #f5d7a5' } } >
                                        <GridItem w='100%' h='10' >
                                            <IconButton bg={ 'transparent' } icon={ <FiMessageCircle /> } />
                                        </GridItem>
                                    </Tab>
                                </Grid>
                            </TabList>

                            <TabPanels>
                                <TabPanel>
                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Custom</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <RiChatHeartLine /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Send your partner a text
                                        </Text> <Spacer />

                                    </Flex>


                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <BiCoffeeTogo /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Make a cup of coffee
                                        </Text>
                                        <Spacer />
                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <RiUserHeartLine /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            One reason you admire them
                                        </Text>
                                        <Spacer />
                                    </Flex>

                                </TabPanel>


                                {/* QUALITY TIME */ }
                                <TabPanel>
                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Quality Time</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>


                                    <Flex alignItems={ 'center' } h={ '100%' } >
                                        <IconButton icon={ <BiBeenHere /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' } color={ '#c8e2d' }>

                                            Plan a date - go somewhere new!
                                        </Text>
                                        <Spacer />
                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <IoIosIceCream /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' } color={ '#c8e2d' }>
                                            Grab some ice cream for a nice treat
                                        </Text>
                                        <Spacer />
                                    </Flex>
                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <HiOutlineTicket /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Go out for a movie date
                                        </Text>
                                        <Spacer />
                                    </Flex>
                                </TabPanel>



                                {/* RECIEVING GIFTS */ }
                                <TabPanel>
                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Recieving Gifts</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>



                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <CgShoppingBag /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Suprise them with a small gift
                                        </Text>
                                        <Spacer />
                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' } pt={ '.5em' }>
                                        <Image ml={ '.7em' } mr={ '.8em' } height={ '2em' } boxSize={ '1.5em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/snack.svg?alt=media&token=e011c3bf-c7f0-4102-a7cf-fb1123455bac' } />
                                        <Text fontSize={ 'xs' }>


                                            Buy their favorite snack
                                        </Text>
                                        <Spacer />
                                    </Flex>
                                </TabPanel>

                                {/* ACTS OF SERVICE */ }
                                <TabPanel>
                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Acts of Service</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <BsCardChecklist /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Do a task for your partner</Text> <Spacer />

                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' } pt={ '.5em' }>

                                        <Image ml={ '.6em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/fried-egg.png?alt=media&token=d23c0888-3111-4940-8850-d1e2ceea4e18' } boxSize={ '1em' } mr={ '.5em' } />

                                        <Text ml={ '.8em' } fontSize={ 'xs' }>
                                            Make them breakfast in bed
                                        </Text>
                                        <Spacer />

                                    </Flex>
                                </TabPanel>


                                {/* PHYSICAL TOUCH */ }
                                <TabPanel>
                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Physical Touch</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>

                                    {/* <Text textAlign={ 'center' }> Physical Touch</Text> */ }
                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <MdSpa /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>

                                            Give them a massage
                                        </Text>
                                        <Spacer />
                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <Image boxSize={ '1.5em' } ml={ '.5em' } mr={ '.8em' } height={ '2em' } src={ 'https://firebasestorage.googleapis.com/v0/b/christypark-portfolio.appspot.com/o/hugsm%20.svg?alt=media&token=1d9b5b42-b185-4a00-8470-31741b8c9cb5' } />
                                        <Text fontSize={ 'xs' }>
                                            Give them a long hug</Text>

                                        <Spacer />
                                    </Flex>
                                </TabPanel>



                                {/* WORDS OF AFFIRMATION */ }
                                <TabPanel>

                                    <Flex justifyContent='space-between' px='3'>
                                        <Text textAlign={ 'center' }>Words of Affirmation</Text>

                                        <NumberInput w={ '3.8em' } size='sm' fontSize='.9rem' defaultValue={ 0 } min={ 0 }>
                                            <NumberInputField focusBorderColor='transparent' />
                                            <NumberInputStepper>
                                                <NumberIncrementStepper
                                                    bg='green.200'
                                                    _active={ { bg: 'green.300' } }
                                                    children='+'
                                                />
                                                <NumberDecrementStepper
                                                    bg='transparent'
                                                    _active={ { bg: 'pink.300' } }
                                                    children='-'
                                                />
                                            </NumberInputStepper>
                                        </NumberInput>


                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <GiLoveLetter /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>
                                            Tell them one reason you admire them</Text>
                                        <Spacer />
                                    </Flex>

                                    <Flex alignItems={ 'center' } h={ '100%' }>
                                        <IconButton icon={ <FiMessageCircle /> } bg={ 'transparent' } />
                                        <Text fontSize={ 'xs' }>
                                            Give them one compliment</Text>
                                        <Spacer />
                                    </Flex>
                                </TabPanel>
                            </TabPanels>
                        </Tabs>
                    </Box>
                    <Box className='footer' bg={ bg } h={ '30px' } borderTop={ 'none' } borderRadius={ '0px 0px 15px 15px' }
                    >       </Box>
                </Box>
            </Container>

        </div >
    )
}

export default Goals


