import React from 'react';
import { css } from '@emotion/css';

export default function Button({
  title, onClick, type = "action"
}) {
  return (
    <button id="btn-new" className={buttonStyle(type)} onClick={onClick}>
      { title }
    </button>
  )
}

const buttonStyle = type => css`
  background-color: ${type === "action" ?  "#96addb" : "#2a2a2c"};
  
  \:hover {
    background-color: #363636;
  }
`
