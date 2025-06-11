import React from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import myphoto from '../assets/photo.jpg';
import resume from '../assets/MuthamilSelvan_Resume.pdf'; 

const Home = () => {
  return (
    <div id="home">
      <div className="home-container">
        {/* Left Section */}
        <div className="left-section">
          <h1>
            I’m <span className="text">{'Muthamil Selvan'}</span>
          </h1>
          {/* About Me */}
          <p>
            "I am a passionate MERN Stack Developer with a strong foundation in web development. 
            I specialize in creating dynamic, responsive, and user-friendly web applications using 
            technologies like MongoDB, Express.js, React, and Node.js. I am skilled in HTML, CSS, JavaScript,
           with hands-on experience in Bootstrap and SASS. I am eager to work on innovative 
            projects that solve real-world problems and enhance user experiences."
          </p>

          {/* Contact Information */}
          <div className="contact-info">
            <div>
              <FaLocationDot size={20} />
              <span>Kallakurichi, Tamil Nadu</span>
            </div>
            <div>
              <FaPhoneAlt size={20} />
              <span>8610899376</span>
            </div>
            <div>
              <FaEnvelope size={20} />
              <span>muthamilselvan1821@gmail.com</span>
            </div>
          </div>

          {/* Button */}
          <a href={resume} download="MuthamilSelvan_Resume.pdf" className="download-btn">
            Download CV
          </a>
        </div>

        {/* Right Section */}
        <div className="right-section">
          <img src={myphoto} alt="myphoto" />
        </div>
      </div>
    </div>
  );
};

export default Home;
