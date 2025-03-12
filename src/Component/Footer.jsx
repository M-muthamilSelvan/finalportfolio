import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p className="footer-text">
          © {new Date().getFullYear()} Muthamil Selvan. All rights reserved.
        </p>
        <p className="footer-text">
          Made with ❤️ by{" "}
          <a href="#">Tamil</a>
        </p>
        <div className="social-icons">
          <a
            href="https://github.com/M-muthamilSelvan"
            className="hover:text-[#fe5617]"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muthamilselvan2003"
            className="hover:text-[#fe5617]"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/m0to_pilot/?hl=en"
            className="hover:text-[#fe5617]"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
