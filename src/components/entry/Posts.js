// Posts.js

import React from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import { Container, Box, Image, Text } from '@chakra-ui/react'
import { BackButton } from "../BackButton";
import CreatePost from "./CreatePost";
export default function Posts({ posts = [] }) {
  return (
    <>
      {/* <BackButton /> */}

      { posts.map((post) => (
        <Link to={ `/post/${ post.id }` } key={ post.id }>

          <Container m='auto' display='flex' justifyContent='center' p='2'>
            <Box w={ '300px' } boxShadow={ 'xl' } p={ '2' } borderRadius='lg'>

              <div key={ post.id } >

                <Image
                  alt="post"
                  id="post-img"
                  src={ post.image }
                />

                <Box my='2'>

                <Text fontSize='1.1rem' color='#7892bf' >
                  @{ post.owner }
                </Text>
                <Text color='gray.600' fontSize='1rem' my='2' className="title">{ post.name } | {post.description}</Text>

                  <Text mt='3' fontSize='.8rem' letterSpacing='.1'>
                    { format(new Date(post.createdAt), "MM/dd/yyyy") }
                  </Text>

                </Box>
              </div>
            </Box>
          </Container>
        </Link>
      )) }
    </>



  )
}
