import React from "react";

function About() {
  return (
    <section id="aboutMe" className="my-5 intro">
      <p class="me1">Hi there! My name is Haley.</p>

      <div class=" flex-row wrapper">
        <div class="intro-img">
          <img id="profPic" src="IMG_2891.png" alt="prof-pic" />
          <p class="me">
            I am a Full Stack Web Developer from the SF bay area, currently
            based out of Honolulu, HI. Experienced in various web development
            tools such as HTML/CSS, Javascript, React, Mongodb, and Express.js
            with a full stack development certificate from UC Berkeley. Inspired
            by accesible, human-centred and useful applications with a drive for
            problem solving and collaboration. In my spare time you can find me
            somewhere in the mountains or the ocean, or curled up playing Zelda
            at home. I'm always looking for ways to use my skills in web
            development to contribute to my community. From climate change and
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
