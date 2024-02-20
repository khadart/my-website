import React from "react";
import kb from "../kb.png";

export const NavBar = () => {
  return (
      <div className="main">
    <nav className="navbar navbar-expand-lg p-1 m-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img className="logo" src={kb} alt="KB" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto justify-content-around ">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item ">
                <a className="nav-link active" href="#">
                  AboutMe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#">
                 Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active"href="#" >
                 ContactMe
                </a>
              </li>
            </ul>
          </div>
        </div>
    </nav>
      </div>
  );
};
