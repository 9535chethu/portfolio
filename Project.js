import React, { useEffect, useRef } from 'react';
import './Project.css';
import powerBiLogo from './logos/PowerBI.svg';
import tableauLogo from './logos/tableau-logo.svg';

const projects = [
  {
    title: 'Fintrack: Financial Management System',
    description: 'Web-based financial management system for college events, operational at Dayananda Sagar College of Arts, Science, and Commerce. Directed the entire project lifecycle, ensuring adherence to requirements and deadlines.',
    technologies: 'Technologies: HTML, CSS, JavaScript, PHP, MySQL',
    location: 'Bangalore'
  },
  {
    title: 'Data Analyst on Hotel Booking',
    description: 'Analyzed a hotel booking dataset to uncover booking patterns and trends for informed decision making. Conducted data cleaning, exploratory analysis, feature engineering, model development, and insights generation.',
    technologies: 'Technologies: Python, Machine Learning, Jupyter Notebook, Power BI, SQL',
    location: 'Bangalore'
  }
];

const ProjectItem = ({ title, description, technologies, location }) => (
  <div className="project fade-in">
    <h3>{title}</h3>
    <span className="date">{technologies}</span>
    <p>{description}</p>
    <div className="location">
      <img src={require('./logos/location.svg').default} alt="Location Icon" className="location-icon" />
      <span>{location}</span>
    </div>
  </div>
);

const Project = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-visible');
        } else {
          entry.target.classList.remove('fade-in-visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);

    const items = sectionRef.current.querySelectorAll('.fade-in');
    items.forEach(item => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="projects-and-tools-section" ref={sectionRef}>
      <div className="projects-section">
        <h2 className="fade-in">Projects</h2>
        <div className="projects-container">
          {projects.map((project, index) => (
            <ProjectItem key={index} {...project} />
          ))}
        </div>
      </div>
      <div className="bi-tools-section">
        <h2 className="fade-in">BI Tools</h2>
        <div className="bi-tools-container">
          <div className="fade-in">
            <img src={powerBiLogo} alt="Power BI Logo" className="bi-tool-logo" />
            <p className='plogo'>Power BI</p>
          </div>
          <div className="fade-in">
            <img src={tableauLogo} alt="Tableau Logo" className="bi-tool-logo" />
            <p className='plogo'>Tableau</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;