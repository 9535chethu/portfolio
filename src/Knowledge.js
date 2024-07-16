import React, { useEffect, useRef } from 'react';
import './Knowledge.css';

const Knowledge = () => {
  const sectionRef = useRef(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const observerCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    if (sectionRef.current) observer.observe(sectionRef.current);
    itemsRef.current.forEach((item) => observer.observe(item));

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      itemsRef.current.forEach((item) => observer.unobserve(item));
    };
  }, []);

  return (
    <div className="knowledge-section fade-in" ref={sectionRef}>
      <h2 className='heading'>SOFT-SKILLS</h2>
      <div className="knowledge-grid">
        {[ 'Problem Solving', 'Time Management', 'Communication', 'Leadership', 'Creativity'].map((item, index) => (
          <div key={index} className="knowledge-item fade-in" ref={el => itemsRef.current[index] = el}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Knowledge;
