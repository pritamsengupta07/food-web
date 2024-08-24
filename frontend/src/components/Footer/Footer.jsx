import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { useState } from "react";

const URL = "http://localhost:3000/api/form/contact";
const Footer = () => {
  const [contact, setcontact] = useState({
    username: "",
    email: "",
    message: "",
  });

  // The handleInput function is used to update contact state
  const handleInput = (e) => {
    setcontact({
      ...contact,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(contact),
      });

      if (response.ok) {
        alert("Sent successfully");
        setContact({ username: "", email: "", message: "" });
      } else {
        alert("Failed to send");
        console.log("Failed to send");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className='footer-content-left'>
          <img src={assets.logo} alt="" srcset="" />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis libero quas recusandae, placeat hic, autem eos molestiae praesentium officia  </p>
          <div className="footer-social-icons">
            <img src={assets.linkedin} alt="" />
            <img src={assets.email} alt="" />
            <img src={assets.insta} alt="" />
          </div>
        </div>
        <div className='footer-content-center'>
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>

        </div>
        <div className='footer-content-right'>
          <h1 className="main-heading">contact us</h1>
        
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/images/contact.png" alt="we are always ready to help" />
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>
      </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 - All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
