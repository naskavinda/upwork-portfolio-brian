import React from 'react';
import '../assets/styles/About.scss';

function About() {
  return (
    <div id="about" className="about-section">
      <div className="about-container">
        <h1>About Me</h1>
        
        <div className="about-content">
          <div className="about-text">
            <p className="intro">
              Hi there! I'm Brian Bui, a passionate Full Stack Developer based in New York, 
              with a deep love for creating robust and scalable web solutions.
            </p>
            
            <div className="about-details">
              <div className="detail-section">
                <h3>Background</h3>
                <p>
                  With several years of experience in web development, I specialize in 
                  building modern web applications using cutting-edge technologies. 
                  My journey in tech has been driven by a constant desire to learn 
                  and create meaningful solutions that make a difference.
                </p>
              </div>

              <div className="detail-section">
                <h3>Approach</h3>
                <p>
                  I believe in writing clean, maintainable code and following best practices. 
                  My approach combines technical expertise with creative problem-solving, 
                  ensuring that every project I work on is both functional and user-friendly.
                </p>
              </div>

              <div className="detail-section">
                <h3>Interests</h3>
                <p>
                  Beyond coding, I'm passionate about staying up-to-date with the latest 
                  tech trends, contributing to open-source projects, and mentoring aspiring 
                  developers. When I'm not coding, you'll find me exploring new technologies 
                  or working on personal projects.
                </p>
              </div>
            </div>

            <div className="personal-info">
              <div className="info-item">
                <span className="label">Location:</span>
                <span className="value">New York, United States</span>
              </div>
              <div className="info-item">
                <span className="label">Email:</span>
                <span className="value">brian@btb.gg</span>
              </div>
              <div className="info-item">
                <span className="label">Availability:</span>
                <span className="value">Open to opportunities</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
