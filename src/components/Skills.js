import React from "react";
import { aboutSection } from "../constants";

export const Skills = () => {
  return (
    <div className="container" id="skills">
      <div className="row">
      {aboutSection.map((item, index) => (
        <div className="col-md-4 col-sm-12">
            <img className="img-fluid"  src={item.image}  />
            <div className="skill-text">
              <h3>{item.title}</h3>
            </div>
       
        </div>
      ))}
      </div>
    </div>
  );
};
