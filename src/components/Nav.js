import React from "react";

function Nav(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <section className="navv">
      <ul className="navv">
        <li className="navList">
          <a
            href="#about"
            onClick={() => handleTabChange("About")}
            // Check if the currentTab is `About` and set link used
            className={currentTab === "About" ? "nav-link active" : "nav-link"}
          >
            About
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
            href="#resume"
            onClick={() => handleTabChange("Resume")}
            // Check if the currentTab is `Resume` and set link used
            className={currentTab === "Resume" ? "nav-link active" : "nav-link"}
          >
            Resume
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Nav;
