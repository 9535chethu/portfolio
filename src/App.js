import React, { useState } from 'react';
import './App.css';
import profileImage from './profile.jpg';
import mainImage from './logos/main-image1.jpg';
import WhatIDo from './WhatIDo';
import Languages from './Languages';
import '@fortawesome/fontawesome-free/css/all.min.css';
import EducationSkillsComponent from './EducationSkillsComponent';
import Knowledge from './Knowledge';
import Experience from './experience';
import Project from './Project'; 
import Achievement from './Achievement';
import Footer from './Footer';

const App = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  const mainText = "Hi, I'm Chethan K. R.";

  return (
    <div className="container">
      <aside className="sidebar">
        <div className="upper-section">
          <div className="profile-circle">
            <img src={profileImage} alt="Profile" className="profile-image" />
          </div>
          <h2>Chethan K R</h2>
          <h3>Web Developer | Data Scientist</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/profile.php?id=100023498771585" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.instagram.com/_chethan_kr_/?hl=en" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
          <p className="additional-info">
            <ul>
              <li>Tumkur, Karnataka</li>
              <li>MCA graduate</li>
            </ul>
          </p>
        </div>
      </aside>
      <main className="content">
        <div className="main-content">
          <div className="text-content">
            <p className="para">Web Developer | Data Scientist</p>
            <h2 className="main_page">
              {mainText.split(' ').map((word, index) => (
                <span key={index} style={{ animationDelay: `${index * 1}s` }}>
                  {word}&nbsp;
                </span>
              ))}
            </h2>
            <p className="description">I am a diligent and passionate MCA graduate specializing in web development and data science, equipped with a robust skill set acquired through rigorous academic training and practical projects. My expertise spans front-end and back-end development, utilizing technologies such as React.js, Node.js, MongoDB, and Python for data analysis. With a keen eye for detail and a commitment to delivering high-quality results, I am eager to leverage my technical proficiency and problem-solving abilities to contribute effectively to innovative projects in the field of web development and data science.</p>
            <div className="buttons">
              <a href="https://drive.google.com/file/d/1nU1u4ON1lgHPR4QLIGcFHvP_hjIQ_hwC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-cv">Download CV</a>
              <button className="btn-contact" onClick={toggleContactPopup}>Contact</button>
            </div>
          </div>
          <img src={mainImage} alt="Main Content" className="main-image" />
        </div>

        <div className={`contact-popup ${showContactPopup ? 'active' : ''}`}>
          <div className="contact-details">
            <p className='gmail'>Email: chethankr4321@gmail.com</p>
            {/* <p>Phone: 9535615912</p> */}
          </div>
          <button className="close-btn" onClick={toggleContactPopup}>Close</button>
        </div>

        <WhatIDo />
        <Languages />
        <EducationSkillsComponent />
        <Knowledge />
        <Experience />
        <Project />
        <Achievement />
        <Footer />
      </main>
    </div>
  );
};

export default App;
