// const Header = ({ handleToggleDarkMode }) => {
//     return (
//       <div className="header-wrapper">
//         <div class="container-fluid" id="nav">
//         <small className="heading">our lives together</small>
  
//           <button
//             onClick={() =>
//               handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
//             }
//             className="toggleMode"
//           >
//             <img src="toggle-on-solid.svg" alt="" id="toggle-on"></img>
//           </button>
  
//           </div>
//       </div>
//     );
//   };
  
//   export default Header;

import React from 'react';
import { css } from '@emotion/css';
import { Link } from 'react-router-dom';

export default function Footer() {
  
  return (
    <div className="footer">
      <Link to="/" className={linkStyle}>home</Link>
      <Link to="/myposts" className={linkStyle}>idk</Link>
    </div>
  )
}



const linkStyle = css`
  color: black;
  font-weight: bold;
  text-decoration: none;
  margin-right: 10px;
  \:hover {
    color: #709de1;

  }
`
