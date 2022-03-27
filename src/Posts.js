// Posts.js

import React from 'react'
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function Posts({
  posts = []
}) {
  return (
    <>
      <h1>Posts</h1>
      {
        posts.map(post => (
          <Link to={`/post/${post.id}`} className={linkStyle} key={post.id}>
            <div key={post.id} className={postContainer}>
              <h1 className="title" >{post.name}</h1>
              <img alt="post" id="post-img" className={imageStyle} src={post.image} />
            </div>
          </Link>
        ))
      }
    </>
  )
}



const linkStyle = css`
  text-decoration: none;
`

const postContainer = css`
  border-radius: 10px;
  padding: 1px 20px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
  \:hover {
    border-color: #a6bbd3;
  }
`

const imageStyle = css`
  width: 100%;
  max-width: 400px;
`
