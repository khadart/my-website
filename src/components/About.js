import React from "react";
import kz from "../kz.jpg";
const About = () => {
  return (
    <div className="container1" id="about">
      <div>
        <h1>Hello,</h1>
        <h1 className="about-text">
          I Am <span className="about-name">KhadarBasha</span>
        </h1>
      </div>
      
        <div>
          <h1 className="desc">
            Full stack developer having experiance in building applications with
            Reactjs / Nextjs / Node js / JavaScript and frameworks.
          </h1>
        </div>
        <div >
          <img className="picture"src={kz} alt="Developer" />
        </div>
      
    </div>
  );
};

export default About;
