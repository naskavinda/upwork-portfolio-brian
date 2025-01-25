import React, { useState, useEffect } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCaretDown, faCaretUp, faClock, faCode, faTrophy } from "@fortawesome/free-solid-svg-icons";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "../assets/styles/Timeline.scss";

type Career = {
  id: number;
  title: string;
  subtitle: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  technologies: string[];
};

const careers: Career[] = [
  {
    id: 1,
    title: "Freelance Developer",
    company: "Self-Employed",
    location: "New York, USA",
    subtitle: "May 2024 — Present",
    description: "Full-stack Web Development, GenAI/LLM, Project Management, Business Development",
    achievements: [
      "Delivered 10+ projects with excellent client satisfaction",
      "Implemented AI-powered features using OpenAI GPT",
      "Managed end-to-end project lifecycles for multiple clients"
    ],
    technologies: ["React", "Flask", "Python", "OpenAI GPT", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Data Annotator",
    company: "AI Research Lab",
    location: "Remote",
    subtitle: "May 2024 — Present",
    description: "Frontend Development, Backend Development, User Experience, Team Leading",
    achievements: [
      "Enhanced AI training models with 95% accuracy",
      "Led a team of 5 annotators",
      "Developed annotation guidelines and quality metrics"
    ],
    technologies: ["Python", "Pandas", "TensorFlow", "Data Annotation Tools", "SQL"]
  },
  {
    id: 3,
    title: "Store Associate & Technician",
    company: "Tech Retail Store",
    location: "New York, USA",
    subtitle: "Oct 2023 — May 2024",
    description: "Full-stack Development, API Development, User Experience",
    achievements: [
      "Improved technical operations efficiency by 20%",
      "Implemented automated inventory tracking system",
      "Trained 10+ new employees on technical procedures"
    ],
    technologies: ["Node.js", "JavaScript", "REST APIs", "MySQL", "React"]
  }
];

function Timeline() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>(() => {
    const initialState: { [key: number]: boolean } = {};
    careers.forEach(career => {
      initialState[career.id] = true;
    });
    return initialState;
  });

  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const isLightMode = document.documentElement.classList.contains('light-mode');
    setIsDarkMode(!isLightMode);

    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'class') {
          setIsDarkMode(!document.documentElement.classList.contains('light-mode'));
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  const toggleDetails = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className="timeline-section" id="career">
      <div className="timeline-container">
        <div className="section-header">
          <h1>Career History</h1>
          <p className="section-subtitle">My professional journey and experience</p>
        </div>

        <VerticalTimeline animate={true} lineColor={"#2b98c2"}>
          {careers.map((career) => (
            <VerticalTimelineElement
              key={career.id}
              className={`vertical-timeline-element--work ${!isDarkMode ? 'light-mode-element' : ''}`}
              contentStyle={{
                background: isDarkMode ? "rgba(10, 25, 47, 0.7)" : "rgba(255, 255, 255, 0.95)",
                boxShadow: "0 3px 10px rgba(0, 0, 0, 0.2)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "10px",
                padding: "2rem"
              }}
              contentArrowStyle={{ 
                borderRight: isDarkMode
                  ? "7px solid rgba(10, 25, 47, 0.7)"
                  : "7px solid rgba(255, 255, 255, 0.95)"
              }}
              date={career.subtitle}
              iconStyle={{ 
                background: "rgb(43, 152, 194)", 
                color: "#fff", 
                boxShadow: "0 0 0 4px rgba(255, 255, 255, 0.2)"
              }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <div className="timeline-header">
                <h3 className="timeline-title">{career.title}</h3>
                <div className="company-info">
                  <h4 className="company-name">{career.company}</h4>
                  <span className="location">{career.location}</span>
                </div>
              </div>

              <p className="timeline-description">{career.description}</p>

              <div
                className={`timeline-details ${expanded[career.id] ? 'expanded' : ''}`}
                onClick={() => toggleDetails(career.id)}
              >
                <div className="toggle-button">
                  <span>{expanded[career.id] ? 'Show Less' : 'Show More'}</span>
                  <FontAwesomeIcon
                    icon={expanded[career.id] ? faCaretUp : faCaretDown}
                    className="toggle-icon"
                  />
                </div>
              </div>

              {expanded[career.id] && (
                <div className="expanded-content">
                  <div className="achievements">
                    <h5>
                      <FontAwesomeIcon icon={faTrophy} className="section-icon" />
                      Key Achievements
                    </h5>
                    <ul>
                      {career.achievements.map((achievement, index) => (
                        <li key={index}>{achievement}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="technologies">
                    <h5>
                      <FontAwesomeIcon icon={faCode} className="section-icon" />
                      Technologies Used
                    </h5>
                    <div className="tech-tags">
                      {career.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;