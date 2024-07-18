import React from 'react';
import './Languages.css'; // Import the CSS file
import pythonLogo from './logos/python-logo.svg';
import javaLogo from './logos/java-logo.svg';
import htmlLogo from './logos/html-logo.svg';
import JsLogo from './logos/Js-logo.svg';
import CssLogo from './logos/CSS-logo.svg';
import reactLogo from './logos/react-logo.svg';
import nodejsLogo from './logos/nodejs-logo.svg';
import databaseLogo from './logos/database-logo.svg';
import OpenCV from './logos/Open-CV.svg';

const Languages = () => {
  const logos = [
    { src: pythonLogo, alt: 'Python' },
    { src: javaLogo, alt: 'Java' },
    { src: htmlLogo, alt: 'HTML' },
    { src: JsLogo, alt: 'JS' },
    { src: CssLogo, alt: 'CSS' },
    { src: reactLogo, alt: 'React.js' },
    { src: nodejsLogo, alt: 'Node.js' },
    { src: databaseLogo, alt: 'Database' },
    { src: OpenCV, alt: 'OpenCV' },
  ];

  // Duplicate the logos array to create a seamless loop
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos];

  return (
    <div className="languages-frameworks">
      <h2>Languages and Frameworks I Know</h2>
      <div className="logo-container">
        {duplicatedLogos.map((logo, index) => (
          <div key={index} className="logo-item">
            <img src={logo.src} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Languages;
