import React from "react";

import "./portfolio.scss";
import Data from "./projects-data";

const Portfolio = () => (
  <div className="portfolio">
    <div className="poster">
      <br />
      <div className="explore">Feel free to explore</div>
      <div className="proj">Projects.</div>
    </div>
    <div className="templates-container">
      {Data.map((item) => (
        <div className="project-template">
          <div className="container">
            <img className="image" src={item.image} alt="" />
          </div>
          <div className="details">
            <h4 className="h4">Project: {item.name} </h4>
            <h5 className="h5">
              Tech Used: {item.tech}
              <br />
              For state management: {item.state_management}
              <br />
              For styling: {item.styling}
              <br />
              Authintication: {item.Authintication}
            </h5>
            <div className="ref">
              <div className="git-url">
                URL:
                <a className="a" href={item.url}>
                  {item.url}
                </a>
              </div>
              <div className="project-url">
                Code:
                <a className="a" href={item.code}>
                  {item.code}
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Portfolio;
