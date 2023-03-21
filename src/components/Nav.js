import React from "react";
import { IconHexagonLetterH } from "@tabler/icons-react";
import myResume from "../assets/Resume1.docx.pdf";

function Nav(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <section className="navv">
      <ul className="navv">
        <li className="my-icon">&nbsp;&nbsp;HT&nbsp;&nbsp;</li>
        <li className="resume">
          {" "}
          <a href={myResume}>
            <p className="resume2">Resume</p>
          </a>
        </li>
        <li className="navList contact">
          <a
            href="#contact"
            onClick={() => handleTabChange("Contact")}
            // Check if the currentTab is `Contact` and set link used
            className={
              currentTab === "Contact" ? "nav-link active" : "nav-link"
            }
          >
            Contact
          </a>
        </li>

        <li className="navList">
          <a
            href="#portfolio"
            onClick={() => handleTabChange("Portfolio")}
            // Check if the currentTab is `Portfolio` and set link used
            className={
              currentTab === "Portfolio" ? "nav-link active" : "nav-link"
            }
          >
            Portfolio
          </a>
        </li>
        <li className="navList">
          <a
            href="#aboutMe"
            onClick={() => handleTabChange("About")}
            // Check if the currentTab is `About` and set link used
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
