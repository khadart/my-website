import React from "react";
export const NavBar = () => {
  return (
      <div className="main">
    <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="logo">&#60;</span>
            <span className="logo-name">Khadar Basha </span>
            <span className="logo">&#8725;&#62;  </span>
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
                <a className="nav-link active" href="#about ">
                  AboutMe
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" href="#skills">
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
