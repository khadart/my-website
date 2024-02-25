import React from "react";
import contact from "../contact.jpg";
export const ContactMe = () => {
  return (
    <div className="container" id="contact-me">
      <div className="row">
        <div className="col-md-8 col-xs-12">
          <h1>Contact Me &#xf87b;</h1>
          <a className="contact-common" href=" +91 7013903020">
            +91 7013903020
          </a>
          <br></br>
          <a className="contact-common" href="mailto:khadarthonduru@gmail.com">
            khadarthonduru@gmail.com
          </a>
        </div>
        <div className="col-md-4 col-xs-12">
          <img className="img-fluid" src={contact} alt="Conatct-Me" />
        </div>
      </div>
    </div>
  );
};
