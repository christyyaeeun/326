//App.js

import React, { useState, useEffect } from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import { withAuthenticator } from "@aws-amplify/ui-react";
import { css } from "@emotion/css";
import { API, Storage, Auth } from "aws-amplify";
import "@aws-amplify/ui-react/styles.css";
import { listPosts } from "./graphql/queries";
import "./styles/App.css";
import Posts from "./Posts";
import Post from "./Post";
import Header from "./Header";
import Toggle from "./Toggle";

import CreatePost from "./CreatePost";
import Button from "./Button";

function Router({ user, signOut }) {
  /* create a couple of pieces of initial state */
  const [showOverlay, updateOverlayVisibility] = useState(false);
  const [posts, updatePosts] = useState([]);
  const [myPosts, updateMyPosts] = useState([]);

  /* fetch posts when component loads */
  useEffect(() => {
    fetchPosts();
    checkUser(); // new function call

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchPosts() {
    /* query the API, ask for 100 items */
    let postData = await API.graphql({
      query: listPosts,
      variables: { limit: 100 },
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
  async function checkUser() {
    const user = await Auth.currentAuthenticatedUser();
    console.log("user:", user);
    console.log("user attributes: ", user.attributes);
  }

  async function setPostState(postsArray) {
    const user = await Auth.currentAuthenticatedUser();
    const myPostData = postsArray.filter((p) => p.owner === user.username);
    updateMyPosts(myPostData);
    updatePosts(postsArray);
  }
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className="container">
        <HashRouter>
          <div className={`${darkMode && "dark-mode"}`}>
            <Toggle handleToggleDarkMode={setDarkMode} />
            <div className={contentStyle}>
              <Header />
              <h5>welcome {user.username} </h5>
              <hr className={dividerStyle} />
              <Button
                title="New Post"
                onClick={() => updateOverlayVisibility(true)}
              />
              <Switch>
                <Route exact path="/">
                  <Posts posts={posts} />
                </Route>
                <Route exact path="/myposts">
                  <Posts posts={myPosts} />
                </Route>

                <Route path="/post/:id">
                  <Post />
                </Route>
              </Switch>
            </div>
          </div>
          <button onClick={signOut}>Sign out</button>
        </HashRouter>
        {showOverlay && (
          <CreatePost
            updateOverlayVisibility={updateOverlayVisibility}
            updatePosts={setPostState}
            posts={posts}
          />
        )}
      </div>
    </>
  );
}

const dividerStyle = css`
  margin-top: 15px;
`;

const contentStyle = css`
  min-height: calc(100vh - 45px);
  padding: 0px 40px;
`;

export default withAuthenticator(Router);
