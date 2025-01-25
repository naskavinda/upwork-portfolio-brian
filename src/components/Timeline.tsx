import React, { useState } from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
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
  description: string;
  details: string;
};

const careers: Career[] = [
  {
    id: 1,
    title: "Freelance Developer",
    subtitle: "May 2024 — Present",
    description:
      "Full-stack Web Development, GenAI/LLM, Project Management, Business Development",
    details:
      "Technologies: React, Flask, Python, OpenAI GPT. Delivered 10+ projects with excellent client satisfaction.",
  },
  {
    id: 2,
    title: "Data Annotator",
    subtitle: "May 2024 — Present",
    description:
      "Frontend Development, Backend Development, User Experience, Team Leading",
    details:
      "Technologies: Python, Pandas, Data Annotation Tools. Enhanced AI training models with 95% accuracy.",
  },
  {
    id: 3,
    title: "Store Associate & Technician",
    subtitle: "Oct 2023 — May 2024",
    description: "Full-stack Development, API Development, User Experience",
    details:
      "Technologies: Node.js, JavaScript, REST APIs. Improved technical operations efficiency by 20%.",
  },
  {
    id: 4,
    title: "Store Associate & Technician",
    subtitle: "Oct 2023 — May 2024",
    description: "Full-stack Development, API Development, User Experience",
    details:
      "Technologies: Node.js, JavaScript, REST APIs. Improved technical operations efficiency by 20%.",
  },
  {
    id: 5,
    title: "Store Associate & Technician",
    subtitle: "Oct 2023 — May 2024",
    description: "Full-stack Development, API Development, User Experience",
    details:
      "Technologies: Node.js, JavaScript, REST APIs. Improved technical operations efficiency by 20%.",
  },
];

function Timeline() {
  const [expanded, setExpanded] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (id: number) => {
    setExpanded((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div id="career">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          {careers.map((career) => (
            <VerticalTimelineElement
              key={career.id}
              className="vertical-timeline-element--work"
              contentStyle={{ background: "white", color: "rgb(39, 40, 34)" }}
              iconStyle={{ background: "#2b98c2", color: "rgb(39, 40, 34)" }}
              icon={<FontAwesomeIcon icon={faBriefcase} />}
            >
              <h3 className="vertical-timeline-element-title">{career.title}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {career.subtitle}
              </h4>
              <p>{career.description}</p>
              <div
                className="toggle-details-section"
                onClick={() => toggleDetails(career.id)}
              >
                <FontAwesomeIcon
                  icon={expanded[career.id] ? faCaretUp : faCaretDown}
                />
              </div>
              {expanded[career.id] && (
                <div className="additional-details">
                  <p>{career.details}</p>
                </div>
              )}
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;