import React from 'react';
import { css } from '@emotion/css';

export default function Button({
  title, onClick, type = "action"
}) {
  return (
    <button className={buttonStyle(type)} onClick={onClick}>
      { title }
    </button>
  )
}

const buttonStyle = type => css`
  background-color: ${type === "action" ?  "#6a9de9" : "#676d72;"};
  height: 30px;
  min-width: 30px;
  font-weight: 600;
  font-size: .8rem;
  color: white;
  border-radius: 4px;
  outline: none;
  border: none;
  cursor: pointer;
  \:hover {
    background-color: #a2b4d0;
  }
`
