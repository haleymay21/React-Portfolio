import React from "react";
import { BsCloudDownload } from "react-icons/bs";
import myResume from "../assets/Resume1.docx.pdf";

function Resume() {
  return (
    <div>
      <section id="resume" className="download-intro">
        <h1 class="resumeTitle">Download My Resume</h1>
        <a href={myResume} className="download-logo" size="100x">
          <BsCloudDownload />
        </a>
      </section>
    </div>
  );
}

export default Resume;
