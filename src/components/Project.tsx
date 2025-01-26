import React, { useState } from "react";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";
import mock04 from "../assets/images/mock04.png";
import mock05 from "../assets/images/mock05.png";
import mock06 from "../assets/images/mock06.png";
import mock07 from "../assets/images/mock07.png";
import mock08 from "../assets/images/mock08.png";
import mock09 from "../assets/images/mock09.png";
import mock10 from "../assets/images/mock10.png";
import "../assets/styles/Project.scss";

type Project = {
  id: number;
  title: string;
  description: string;
  backText: string;
  image: string;
  tags: string[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "League of Legends Betting Discord Bot",
    description:
      "A Discord bot that allows users to bet on League of Legends matches using custom algorithms.",
    backText: "Visit: https://www.filmate.club",
    image: mock01,
    tags: ["Python", "Discord Bot", "Data"],
  },
  {
    id: 2,
    title: "Flight Data Analysis Tool",
    description:
      "Analyzed flight data to extract trends and improve predictions using Python and Pandas.",
    backText: "Play now: https://yujisatojr.itch.io/highspeedchase",
    image: mock02,
    tags: ["Python", "Data"],
  },
  {
    id: 3,
    title: "Decision Tree for Predicting Diabetes",
    description:
      "Built a decision tree model to predict diabetes using Scikit-learn and visualization tools.",
    backText: "Play now: https://yujisatojr.itch.io/spacecraft",
    image: mock03,
    tags: ["Python", "Data", "Machine Learning"],
  },
  {
    id: 4,
    title: "Training Linear and Logistic Regression Models",
    description:
      "Developed regression models using Python and Scikit-learn to analyze datasets.",
    backText: "Visit: https://www.datumlearn.com",
    image: mock04,
    tags: ["Python", "Data", "Machine Learning"],
  },
  {
    id: 5,
    title: "Building Management System",
    description:
      "Created a management system for buildings to monitor energy efficiency and performance.",
    backText: "Visit: http://www.wemanage.jp",
    image: mock05,
    tags: ["Python", "Hands-on", "Circuit Design"],
  },
  {
    id: 6,
    title: "Character LLM Discord Bot",
    description:
      "A Discord bot powered by a character-based large language model for role-playing interactions.",
    backText: "More info: https://www.byuh.edu/covid-19-case-management",
    image: mock06,
    tags: ["Python", "Discord Bot", "Data"],
  },
  {
    id: 7,
    title: "Finance Data Discord Bot",
    description:
      "Built a Discord bot to fetch and analyze financial data using APIs and Python.",
    backText: "GitHub: https://github.com/yujisatojr/multi-reg-analysis",
    image: mock07,
    tags: ["Python", "Discord Bot", "Data"],
  },
  {
    id: 8,
    title: "Smart Mirror",
    description:
      "Developed a smart mirror that displays calendar, weather, and news using IoT and web technologies.",
    backText:
      "More info: https://hookele.byuh.edu/transfer-evaluation-guidelines-and-matrix",
    image: mock08,
    tags: ["Python", "Hands-on"],
  },
  {
    id: 9,
    title: "kNN Decision Boundary on Car Data",
    description:
      "Implemented k-Nearest Neighbors algorithm to classify car data and visualize decision boundaries.",
    backText: "GitHub: https://github.com/yujisatojr/submeowrine",
    image: mock09,
    tags: ["Python", "Data", "Machine Learning"],
  },
  {
    id: 10,
    title: "Pipelined MIPS Processor",
    description:
      "Designed and simulated a pipelined MIPS processor using Verilog for educational purposes.",
    backText: "GitHub: https://github.com/yujisatojr/submeowrine",
    image: mock10,
    tags: ["Circuit Design"],
  },
  {
    id: 11,
    title: "4-bit Adder/Subtractor",
    description:
      "Created a 4-bit adder/subtractor circuit with Verilog and tested it on an FPGA board.",
    backText: "GitHub: https://github.com/yujisatojr/submeowrine",
    image: mock10,
    tags: ["Circuit Design"],
  },
];

function ProjectCard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = projects.filter((project) => {
    if (!searchTerm && !selectedTag) return true;

    const searchTermLower = searchTerm.toLowerCase().trim();
    const matchesSearch = searchTerm === "" || 
      project.title.toLowerCase().includes(searchTermLower) ||
      project.description.toLowerCase().includes(searchTermLower) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTermLower));

    const matchesTag = !selectedTag || project.tags.includes(selectedTag);

    return matchesSearch && matchesTag;
  });

  const handleCardClick = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="content-wrapper">
        <h1>Projects</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="tags">
            {["Python", "Data", "Machine Learning", "Discord Bot", "Hands-on", "Circuit Design"].map(
              (tag) => (
                <button
                  key={tag}
                  className={`tag-button ${selectedTag === tag ? "active" : ""}`}
                  onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                >
                  {tag}
                </button>
              )
            )}
          </div>
        </div>
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="project-card"
              onClick={() => handleCardClick(project)}
            >
              <div className="project-inner">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-img"
                />
              </div>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
      {selectedProject && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>
              &times;
            </button>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            <p>{selectedProject.backText}</p>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectCard;
