import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.scss";
import { IconContext } from "react-icons";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(0, 0, 0)" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <FaIcons.FaBars className="bars-icon" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li onClick={showSidebar} className="navbar-toggle">
              <Link to="#" className="menu-x">
                <AiIcons.AiOutlineClose className="x-icon" />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li onClick={showSidebar} key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <div className="just-pic"></div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
