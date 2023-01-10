import React from "react";
import Nav from "./Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div class="homeScreen">
      <section>
        <div>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
          <div>
            <h1 id="welcome">Welcome!</h1>
            <h1 id="introduction">I'm Haley Trumbo</h1>
            <p id="softDev">
              <span class="highlight">
                &nbsp;Software Developer // Lifetime Student&nbsp;
              </span>
            </p>
          </div>
        </div>
      </section>
      <div class="diagonal"></div>
    </div>
  );
}

export default Header;
