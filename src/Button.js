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
  background-color: ${type === "action" ? "#2a2a2c" : "#96addb"};
  height: 40px;
  width: 100px;
  font-weight: 600;
  font-size: 16px;
  color: white;
  border-radius: 4px;
  outline: none;
  border: none;
  margin-top: 15px;
  cursor: pointer;
  \:hover {
    background-color: #363636;
  }
`
