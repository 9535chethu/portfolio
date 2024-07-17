import React, { useState } from 'react';
import mainImage from './logos/main-image1.jpg';
import './App.css';

const MainPage = () => {
  const [showContactPopup, setShowContactPopup] = useState(false);
  const [error, setError] = useState(null);

  const toggleContactPopup = () => {
    setShowContactPopup(!showContactPopup);
  };

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('http://localhost:5000/auth/google');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        setError('Failed to get authentication URL: ' + JSON.stringify(data));
      }
    } catch (err) {
      setError('An error occurred while trying to download the CV: ' + err.message);
    }
  };

  const mainText = "Hi, I'm Chethan K. R.";

  return (
    <>
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
          <p className="description">
            I am a diligent and passionate MCA graduate specializing in web development and data science, equipped with a robust skill set acquired through rigorous academic training and practical projects. My expertise spans front-end and back-end development, utilizing technologies such as React.js, Node.js, MongoDB, and Python for data analysis. With a keen eye for detail and a commitment to delivering high-quality results, I am eager to leverage my technical proficiency and problem-solving abilities to contribute effectively to innovative projects in the field of web development and data science.
          </p>
          <div className="buttons">
            <button className="btn-cv" onClick={handleDownloadCV}>Download CV</button>
            <button className="btn-contact" onClick={toggleContactPopup}>Contact</button>
          </div>
          {error && <p className="error-message">{error}</p>}
        </div>
        <img src={mainImage} alt="Main Content" className="main-image" />
      </div>

      <div className={`contact-popup ${showContactPopup ? 'active' : ''}`}>
        <div className="contact-details">
          <p className='gmail'>Email: chethankr4321@gmail.com</p>
        </div>
        <button className="close-btn" onClick={toggleContactPopup}>Close</button>
      </div>
    </>
  );
};

export default MainPage;