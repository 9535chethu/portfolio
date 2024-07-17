import React from 'react';
import './App.css';
import profileImage from './profile.jpg';
// import mainImage from './logos/main-image1.jpg';
import MainPage from './MainPage';
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
            <a href="https://www.linkedin.com/in/chethan-k-r-885931271/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
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
        <MainPage />
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
