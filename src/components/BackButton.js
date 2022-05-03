import React from "react";
import { useHistory } from "react-router-dom";
import { IconButton, Container } from '@chakra-ui/react'
import { ChevronLeftIcon } from "@chakra-ui/icons";

export const BackButton = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack()
    }

    return (
<Container py='2'>
            <IconButton w='10' height='10' color='gray.400' aria-label='Search database' onClick={ goBack } icon={ <ChevronLeftIcon /> } />

</Container>
    )
}

