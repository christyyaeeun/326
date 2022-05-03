import * as React from 'react';
import { ReactNode } from 'react';
import {
    Box,
    Center,
    Flex,
    Avatar,
    HStack,
    IconButton,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import { Auth } from "aws-amplify";
import { SignOutBtn } from './entry/SignOutBtn';
import { ColorModeSwitcher } from '../ColorModeSwitcher'
import { Divider } from '@aws-amplify/ui-react';

export default function Navigator({signOut}) {
    const { isOpen, onOpen, onClose } = useDisclosure();

    return (
        <>
            <Box bg={ useColorModeValue('#edf2f7', 'gray.700') } px={ 4 }>
                <Flex h={ 16 } alignItems={ 'center' } justifyContent={ 'space-between' }>
                    <IconButton
                        size={ 'md' }
                        bg={ useColorModeValue('transparent', '#4d5e7c') }
                        icon={ isOpen ? <CloseIcon /> : <HamburgerIcon /> }
                        color={ useColorModeValue('#a5bbdb', 'white') }
                        aria-label={ 'Open Menu' }
                        display={ { md: 'none' } }
                        onClick={ isOpen ? onClose : onOpen }
                    />
                    <HStack spacing={ 8 } alignItems={ 'center' }>
                        <Box
                            color={ useColorModeValue('gray.400', 'white') }
                            fontWeight="600"
                            id="nav-header"
                        >
                            olt
                        </Box>
                        <HStack
                        color={'gray.500'}
                            as={ 'nav' }
                            spacing={ 4 }
                            display={ { base: 'none', md: 'flex' } }
                        >
                            <Link to="/"> Home</Link>
                            <Divider />
                            <Link to="/posts"> Posts</Link>
                            <Divider />
                            <Link to="/paired"> Paired</Link>
                            <Divider />
                            <Link to="/Explore"> Explore</Link>
                            <Divider />
                        </HStack>
                    </HStack>


                    <Flex alignItems={ 'center' }>
                        <Menu>
                            <MenuButton
                                as={ Button }
                                rounded={ 'full' }
                                variant={ 'link' }
                                cursor={ 'pointer' }
                                minW={ 0 }
                            >
                                <Avatar size={ 'sm' } src={ '' } />
                            </MenuButton>

                            <MenuList alignItems={ 'center' }>
                                <br />
                                <Center>
                                    <Avatar size={ '2xl' } src={ '' } />
                                </Center>
                                <br />
                                <Center></Center>
                                <br />
                                <MenuDivider />
                                <MenuItem as="a" href="profile">
                                    Edit Profile
                                </MenuItem>
                                <MenuItem>Account Settings</MenuItem>
                                <MenuItem>
                                <SignOutBtn />

                                </MenuItem>
                            </MenuList>
                        </Menu>
                        <ColorModeSwitcher> </ColorModeSwitcher>
                    </Flex>
                </Flex>


                { isOpen ? (
                    <Box pb={ 4 } display={ { md: 'none' } }>
                        <Stack color={ 'gray.400' } as={ 'nav' } spacing={ 4 }>
                            <Link to="/"> Home</Link>
                            <Link to="/posts"> Posts</Link>
                            <Link to="/paired"> Paired</Link>
                            <Link to="/Explore"> Explore</Link>
                        </Stack>
                    </Box>
                ) : null }
            </Box>
        </>
    )
}