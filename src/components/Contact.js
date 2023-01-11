import React, { useState } from "react";

// import helper function that checks if email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
  // setting initial values of input fields to an empty string
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInputChange = (e) => {
    // Gets the value of the input
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    // set state of input type
    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "userName") {
      setUserName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  // functionto validate inputs
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !userName) {
      setErrorMessage("Email or Name is invalid");
      return;
    }

    if (!setMessage(message)) {
      setErrorMessage(`Message is required.`);
      return;
    }

    // clear out input after submission.
    setUserName("");
    setMessage("");
    setEmail("");
  };

  return (
    <section id="reach-out" className="contact">
      <h2 className="section-title secondary-border">Reach Out!</h2>

      {/* contact form section  */}
      <div className="contact-form">
        <h3>Contact Me</h3>
        <form className="form">
          {/* Name */}
          <label className="label" for="contact-name">
            Your Name:
          </label>
          <input
            value={userName}
            name="userName"
            onChange={handleInputChange}
            type="text"
            id="contact-name"
            placeholder="Your Name"
          />
          <label className="label" for="contact-email">
            Your Email:
          </label>
          <input
            value={email}
            name="email"
            onChange={handleInputChange}
            type="email"
            id="contact-email"
            placeholder="Your Email"
          />
          {/* Message */}
          <label className="label" for="contact-message">
            Message:
          </label>
          <textarea
            value={message}
            name="message"
            onChange={handleInputChange}
            type="message"
            id="contact-message"
            placeholder="Your Message"
          />
          <button type="button" onClick={handleFormSubmit}>
            Submit
          </button>
        </form>
        {errorMessage && (
          <div class="errormsg">
            <p className="error-text">{errorMessage}</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Contact;
