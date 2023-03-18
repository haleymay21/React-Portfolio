import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsEnvelopeFill } from "react-icons/bs";

function Contact() {
  const form = useRef();
  const sent = document.getElementById("sent");

  function show() {
    sent.className = "show";
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_op73icq",
        "template_12j05sj",
        form.current,
        "r35M52slHPGalqSoB"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <section id="contact">
        <div className="parent-title">
          <div className="title-contact-div">
            <h1 className="title-contact">Get In Touch</h1>
          </div>
        </div>
        <form className="form" ref={form} onSubmit={sendEmail}>
          <label className="label label-name">
            Your Name
            <input
              className="name-input"
              style={{ height: "35px" }}
              type="text"
              name="user_name"
            />
          </label>
          <label className="label label-email">
            Your Email
            <input
              className="email-input"
              style={{ height: "35px" }}
              type="email"
              name="user_email"
            />
          </label>
          <label className="label textArea">Your Message </label>
          <textarea
            placeholder=""
            style={{ marginLeft: "20px", height: "100px", width: "505px" }}
            name="message"
          />
          <input
            onClick={show}
            className="button-input"
            type="submit"
            value="Send Message"
          />
          <p id="sent" className="hide">
            sent!
          </p>
        </form>
        <div className="email-icon">
          <a className="email-link" href="mailto:trumbo.haley@gmail.com">
            <BsEnvelopeFill /> trumbo.haley@gmail.com{" "}
          </a>
        </div>
      </section>
    </>
  );
}

export default Contact;
