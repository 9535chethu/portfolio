import React, { useEffect, useRef } from 'react';
import './Experience.css';
import experience from './logos/experience.svg';
import locationLogo from './logos/location.svg'; 

const Experience = () => {
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
    <div className="experience-section" ref={sectionRef}>
      <div className="experience-header">
        <img src={experience} alt="Experience Logo" className="experience-logo" />
        <h2>Experience</h2>
      </div>
      <div className="experience-list">
        <div className="experience-item fade-in">
          <h3>Internship at Dayananda Sagar College</h3>
          <span className="date">January 2024 - March 2024</span>
          <p>Used HTML, CSS, JavaScript, and PHP to develop a project.</p>
          <div className="location">
            <img src={locationLogo} alt="Location Icon" className="location-icon" />
            <span>Bangalore</span>
          </div>
        </div>
        <div className="experience-item fade-in">
          <h3>Internship at Zieers System Pvt Ltd</h3>
          <span className="date">April 2024 - Present</span>
          <p>Currently working as an intern, using the MERN stack to develop projects.</p>
          <div className="location">
            <img src={locationLogo} alt="Location Icon" className="location-icon" />
            <span>Bangalore</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;