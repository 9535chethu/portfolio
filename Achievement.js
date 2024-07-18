import React, { useEffect, useRef } from 'react';
import './Achievement.css';
import logo1 from './logos/logo1.svg';
import logo2 from './logos/logo2.svg';

const certificates = [
  {
    title: 'Young Data Scientist',
    imageUrl: 'https://drive.google.com/uc?id=1U11bJo4zIPzWTJ5IFEUJlybtWxoY13Uz',
    link: 'https://drive.google.com/file/d/1Qe7eZq4hesCuRnw3JpkHW378070UNUK4/view?usp=sharing',
    institution: "St. Joseph's University, Bangalore",
    logo: logo1
  },
  {
    title: 'Data Visualization',
    imageUrl: 'https://drive.google.com/uc?id=1U11bJo4zIPzWTJ5IFEUJlybtWxoY13Uz',
    link: 'https://drive.google.com/file/d/14HC7t-TUWL_DPEZtPE7MIb4IQ8KGZRab/view?usp=sharing',
    institution: 'Nitte Meenakshi Institute of Technology',
    logo: logo2
  }
];

const Achievement = () => {
  const achievementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = achievementRef.current.querySelectorAll('.fade-in-element');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="achievements-section-unique" ref={achievementRef}>
      <h2 className="achievements-heading-unique fade-in-element">Achievements</h2>
      <div className="achievement-container-unique">
        {certificates.map((certificate, index) => (
          <div className="achievement-item-unique fade-in-element" key={index}>
            <div className="logo-container-unique">
              <img src={certificate.logo} alt={`Logo ${index + 1}`} className="logo-unique" />
            </div>
            <div className="achievement-content-unique">
              <div className="certificate-content">
                <h3>{certificate.title}</h3>
                <a href={certificate.link} target="_blank" rel="noopener noreferrer">
                  <img src={certificate.imageUrl} alt={`Certificate ${index + 1}`} className="certificate" />
                </a>
              </div>
              <p>{certificate.institution}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievement;
