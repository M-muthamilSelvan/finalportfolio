const Project = () => {
    return (
      <div id="project" className="project-container">
      
        <h1 className="project-header">My Projects</h1>
  
        <div className="project-grid"> 
          
          <div className="project-card">
            <h1 className="project-title">Ecommerce Web Application</h1>
            <p className="project-description">
              I developed an eCommerce web application using React.js, Bootstrap, HTML, CSS, and JavaScript.
              The application features a responsive, user-friendly interface with dynamic product listings
              and a smooth shopping experience. It incorporates a flexible and scalable design using React components,
              along with Bootstrap for styling.
            </p>
            <a href="https://ecommerce-sooty-eight-23.vercel.app/" className="project-link">
              Live Demo
            </a>
          </div>
  
          <div className="project-card">
            <h1 className="project-title">Student Management System</h1>
            <p className="project-description">
              Developed a Student Management System using HTML, CSS, and JavaScript to track and manage student information.
              Implemented features to add, view, and update student details including name, age, course, and marks.
            </p>
            <a href="https://studentmanagement-sooty.vercel.app/" className="project-link">
              Live Demo
            </a>
          </div>
  
          
          <div className="project-card">
            <h1 className="project-title">React Weather </h1>
            <p className="project-description">
              A weather app that shows current weather based on the city searched. Built with React.js, utilizing
              OpenWeatherMap API to fetch real-time weather data.
            </p>
            <a href="https://github.com/M-muthamilSelvan/weatherapplication" className="project-link">
              Live Demo
            </a>
          </div>
        </div> 
      </div>
    );
  };
  
  export default Project;
  