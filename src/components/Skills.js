import React from "react";
import { aboutSection } from "../constents";

export const Skills = () => {
  return (
    <div className="skill-main" id="skills">
      {aboutSection.map((item, index) => (
        <div className="skill-image">
            <img  src={item.image}  />
            <div className="skill-text">
              <h3>{item.title}</h3>
            </div>
       
        </div>
      ))}
    </div>
  );
};
