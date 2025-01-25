import React from 'react';
import '../assets/styles/Qualifications.scss';
import SchoolIcon from '@mui/icons-material/School';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

function Qualifications() {
  const qualifications = {
    education: [
      {
        title: "Master of Science in Computer Science",
        institution: "New York University",
        year: "2020 - 2022",
        description: "Specialized in Artificial Intelligence and Machine Learning"
      },
      {
        title: "Bachelor of Science in Software Engineering",
        institution: "University of California",
        year: "2016 - 2020",
        description: "Major in Software Engineering with focus on Web Technologies"
      }
    ],
    certifications: [
      {
        title: "AWS Certified Solutions Architect",
        institution: "Amazon Web Services",
        year: "2023",
        description: "Professional certification for AWS cloud architecture"
      },
      {
        title: "Google Cloud Professional Developer",
        institution: "Google Cloud",
        year: "2022",
        description: "Advanced certification for cloud development"
      },
      {
        title: "Meta Frontend Developer Professional Certificate",
        institution: "Meta",
        year: "2022",
        description: "Professional certification in frontend development"
      }
    ],
    achievements: [
      {
        title: "Best Innovation Award",
        institution: "Tech Innovation Summit 2023",
        year: "2023",
        description: "Awarded for developing an AI-powered accessibility tool"
      },
      {
        title: "Open Source Contributor",
        institution: "Various Projects",
        year: "2021 - Present",
        description: "Active contributor to major open source projects"
      }
    ]
  };

  return (
    <div id="qualifications" className="qualifications-section">
      <div className="qualifications-container">
        <h1>Qualifications</h1>
        
        <div className="qualifications-grid">
          {/* Education Section */}
          <div className="qualification-category">
            <div className="category-header">
              <SchoolIcon />
              <h2>Education</h2>
            </div>
            <div className="qualification-items">
              {qualifications.education.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="qualification-category">
            <div className="category-header">
              <WorkspacePremiumIcon />
              <h2>Certifications</h2>
            </div>
            <div className="qualification-items">
              {qualifications.certifications.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Section */}
          <div className="qualification-category">
            <div className="category-header">
              <EmojiEventsIcon />
              <h2>Achievements</h2>
            </div>
            <div className="qualification-items">
              {qualifications.achievements.map((item, index) => (
                <div key={index} className="qualification-item">
                  <h3>{item.title}</h3>
                  <p className="institution">{item.institution}</p>
                  <p className="year">{item.year}</p>
                  <p className="description">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualifications;
