import React from "react";
import "./styles/App.css"

// function Header() {
const Toggle = ({ handleToggleDarkMode }) => {
  return (
      <div className="header-wrapper">
        <div class="container-fluid" id="nav">
          <small className="heading">our lives together</small>

          <button
            onClick={() =>
              handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
            }
            className="toggleMode"
          >
            <img src="toggle-on-solid.svg" alt="" id="toggle-on"></img>
          </button>
        </div>
      </div>
  )}

      export default Toggle;
