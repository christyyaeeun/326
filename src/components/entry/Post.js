// Post.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { API, Storage } from "aws-amplify";
import { getPost } from "../../graphql/queries";
import { format } from "date-fns";
import { BackButton } from "../BackButton";
import { Box, Container, Image, Text, Flex } from '@chakra-ui/react'


export default function Post() {
  const [ loading, updateLoading ] = useState(true);
  const [ post, updatePost ] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPost() {
    try {
      const postData = await API.graphql({
        query: getPost,
        variables: { id },
      });
      const currentPost = postData.data.getPost;
      const image = await Storage.get(currentPost.image);

      currentPost.image = image;
      updatePost(currentPost);
      updateLoading(false);
    } catch (err) {
      console.log("error: ", err);
    }
  }

  if (loading) return <h3>Loading...</h3>;
  console.log("post: ", post);

  return (
    <>
      <BackButton />
      <Container display='flex' justifyContent='center'>

        <Box w='350px' p='3' boxShadow='xl' borderRadius='md'>
          <Image pt='2' alt="post" src={ post.image } />

          <Text my='2' fontSize='1.1rem' className="title">{ post.name }</Text>
          <Text my='1' fontSize='.9rem'>{ post.description }</Text>
          {/* <Text>@{ post.username }</Text> */}
          <small>{ format(new Date(post.createdAt), "MM/dd/yyyy") }</small>

        </Box>

      </Container>
    </>
  );
}

