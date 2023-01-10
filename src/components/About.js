import React from "react";

function About() {
  return (
    <section id="aboutMe" className="my-5 intro">
      <p class="me1">Hi there! My name is Haley Trumbo.</p>

      <div class=" flex-row wrapper">
        <div class="intro-img">
          <img id="profPic" src="IMG_2891.png" alt="prof-pic" />
          <p class="me">
            I am a multidisciplinary developer from the SF bay area, currently
            based out of Honolulu, HI. I am newly graduated from UC Berkeley's
            full-stack bootcamp and I have a passion for creative and engaging
            user interfaces, and applications that provide a helpful service. In
            my spare time you can find me somewhere in the mountains or the
            ocean, or curled up playing Zelda at home (patiently waiting for the
            2023 release!). New in the industry, I'm excited to be a part of a
            team and turn my skills into a career. I'm also looking forward to
            finding ways to use my skills in software development to contribute
            to social causes i feel passionately about. From climate change and
            conservation, to houselessness, health care availability and civil
            and womens rights - I'm hoping i can use my skills in coding to give
            back. Feel free to drop me a line with any questions or opportunites
            😊
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
