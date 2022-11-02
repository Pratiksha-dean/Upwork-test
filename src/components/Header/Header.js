import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const location = useLocation();
  return (
    <div>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarText">
            <a className="navbar-brand" href="#">
              <img src="\assests\logo.svg" alt="" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-item-div">
                  <NavLink
                    className="header-links"
                    activeClassName="active"
                    to="/dashboard"
                  >
                    Dashboard
                  </NavLink>
                </div>
                <div className="active-link-bar"></div>
              </li>
              <li className="nav-item">
                <div className="nav-item-div">
                  <NavLink
                    className="header-links"
                    activeClassName="active"
                    to="/progress"
                  >
                    Progress
                  </NavLink>
                </div>
              </li>
              <li className="nav-item">
                <div className="nav-item-div">
                  <NavLink
                    className="header-links"
                    activeClassName="active"
                    to="/team"
                  >
                    Team
                  </NavLink>
                </div>
              </li>
            </ul>

            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item chat-nav-icon">
                <div className="chat-icon">
                  <img src="\assests\chat.svg" alt="" />
                  <div className="chat-dot"></div>
                </div>
              </li>
              <li className="nav-item d-flex align-items-center">
                <img className="mx-3" src="\assests\Avatar.svg" alt="" />
                <div className="mr-3 username">Tania Sharma </div>
                <img className="mx-3" src="\assests\downarrow.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
