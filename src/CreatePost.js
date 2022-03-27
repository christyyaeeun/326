// CreatePost.js

import React, { useState } from 'react';
import { css } from '@emotion/css';
import Button from './Button';
import { v4 as uuid } from 'uuid';
import { Storage, API, Auth } from 'aws-amplify';
import { createPost } from './graphql/mutations';

/* Initial state to hold form input, saving state */
const initialState = {
  name: '',
  description: '',
  image: {},
  file: '',
  location: '',
  saving: false
};

export default function CreatePost({
  updateOverlayVisibility, updatePosts, posts
}) {

  /* 1. Create local state with useState hook */
  const [formState, updateFormState] = useState(initialState)

  /* 2. onChangeText handler updates the form state when a user types into a form field */
  function onChangeText(e) {
    e.persist();
    updateFormState(currentState => ({ ...currentState, [e.target.name]: e.target.value }));
  }

  /* 3. onChangeFile handler will be fired when a user uploads a file  */
  function onChangeFile(e) {
    e.persist();
    if (! e.target.files[0]) return;
    const fileExtPosition = e.target.files[0].name.search(/.png|.jpg|.gif/i);
    const firstHalf = e.target.files[0].name.slice(0, fileExtPosition);
    const secondHalf = e.target.files[0].name.slice(fileExtPosition);
    const fileName = firstHalf + "_" + uuid() + secondHalf;
    console.log(fileName);
    const image = { fileInfo: e.target.files[0], name: fileName};
    updateFormState(currentState => ({ ...currentState, file: URL.createObjectURL(e.target.files[0]), image }))
  }

  /* 4. Save the post  */
  // async function save() {
  //   try {
  //     const { name, description, location, image } = formState;
  //     if (!name || !description || !location || !image.name) return;
  //     updateFormState(currentState => ({ ...currentState, saving: true }));
  //     const postId = uuid();
  //     const postInfo = { name, description, location, image: formState.image.name, id: postId };

  //     await Storage.put(formState.image.name, formState.image.fileInfo);
  //     await API.graphql({
  //       query: createPost, variables: { input: postInfo }
  //     });
  //     updatePosts([...posts, { ...postInfo, image: formState.file }]);
  //     updateFormState(currentState => ({ ...currentState, saving: false }));
  //     updateOverlayVisibility(false);
  //   } catch (err) {
  //     console.log('error: ', err);
  //   }
  // }

  async function save() {
    try {
      const { name, description, location, image } = formState;
      if (!name || !description || !location || !image.name) return;
      updateFormState(currentState => ({ ...currentState, saving: true }));
      const postId = uuid();
      const postInfo = { name, description, location, image: formState.image.name, id: postId };
  
      await Storage.put(formState.image.name, formState.image.fileInfo);
      await API.graphql({
        query: createPost,
        variables: { input: postInfo },
        authMode: 'AMAZON_COGNITO_USER_POOLS'
      }); // updated
      const { username } = await Auth.currentAuthenticatedUser(); // new
      updatePosts([...posts, { ...postInfo, image: formState.file, owner: username }]); // updated
      updateFormState(currentState => ({ ...currentState, saving: false }));
      updateOverlayVisibility(false);
    } catch (err) {
      console.log('error: ', err);
    }
  }
  

  return (
    <div className="create-post">
          <div className="create-header">
            olt
</div>
      <input id="input-style"
        placeholder="name"
        name="name"
        className="post-name"
        onChange={onChangeText}
      />
      <input id="input-style"
        placeholder=" "
        name="location"
        className="post-loca"
        onChange={onChangeText}
      />
      <input id="input-style"
        placeholder="Description"
        name="description"
        className="post-description"
        onChange={onChangeText}
      />
      <div className='img-input'>
      <input 
        type="file"
        onChange={onChangeFile}
      /></div>
      { formState.file && <img className="img-container" alt="preview" src={formState.file} /> }
      <div className="btn-container">
      <Button id="submit" title="submit" onClick={save} />
      <Button id="cancel" type="cancel" title="cancel" onClick={() => updateOverlayVisibility(false)} /></div>
      { formState.saving && <p className={savingMessageStyle}>Saving post...</p> }
    </div>
  )
}

// const inputStyle = css`
  // margin-bottom: 10px;
  // outline: none;
  // padding: 7px;
  // border: 1px solid #ddd;
  // font-size: 16px;
  // border-radius: 4px;
// `

// const imageStyle = css`
//   height: 120px;
//   margin: 10px 0px;
//   object-fit: contain;
// `

// const containerStyle = css`
//   display: flex;
//   flex-direction: column;
//   width: 400px;
//   height: 420px;
//   position: fixed;
//   left: 0;
//   border-radius: 4px;
//   top: 0;
//   margin-left: calc(50vw - 220px);
//   margin-top: calc(50vh - 230px);
//   background-color: white;
//   border: 1px solid #ddd;
//   box-shadow: rgba(0, 0, 0, 0.25) 0px 0.125rem 0.25rem;
//   padding: 20px;
// `

const savingMessageStyle = css`
  margin-bottom: 0px;
`
