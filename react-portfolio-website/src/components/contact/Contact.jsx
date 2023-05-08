import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsLinkedin} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  /* Function to send the email when user presses submit on the form */
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_p30ntp7', 'template_2prdqdd', form.current, 's4w4-5twKKeR8arpU')

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      {/* Create specific class for contact section */}
      <div className="container contact__container">

        {/* This class handles the left side of the section with contact options */}
        <div className="contact__options">

          {/* article contains independent, self-contained content with their icons, contact method, 
          and info for contact */}
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>matthewsilva2248@gmail.com</h5>
            
            {/* mailto: redirects to an email address rather than a URL, 
            and the target is set to blank so it opens in a new tab */}
            <a href="mailto:matthewsilva2248@gmail.com" target='_blank'>Send a message</a>
          </article>

          <article className='contact__option'>
            <BsLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Matthew Silva</h5>
            <a href="https://www.linkedin.com/in/matthew-silva-115758173/" target='_blank'>Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */
        /* This form allows the users to fill out a contact message with their info */}
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Full Name' required/>
          <input type='email' name='email' placeholder='Your Email' required/>
          <textarea name='message' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact