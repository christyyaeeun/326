//App.js

import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { API, Storage, Auth } from "aws-amplify";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { listPosts } from "./graphql/queries";
import "./styles/App.css";
import Posts from "./components/entry/Posts";
import Post from "./components/entry/Post";
import { onCreatePost } from './graphql/subscriptions';
import UserProfile from './pages/UserProfile';
import CreatePost from "./components/entry/CreatePost";
import Btn from "./components/Btn";
import Home from "./pages/Home";
import { Link } from "react-router-dom";
import Navigator from "./components/Navigator";
import Paired from "./pages/paired/Paired";
import Explore from './pages/Explore'
import { LoveLanguage } from './components/cards/LoveLanguage';
import { Communication } from './components/cards/Communication';
import { Growth } from './components/cards/Growth';
import { Conflict } from './components/cards/Conflict';

import {
  Container, Box, Flex, Text, Spacer, ModalOverlay,
} from '@chakra-ui/react'

function Router({ user, signOut }) {
const userDetails = {name: ''}
  /* create a couple of pieces of initial state */
  const [ showOverlay, updateOverlayVisibility ] = useState(false);
  const [ name, setName ] = useState('');
  const [ posts, updatePosts ] = useState([]);
  const [ userPosts, updateUserPosts ] = useState([]);
  const [ isOpen, setIsOpen ] = useState(false);

  /* fetch posts when component loads */
  useEffect(() => {
    fetchPosts();
    checkUser(); // new function call

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    const userDetails = {name:'', username:''}
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
    setName(user.username);
  }

  async function fetchPosts() {
    /* query the API, ask for 100 items */
    let postData = await API.graphql({
      query: listPosts, variables: { limit: 100 },
    });
    let postsArray = postData.data.listPosts.items;

    /* map over the image keys in the posts array, get signed image URLs for each image */
    postsArray = await Promise.all(

      postsArray.map(async (post) => {
        const imageKey = await Storage.get(post.image);

        post.image = imageKey;
        return post;
      })
    );
    /* update the posts array in the local state */

    setPostState(postsArray);
  }


  async function setPostState(postsArray) {
    const user = await Auth.currentAuthenticatedUser();
    const userPostData = postsArray.filter((p) => p.owner === user.username);
    updateUserPosts(userPostData);
    updatePosts(postsArray);
  }


  function subscribe() {
    API.graphql({
      query: onCreatePost
    })
      .subscribe(() => fetchPosts())
  }

  useEffect(() => {
    fetchPosts();
    const subscription = subscribe();
    return () => subscription();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function onClose() {
    setIsOpen(false);
  }

  return (
    <>
      <ChakraProvider theme={ theme }>
        <div>
          <HashRouter>
            <Navigator />
            <Container>
              <Flex alignItems='center' py='3'>
                <Spacer />
                <Btn id="new-post"
                  title="+"
                  onClick={ () => {
                    updateOverlayVisibility(true)
                  } }
                />
              </Flex>


              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route exact path="/posts">
                  <Posts posts={ posts } />
                </Route>


                <Route exact path="/paired">
                  <Paired />
                </Route>
                <Route exact path="/Explore">
                  <Explore />
                </Route>


                <Route exact path="/userposts">
                  <Posts posts={ userPosts } />
                </Route>
                <Route path="/post/:id">
                  <Post />
                </Route>
                <Route component={ UserProfile } />

              </Switch>
            </Container>
          </HashRouter>

          { showOverlay && (
            <CreatePost
              updateOverlayVisibility={ updateOverlayVisibility }
              updatePosts={ setPostState }
              posts={ posts }

            />
          ) }
        </div>
      </ChakraProvider >
    </>
  );
}


export default withAuthenticator(Router);
