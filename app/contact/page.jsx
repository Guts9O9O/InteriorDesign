// export default function Contact() {
//     return (
//         <div>
//             <h1>Contact Us</h1>
//             <p>Phone: 555-555-5555</p>
//             <p>Email:
//             </p>
//         </div>
//     );
// }

"use client";

import React, { useState } from 'react';
import Image from 'next/image'; // if you're using Next.js for handling images

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for contacting us!');
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-container">
      <div className="contact-left">
        {/* Replace with your own image source */}
        <Image
          src="/image/cont.jpg" // Replace with actual image path
          alt="Contact Us"
          width={500}
          height={500}
          className="contact-image"
        />
      </div>
      <div className="contact-right">
        <h1>Contact Us</h1>
        <p>
          Were here to assist you. Please fill out the form, and we'll get back to you as soon as possible.
        </p>
        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your name"
          />
          
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label>Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            placeholder="Enter your message"
          />

          <button type="submit">Submit</button>
        </form>
      </div>

      <style jsx>{`
        .contact-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 2rem;
          gap: 3rem;
        }

        .contact-left {
          flex: 1;
          display: flex;
          justify-content: center;
        }

        .contact-image {
          max-width: 100%;
          height: auto;
          border-radius: 8px;
        }

        .contact-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 1.5rem;
          max-width: 500px;
        }

        .contact-right h1 {
          font-size: 2rem;
          margin-bottom: 1rem;
        }

        .contact-right p {
          color: #555;
          margin-bottom: 2rem;
        }

        .contact-right form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 100%;
        }

        .contact-right label {
          font-size: 1rem;
          color: #333;
        }

        .contact-right input,
        .contact-right textarea {
          padding: 0.75rem;
          border: 1px solid #ddd;
          border-radius: 8px;
          width: 100%;
          font-size: 1rem;
        }

        .contact-right button {
          padding: 1rem;
          border: none;
          border-radius: 8px;
          background-color: #007bff;
          color: #fff;
          font-size: 1rem;
          cursor: pointer;
        }

        .contact-right button:hover {
          background-color: #0056b3;
        }
      `}</style>
    </div>
  );
};

export default ContactUs;
