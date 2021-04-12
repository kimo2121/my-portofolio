import React, { useState } from "react";
import FormInput from "./form-input";
import "./contact.scss";
import { SocialIcon } from "react-social-icons";
import emailjs from "emailjs-com";

const Contact = () => {
  const user = { name: "", email: "", subject: "" };
  const [input, setInput] = useState(user);
  const inputHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const [msg, setMessage] = useState("");
  const msgHandler = (e) => {
    setMessage(...msg, e.target.value);
  };
  function Send(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_brokrur",
        "template_gqthb5p",
        e.target,
        "user_GaIetTwZAavFtxpJ4xkdk"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    setInput(user);
    e.target.reset();
  }

  return (
    <div className="contact">
      <div className="poster">
        <br />
        <div className="explore">Get In Touch</div>
        <div className="proj">Contact Me.</div>
      </div>
      <div className="section2">
        <br />
        <div className="want-project">
          <strong>
            Want A Project Or Need Consultant
            <br />
            Drop Me A Line
          </strong>
        </div>
        <br />
        <br />
        <br />
        <div className="self">
          <div className="more">
            Email Address
            <p className="p2">kareem.gaad@gmail.com</p>
            <hr className="divider" />
          </div>
          <div className="develop">
            Mobile Number
            <p className="p3">(002)-01153530030</p>
            <hr className="divider" />
          </div>
          <div className="edu">
            Address
            <p className="p4">Aswan, Egypt</p>
            <hr className="divider" />
          </div>
        </div>
      </div>
      <div className="drop-line">
        <div className="social-links">
          <span className="last-text">
            It's a pleasure to communicate with
            <br />
            you, feel free to reach me out by
            <br />
            LinkedIn, Facebook, What's App,
            <br />
            and you can find me on Github also
          </span>
          <div className="links">
            <SocialIcon url="https://www.linkedin.com/in/kareem-muhammad-547302155/" />
            <SocialIcon url="https://www.facebook.com/kareem.muhammad.3597" />
            <SocialIcon url="https://wa.me/201153530030" />
            <SocialIcon url="https://github.com/kimo2121" />
          </div>
        </div>
        <div className="write-down">
          <div className="honor">
            Write
            <br />
            Me
            <p className="write-me">Time to communicate</p> <br />
          </div>
          <br />
          <form onSubmit={Send} className="fill-out">
            <div className="comm">
              <div className="name-fill">
                <FormInput
                  name="name"
                  type="name"
                  onChange={inputHandler}
                  value={input.name}
                  label="Name"
                  required
                />
              </div>
              <div className="email-fill">
                <FormInput
                  name="email"
                  type="email"
                  value={input.email}
                  onChange={inputHandler}
                  label="Email"
                  required
                />
              </div>
              <div className="subject-fill">
                <FormInput
                  name="subject"
                  type="name"
                  value={input.subject}
                  onChange={inputHandler}
                  label="Subject"
                  required
                />
              </div>
            </div>
            <div>
              <textarea
                className="msg"
                name="message"
                type="message"
                value={msg.message}
                onChange={msgHandler}
                placeholder="Message"
                required
              />
            </div>
            <br />
            <button type="submit" onSubmit={Send} className="submit-button">
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="comm">
        <div className="background"></div>
      </div>
    </div>
  );
};

export default Contact;
