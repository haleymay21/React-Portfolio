import React from "react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";

function SideNav() {
  return (
    <section className="side-nav">
      <div className="social-linkss">
        <a className="githubb" href="github.com/haleymay21">
          {" "}
          <BsGithub size={55} />
        </a>
        <a className="linkedinn" href="github.com/haleymay21">
          {" "}
          <BsLinkedin size={55} />
        </a>
      </div>
    </section>
  );
}

export default SideNav;
