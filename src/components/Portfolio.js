import React from "react";

function Portfolio() {
  return (
    <div>
      <section id="portfolio" className="jobs">
        <p className="projects">-My Projects-</p>
        <div className="container-fluid">
          <div className="row row-1">
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/homepage.png)" }}
                className="item-wrap work"
              >
                <a href="https://github.com/JacquelineHockin/aloHa">
                  <div>
                    <h3 className="projectTitle">aloHa</h3>
                    <p>
                      {" "}
                      A social media application built to help users connect
                      with their community to reach out and help the local
                      houseless. MongoDB, Mongoose, Expressjs, Nodejs, webpack,
                      Babel, nodemon, React, React-boot-strap
                    </p>
                  </div>
                </a>
              </div>
              ;{" "}
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/sign_up_photo.jpeg)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Tap Into Source</h3>
                  <p>
                    Node.js, Handlebars, Express, Sequelize, Bootsrap, Jquery
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/doges.webp)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Doges & Dad Jokes</h3>
                  <p> HTML, JavaScript, CSS, Bulma, 2 public API's </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/calender.jpeg)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Dynamic Calender</h3>
                  <p> HTML, CSS, Jquery, Moment </p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/weatherstack-forecast.gif)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Weather Dashboard</h3>
                  <p> HTML, CSS, Bootstrap, Jquery, Openweather API</p>
                </div>
              </div>
              ;{" "}
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/employee-tracker.png)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Employee Tracker</h3>
                  <p>Node, Inquirer, MYSQL</p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/redme-gen.png)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> README Generator</h3>
                  <p>Node.js</p>
                </div>
              </div>
            </div>
            <div className="col">
              {" "}
              <div
                style={{ backgroundImage: "url(/note-taker.png)" }}
                className="item-wrap work"
              >
                {" "}
                <div>
                  <h3 className="projectTitle"> Note Taking App</h3>
                  <p>Node.js, Express </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
