import React from 'react'
import '../styles/sass/Contact.scss'

const Contact = () => {
  return (
    <div className="contact component__space" id="Contact">
    
            <div className="contact__box">
                <div className="contact__meta">
                    <h1 className="hire__text">Contact Us.</h1>                   
                </div>

                <div className="input__box">
                   <input type="text" className="contact name" placeholder="First name" />
                   <input type="text" className="contact email" placeholder="Last Name" />
                   <input type="text" className="contact subject" placeholder="Email Address" />
                   <textarea name="message" id="message" placeholder="Write Your message"></textarea>
                   <button >Submit</button>
                </div>
            </div>
        </div>
  )
}

export default Contact