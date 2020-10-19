import React from "react";
import "./about.scss";
import { SocialIcon } from "react-social-icons";

const About = ({ match }) => (
  <div className="about-me">
    <div className="poster">
      <br />
      <div className="explore">Hi! I'm Kareem</div>
      <div className="proj">About Me.</div>
    </div>
    <div className="part1">
      <div className="ill-pic"></div>
      <div className="section-1">
        <div className="left-pane"></div>
        <div className="right-pane">
          <div className="passion">
            <span>Coding is my passion</span>
            <h2 className="know-me">
              Get To
              <br />
              Know Me
            </h2>
            <p className="intro-me">
              My name is Kareem Muhammad Ali
              <br />
              I'm located in Egypt and I'm self-taught
              <br /> Font-end web developer I love coding
              <br /> and tech stuff, I`d like to believe that I'm
              <br /> smart, I'm positive person who is dreaming
              <br /> of a better future and hoping of a good life
              <br />I wish to relocate and live in different places
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className="part2">
      <br />
      <div className="exp">
        <span className="per">Practice Makes Perfect</span> <br />
        <strong>Junior Front-end Web Developer</strong>
      </div>
      <div className="self">
        <div className="more">
          Good To Know
          <p className="p2">
            I'm passionate about coding so I decided to shift career, and
            started learning programming on self-paced manner since 2019
          </p>
          <hr className="divider1" />
        </div>
        <div className="develop">
          Work Experience
          <p className="p3">
            Working as Freelancer also I'm passionate and motivated about
            coding, skilled in what I learnt, quick learner and eager to learn
            more
          </p>
          <hr className="divider2" />
        </div>
        <div className="edu">
          Education
          <p className="p4">
            Degree: Bachelor Of Commerce
            <br />
            Major: Accounting
            <br />
            University: Aswan-University
            <br />
            GPA: 3.1
          </p>
          <hr className="divider3" />
        </div>
      </div>
    </div>
    <div className="part3">
      <br />
      <div className="coding-pic"></div>
      <br />
      <div className="my-skills">
        <br />
        <div className="title-skills">
          <span className="per">Knowledge Is Everything</span> <br />
          <strong>My Skills</strong>
          <br />
          <span className="soft-skills">Soft Skills</span>
        </div>
        <br />
        <div className="skills">
          <div className="more">
            Web Dev.
            <p className="p2">
              HTML, CSS, SCSS, JavaScript, ES6, React, React-Redux, Firebase,
              Hooks, Context-API Redux-Saga, GraphQL, Apollo Redux-Thunk, Git
            </p>
          </div>
          <div className="develop">
            UX/UX Design
            <p className="p3">Adobe Xd, Figma, Photoshop</p>
          </div>
          <div className="edu">
            Other Skills
            <p className="p4">Proplem solving, Quick learning, Team work</p>
          </div>
        </div>
      </div>
    </div>
    <div className="part4">
      <br />
      <div className="extra-stuff">
        <span className="per">More about me</span> <br />
        <strong>Extra Stuff</strong>
        <p className="per">
          Main interests and activities I like and do so often
        </p>
      </div>
      <br />
      <div className="hobbies">
        <div className="misc">
          <div className="hobby-name">
            Reading
            <p className="hobby">
              I like reading books, espicially novels in fantasy, horror,
              science fiction, adventure and detective fiction
            </p>
            <hr className="divider2" />
          </div>
          <div className="hobby-name">
            Music
            <p className="hobby">
              Piano is my relaxing music, I like Mozart and Bethoven. I listen
              to relaxing music alot to help me meditatation
            </p>
            <hr className="divider2" />
          </div>
        </div>
        <div className="misc">
          <div className="hobby-name">
            Travel
            <p className="hobby">
              Travelling is one of my favourite things, I visited many places
              inside my country and I`d like to go around the world
            </p>
            <hr className="divider2" />
          </div>
          <div className="hobby-name">
            Sport
            <p className="hobby">
              I love to do workouts from time to time, I used to play fitness
              for long time, I like cardio and bodybuilding too
            </p>
            <hr className="divider2" />
          </div>
        </div>
      </div>
    </div>
    <div className="cv">
      <span className="resume-link">Here is the link to my resume </span>
      <SocialIcon url="https://drive.google.com/file/d/1J1XR1TrdbNvmfwCyZU8GnC8_jZqBJ7cw/view?usp=sharing" />
    </div>
  </div>
);

export default About;
