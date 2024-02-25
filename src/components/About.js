import React from "react";
import kz from "../kz.jpg";
const About = () => {
  return (
    <div className="container p-3" id="about">
      <div className="row">
        <div className="col-md-8 col-sm-12">
          <div className="d-flex flex-column">
            <div className="col-3">
              <h1>Hello,</h1>
            </div>
            <div className="offset-3 col-3">
              <h1>I Am</h1>
            </div>
            <div className="offset-6 col-6">
              <h1>Khadar Basha</h1>
            </div>
          </div>
          <div className="d-flex">
            <h1 className="desc">
              Full stack developer having experiance in building applications
              with Reactjs / Nextjs / Node js / JavaScript and frameworks.
            </h1>
          </div>
        </div>

        <div className="col-md-4 col-sm-12">
          <img className="img-fluid" src={kz} alt="Developer" />
        </div>
      </div>
    </div>
  );
};

export default About;
