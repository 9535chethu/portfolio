import React, { useEffect, useRef } from 'react';
import './EducationSkillsComponent.css';

const EducationSkillsComponent = () => {
  const containerRef = useRef(null);
  const educationRef = useRef(null);
  const skillsRef = useRef(null);

  const educationData = [
    { year: 2024, institution: 'Dayanand Sagar College', degree: 'Masters of Computer Application (8.0 CGPA)' },
    { year: 2022, institution: 'Vivekananda Degree College', degree: 'Bachelors of Science (8.0 CGPA)' },
    { year: 2019, institution: 'seshadripuram composite pu college', degree: 'PUC (12th) 65%' },
    { year: 2017, institution: 'minority morarji desai residential school', degree: 'SSLC(10th) 78%' },
  ];

  const skillsData = [
    { name: 'HTML/CSS', value: 80 },
    { name: 'Python', value: 60 },
    { name: 'JS', value: 40 },
    { name: 'React.JS', value: 40 },
    { name: 'Node.js', value: 30 },
    { name: 'Java', value: 30 },
    { name: 'Thumbnails design', value: 40 },
    { name: 'Web design', value: 50 },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('slide-up');
        } else {
          entry.target.classList.remove('slide-up');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (containerRef.current) observer.observe(containerRef.current);
    if (educationRef.current) observer.observe(educationRef.current);
    if (skillsRef.current) observer.observe(skillsRef.current);

    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
      if (educationRef.current) observer.unobserve(educationRef.current);
      if (skillsRef.current) observer.unobserve(skillsRef.current);
    };
  }, []);

  return (
    <div className="education-skills-container" ref={containerRef}>
      <div className="education-section" ref={educationRef}>
        <h2 className='education'>Education</h2>
        <ul className="timeline">
          {educationData.map((edu, index) => (
            <li key={index} className="timeline-item">
              <div className="timeline-badge">{edu.year}</div>
              <div className="timeline-panel">
                <h3>{edu.institution}</h3>
                <p>{edu.degree}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      
      <div className="skills-section" ref={skillsRef}>
        <h2 className='education'>Design & Coding Skills</h2>
        <div className="skills-list">
          {skillsData.map((skill, index) => (
            <div key={index} className="skill-item">
              <span className="skill-name">{skill.name}</span>
              <div className="skill-bar-container">
                <div className="skill-bar" style={{ width: `${skill.value}%` }}></div>
              </div>
              <span className="skill-percentage">{skill.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EducationSkillsComponent;