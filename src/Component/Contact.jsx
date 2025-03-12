import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3_FORM_API,
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSuccess(false);
      }
    } catch (error) {
      setSuccess(false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="text-center">
          <h2 className="title">Get in touch</h2>
        </div>

        <div className="flex flex-col items-center md:flex-row gap-[150px] justify-center">
          <div className="contact-info">
            <div className="flex items-center gap-3">
              <FaLocationDot size={20} />
              <span>Kallakurichi, Tamil Nadu</span>
            </div>
            <div className="flex items-center gap-3">
              <FaPhoneAlt size={20} />
              <span>8610899376</span>
            </div>
            <div className="flex items-center gap-3">
              <FaEnvelope size={20} />
              <span>muthamilselvan1821@gmail.com</span>
            </div>
            <div className="social-media">
              <h2>Follow on</h2>
              <div className="flex gap-4">
                <a href="https://github.com/M-muthamilSelvan">
                  <FaGithub size={29} />
                </a>
                <a href="https://www.linkedin.com/in/muthamilselvan2003">
                  <FaLinkedin size={29} />
                </a>
                <a href="https://www.instagram.com/m0to_pilot/?hl=en">
                  <FaInstagram size={29} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="contact-form">
            <h2>Send a Message</h2>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
            {success === true && <p className="success-message">Message sent successfully!</p>}
            {success === false && <p className="error-message">Failed to send the message. Try again.</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
