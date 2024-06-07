import React, { useRef } from 'react';
import './ContactUs.css';
import emailjs from '@emailjs/browser';


const ContactUs = () => {

 
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lv4mscq', 'template_yty2emj', form.current, {
        publicKey: '99cN9XjDcH_ZRXQPq',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };




  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <form onSubmit={sendEmail} className="contact-form" ref={form}>
        <label className='name-box'>
          Name:
          <input type="text" name="user_name"  />
        </label>
        <label className='email-box'>
          Email:
          <input type="email" name="user_email"  />
        </label>
        <label className='mess-box'>
          Message
          <textarea name="message" ></textarea>
        </label>
        <input type="submit" value="Send" />
      </form>
    </section>
  );
};

export default ContactUs;
