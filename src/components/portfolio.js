import React from "react";

import "./portfolio.scss";
const Portfolio = () => (
  <div className="portfolio">
    <div className="poster">
      <br />
      <div className="explore">Feel free to explore</div>
      <div className="proj">Projects.</div>
    </div>
    <div className="project-template">
      <div className="container">
        <div className="crwn"></div>
      </div>
      <div className="details">
        <h4 className="h4">Project: crwn clothing </h4>
        <h5 className="h5">
          Tech Used: React.JS <br />
          For state management: Redux & Redux-saga
          <br />
          For navigation: React-router-dom
          <br />
          For styling: Styled Components
          <br />
          For API Calls and Authintication: Firebase
        </h5>
        <div className="ref">
          <div className="git-url">
            URL:
            <a className="a" href="https://crwn-live.herokuapp.com/">
              https://crwn-live.herokuapp.com/
            </a>
          </div>
          <div className="project-url">
            Code:
            <a className="a" href="https://github.com/kimo2121/Crwn-Clothing">
              https://github.com/kimo2121/Crwn-Clothing
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="project-template">
      <div className="container">
        <div className="netflex"></div>
      </div>
      <div className="details">
        <h4 className="h4">Project: Netflix clone </h4>
        <h5 className="h5">
          Tech Used: React.JS <br />
          For state management: Hooks
          <br />
          For navigation: None
          <br />
          For styling: Css
          <br />
          For API Calls and Authintication: Axios
        </h5>
        <div className="ref">
          <div className="project-url">
            URL:
            <a className="a" href="https://netflex-clone.herokuapp.com/">
              https://netflex-clone.herokuapp.com/
            </a>
          </div>
          <div className="git-url">
            Code:
            <a className="a" href="https://github.com/kimo2121/Netflix-clone">
              https://github.com/kimo2121/Netflix-clone
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="project-template">
      <div className="container">
        <div className="lyrics"></div>
      </div>
      <div className="details">
        <h4 className="h4">Project: Lyrics finder </h4>
        <h5 className="h5">
          Tech Used: React.JS <br />
          For state management: Context API & Hooks
          <br />
          For navigation: React-router-dom
          <br />
          For styling: Css
          <br />
          For API Calls and Authintication: Axios
        </h5>
        <div className="ref">
          <div className="project-url">
            URL:
            <a className="a" href="https://high-beats.herokuapp.com/">
              https://high-beats.herokuapp.com/
            </a>{" "}
          </div>
          <div className="git-url">
            Code:
            <a className="a" href="https://github.com/kimo2121/High-beats">
              https://github.com/kimo2121/High-beats
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="project-template">
      <div className="container">
        <div className="calculator"></div>
      </div>
      <div className="details">
        <h4 className="h4">Project: Calculator </h4>
        <h5 className="h5">
          Tech Used: React.JS <br />
          For state management: Hooks
          <br />
          For navigation: None
          <br />
          For styling: Css
          <br />
          For API Calls and Authintication: None
        </h5>
        <div className="ref">
          <div className="project-url">
            URL:
            <a className="a" href="https://ca-culator.herokuapp.com/">
              https://ca-culator.herokuapp.com/
            </a>{" "}
          </div>
          <div className="git-url">
            Code:
            <a className="a" href="https://github.com/kimo2121/my-calculator">
              https://github.com/kimo2121/my-calculator
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default Portfolio;
