import Navbar from "../components/Navbar";
import { useState } from "react";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Message Sent Successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <>
      <Navbar />

      <section className="page-banner">
        <h1>Contact Us</h1>
        <p>
          We'd love to hear from you.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p>
            📍 Hyderabad, Telangana
          </p>

          <p>
            📞 +91 9876543210
          </p>

          <p>
            ✉ info@autoshow.com
          </p>

          <p>
            🕒 Mon - Sat : 9AM - 8PM
          </p>

        </div>

        <form
          className="contact-form"
          onSubmit={handleSubmit}
        >

          <input
            type="text"
            placeholder="Enter Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />

          <input
            type="email"
            placeholder="Enter Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            placeholder="Enter Phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />

          <textarea
            rows="5"
            placeholder="Enter Message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>
    </>
  );
}

export default Contact;