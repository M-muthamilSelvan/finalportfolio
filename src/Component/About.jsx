

import {
    FaHtml5,
    FaCss3Alt,
    FaJsSquare,
    FaReact,
    FaGithub,
    FaGitAlt,
    FaFigma,
    FaNode,
  } from "react-icons/fa";
  
  import {
    SiTailwindcss,
    SiBootstrap,
    SiExpress,
    SiNetlify,
    SiMongodb,
  } from "react-icons/si";
  
  import { DiVisualstudio } from "react-icons/di";
  
  const About = () => {
    return (
      <div id="about">
        <div className="about-container">
          {/* Header */}
          <h1 className="about-header">About Me</h1>
  
          {/* About Me Section */}
          <p className="about-text">
            I’m <span>Muthamil Selvan</span>,
            "I am a passionate MERN Stack Developer with a strong foundation in web
            development. I specialize in creating dynamic, responsive, and
            user-friendly web applications using technologies like MongoDB,
            Express.js, React, and Node.js. I am skilled in HTML, CSS, JavaScript
            with hands-on experience in Bootstrap and SASS. I am
            eager to work on innovative projects that solve real-world problems and
            enhance user experiences."
          </p>
  
          {/* Skills Section */}
          <div className="skills-container">
            <h2 className="skills-header">My Skills</h2>
            <div className="skill-grid">
    <div className="skill-card">
      <FaHtml5 size={40} className="text-[#e34c26]" />
      <span>HTML5</span>
    </div>
    <div className="skill-card">
      <FaCss3Alt size={40} className="text-[#264de4]" />
      <span>CSS3</span>
    </div>
    <div className="skill-card">
      <FaJsSquare size={40} className="text-[#f7df1e]" />
      <span>JavaScript</span>
    </div>
    <div className="skill-card">
      <SiBootstrap size={40} className="text-[#563d7c]" />
      <span>Bootstrap</span>
    </div>
    <div className="skill-card">
      <FaReact size={40} className="text-[#61dbfb]" />
      <span>React.js</span>
    </div>
    <div className="skill-card">
      <FaNode size={40} className="text-[#68a063]" />
      <span>Node.js</span>
    </div>
    <div className="skill-card">
      <SiExpress size={40} className="text-[#000000]" />
      <span>Express.js</span>
    </div>
    <div className="skill-card">
      <FaGithub size={40} className="text-[#000000]" />
      <span>GitHub</span>
    </div>
    <div className="skill-card">
      <DiVisualstudio size={40} className="text-[#0078d7]" />
      <span>VS Code</span>
    </div>
  
  </div>
  
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  