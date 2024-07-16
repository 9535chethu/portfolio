import React, { useEffect, useRef } from 'react';
import './WhatIDo.css';
import dataScienceLogo from './logos/data-science-logo.svg';
import webDesignLogo from './logos/web-design-logo.svg';
import webDevelopmentLogo from './logos/web-development-logo.svg';
import dataAnalyticsLogo from './logos/data-analytics-logo.svg';

const WhatIDo = () => {
  const sectionRef = useRef(null);
  const columnRefs = useRef([]);

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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    columnRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
      columnRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  return (
    <div className="what-i-do" ref={sectionRef}>
      <h2 className="section-title">What I Do</h2>
      <div className="row">
        <div className="column" ref={(el) => (columnRefs.current[0] = el)}>
          <div className="column-header">
            <img src={dataScienceLogo} alt="Data Science Logo" className="logo" />
            <h3>Data Science</h3>
          </div>
          <p>Analyzing complex data sets to help inform business decisions.</p>
        </div>
        <div className="column" ref={(el) => (columnRefs.current[1] = el)}>
          <div className="column-header">
            <img src={webDesignLogo} alt="Web Design Logo" className="logo" />
            <h3>Web Design</h3>
          </div>
          <p>Creating visually appealing and user-friendly web designs.</p>
        </div>
      </div>
      <div className="row">
        <div className="column" ref={(el) => (columnRefs.current[2] = el)}>
          <div className="column-header">
            <img src={webDevelopmentLogo} alt="Web Development Logo" className="logo" />
            <h3>Web Development</h3>
          </div>
          <p>Building responsive and efficient web applications.</p>
        </div>
        <div className="column" ref={(el) => (columnRefs.current[3] = el)}>
          <div className="column-header">
            <img src={dataAnalyticsLogo} alt="Data Analytics Logo" className="logo" />
            <h3>Data Analytics</h3>
          </div>
          <p>Interpreting data to provide actionable insights.</p>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;