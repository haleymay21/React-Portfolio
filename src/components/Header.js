import React from "react";
import Nav from "./Nav";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div class="homeScreen">
      <section>
        <div>
          <Nav currentTab={currentTab} handleTabChange={handleTabChange}></Nav>
          <div>
            <h1 id="welcome">Aloha, my name is</h1>
            <h1 id="introduction">Haley Trumbo</h1>
            <p id="softDev">
              <span class="highlight">
                &nbsp; Full-Stack Software Developer&nbsp;{" "}
              </span>
              <a className="github" href="https://github.com/haleymay21">
                <BsGithub />
              </a>
              <a
                className="linkedin"
                href="https://www.linkedin.com/in/haley-trumbo-539093256/"
              >
                {" "}
                <BsLinkedin />{" "}
              </a>
            </p>
          </div>
        </div>
      </section>

      <div class="diagonal"></div>
    </div>
  );
}

export default Header;
