// CreatePost.js

import React, { useState } from "react";
import Btn from "../Btn";
import { v4 as uuid } from "uuid";
import { Storage, API, Auth } from "aws-amplify";
import { createPost } from "../../graphql/mutations";
import { SmallAddIcon, SmallCloseIcon } from '@chakra-ui/icons';

import { BiImageAdd } from 'react-icons/bi';
import {
  Box,
  Container,
  Textarea,
  Input,
  Spacer,
  Image,
  Spinner,
  useColorModeValue,
  Icon,
  Button,
  Flex,
  Stack,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';

/* Initial state to hold form input, saving state */
const initialState = {
  name: "",
  description: "",
  image: {},
  file: "",
  saving: false,
};
const Overlay = () => (
  <ModalOverlay
    bg="blackAlpha.300"
    backdropFilter="blur(10px) hue-rotate(90deg)"
  />
);

export default function CreatePost({
  updateOverlayVisibility,
  updatePosts,
  posts,
}) {
  /* 1. Create local state with useState hook */
  const [ formState, updateFormState ] = useState(initialState);
  const [ overlay, setOverlay ] = React.useState(<Overlay />);
  const [ isOpen, setIsOpen ] = useState(false);

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState((currentState) => ({
      ...currentState,
      [ e.target.name ]: e.target.value,
    }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (!e.target.files[ 0 ]) return;
    const fileExtPosition = e.target.files[ 0 ].name.search(/.png|.jpg|.gif/i);
    const firstHalf = e.target.files[ 0 ].name.slice(0, fileExtPosition);
    const secondHalf = e.target.files[ 0 ].name.slice(fileExtPosition);
    const fileName = firstHalf + "_" + uuid() + secondHalf;
    console.log(fileName);
    const image = { fileInfo: e.target.files[ 0 ], name: fileName };
    updateFormState((currentState) => ({
      ...currentState,
      file: URL.createObjectURL(e.target.files[ 0 ]),
      image,
    }));
  }

  async function save() {
    try {
      const { name, description, image } = formState;
      if (!name || !description || !image.name) return;
      updateFormState((currentState) => ({ ...currentState, saving: true }));
      const postId = uuid();
      const postInfo = {
        name,
        description,
        image: formState.image.name,
        id: postId,
      };

      await Storage.put(formState.image.name, formState.image.fileInfo);
      await API.graphql({
        query: createPost,
        variables: { input: postInfo },
        authMode: "AMAZON_COGNITO_USER_POOLS",
      }); // updated
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updatePosts([
        ...posts,
        { ...postInfo, image: formState.file, owner: username },
      ]); // updated
      updateFormState((currentState) => ({ ...currentState, saving: false }));
      updateOverlayVisibility(false);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  const Image = ({ src, alt, fallback }) => {
    const [ error, setError ] = useState();

    const onError = () => {
      setError(true);
    };
    return error ? fallback : <img src={ src } alt={ alt } onError={ onError } />;
  };

  function onClose() {
    setIsOpen(false);
  }
  return (
    // <Container>
    //   <Flex mb="2em">
    //     <Button
    //       as={ IconButton }
    //       icon={ <SmallAddIcon /> }
    //       bg={ useColorModeValue('gray.100', 'gray.600') }
    //       color="gray.400"
    //       p={ '0' }
    //       onClick={ () => {
    //         setOverlay(<Overlay />);
    //         setIsOpen(true);
    //       } }
    //     ></Button>

    //     <Modal
    //       isCentered
    //       onClose={ onClose }
    //       isOpen={ isOpen }
    //       motionPreset="slideInBottom"
    //     >
    //       { overlay }
    //       <ModalOverlay />
    //       <ModalContent>
    //         <ModalHeader color={ useColorModeValue('gray.500', 'white') }>
    //           Create Post
    //         </ModalHeader>
    //         <ModalCloseButton color={ 'gray.500' } />
    //         <ModalBody>
    //           <form onSubmit={ handleSubmit }>
    //             <Box px="2" borderRadius="lg">
    //               <Container p={ '0' }>
    //                 <Flex mb="1">
    //                   <Spacer />
    //                 </Flex>
    //               </Container>

    //               <Container centerContent pt="3">
    //                 <Stack spacing={ 3 }>
    //                   <Box>
    //                     <Input
    //                       id="input-style"
    //                       placeholder="name"
    //                       name="name"
    //                       size={ 'sm' }
    //                       color={ useColorModeValue('gray.400', 'white') }
    //                       minW={ '250px' }
    //                       className="post-name"
    //                       onChange={ onChangeText }
    //                     />
    //                   </Box>

    //                   <Box>
    //                     <Textarea
    //                       id="input-style"
    //                       placeholder="Description"
    //                       name="description"
    //                       color={ useColorModeValue('gray.400', 'white') }
    //                       size={ 'sm' }
    //                       className="post-description"
    //                       minH={ '100px' }
    //                       onChange={ onChangeText }
    //                     />
    //                   </Box>

    //                   <Box className="image-upload" w="100%">
    //                     <label for="file-input">
    //                       <Icon
    //                         className="img"
    //                         color="#8dbae8"
    //                         w={ 6 }
    //                         h={ 6 }
    //                         as={ BiImageAdd }
    //                       />
    //                     </label>
    //                     <input
    //                       id="file-input"
    //                       type="file"
    //                       onChange={ onChangeFile }
    //                     />
    //                   </Box>

    //                   { formState.file && (
    //                     <Image
    //                       borderRadius={ 'lg' }
    //                       boxSize="200px"
    //                       objectFit="cover"
    //                       src={ formState.file }
    //                       alt="Preview"
    //                     />
    //                   ) }
    //                 </Stack>
    //               </Container>
    //             </Box>
    //           </form>
    //         </ModalBody>
    //         <ModalFooter>
    //           <Btn
    //             colorScheme="blue"
    //             title="save"
    //             id="save"
    //             mr={ 3 }
    //             onClick={ save }
    //           >
    //             Save
    //           </Btn>
    //           { formState.saving && (
    //             <Box id="spinner">
    //               <Spinner
    //                 id="loading"
    //                 thickness="4px"
    //                 speed="0.65s"
    //                 emptyColor="gray.200"
    //                 color="blue.500"
    //                 size="xl"
    //               />
    //             </Box>
    //           ) }
    //         </ModalFooter>
    //       </ModalContent>
    //     </Modal>
    //   </Flex>
    // </Container>

    <Container w='100%' display='flex' justifyContent='center' >
      <Container maxW='350px' position='absolute' top='10%'>
        <Box borderRadius='lg' boxShadow='xl' p='3' bg='white'>
          <Flex>
            <Spacer />
            <Button
              size='sm'
              as={ IconButton }
              icon={ <SmallCloseIcon /> }
              type="cancel"
              title="cancel"
              color='gray.400'
              onClick={ () => {
                updateOverlayVisibility(false)
              }
              }

            />
          </Flex>

                     
                <Box>
                  <Input
                    my='2'
                    size='sm'
                    placeholder="name"
                    name="name"
                    onChange={ onChangeText }
                  />
                </Box>
                <Box>
                  <Textarea
                    mb='2'
                    size='sm'
                    placeholder="Description"
                    name="description"
                    className="post-description"
                    onChange={ onChangeText }
                  />
                </Box>

                <Box className="image-upload" w="100%">
                  <label for="file-input">
                    <Icon
                      className="img"
                      color="#8dbae8"
                      w={ 6 }
                      h={ 6 }
                      as={ BiImageAdd }
                    />
                  </label>
                  <input
                    id="file-input"
                    type="file"
                    onError={ e => (e.target.style.display = 'none') }
                    onChange={ onChangeFile }
                  />
                </Box>
                { formState.file && (
                  <Image
                    m='0.5,auto'
                    borderRadius={ 'lg' }
                    boxSize="250px"
                    objectFit="cover"
                    src={ formState.file }
                    alt="Preview"
                  />) }
                <Button mt='2' size='sm' bg='#99bce3' color='white'
                  title="save" onClick={ save }>save</Button>
                { formState.saving && (
                  <p>Saving post...</p>
                ) }
       
        </Box>

      </Container>

    </Container>
  );
}

