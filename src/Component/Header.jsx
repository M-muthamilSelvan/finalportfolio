import { useState } from "react"; 
import { FaGithub, FaLinkedin, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import "../index.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!isMenuOpen);

  return (
    <header className="header-container">
      <h1 className="header-title">Muthamil Selvan</h1>

      <div className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>

      
      <nav className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <Link to="home" smooth={true} duration={500} className="nav-link" >
          Home
        </Link>
        <Link to="about" smooth={true} duration={500} className="nav-link" >
          About
        </Link>
        <Link to="project" smooth={true} duration={500} className="nav-link" >
          Project
        </Link>
        <Link to="contact" smooth={true} duration={500} className="nav-link" >
          Contact
        </Link>
      </nav>

      <div className="social-icons">
        <a
          href="https://github.com/M-muthamilSelvan"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/muthamilselvan2003"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.instagram.com/m0to_pilot/?hl=en"
          target="_blank"
          rel="noopener noreferrer"
          className="social-link"
        >
          <FaInstagram />
        </a>
      </div>
    </header>
  );
};

export default Header;
