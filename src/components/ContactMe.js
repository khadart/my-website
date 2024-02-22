import React from 'react'
import contact from '../contact.jpg'
export const ContactMe = () => {
  return (
    <div className='contact' id='contact-me'>
        <div>
        <h1>
            Contact Me 
        </h1>
        <a className='contact-common' href=' +91 7013903020'> +91 7013903020</a>
        <br>
      </br>
      <a className='contact-common' href='mailto:khadarthonduru@gmail.com'> khadarthonduru@gmail.com</a>
        </div>
        <div>
            <img className='contact-img' src={contact} alt="Conatct-Me"/>
        </div>
</div>
  )
}
