import React from "react";
import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDiscord } from "@fortawesome/free-brands-svg-icons";
import { faProjectDiagram, faDatabase } from "@fortawesome/free-solid-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

// Add URLs for each chip label
const chipLinks: { [key: string]: string } = {
  Python: "https://www.python.org/",
  Discord: "https://discord.com/developers/docs/intro",
  Requests: "https://docs.python-requests.org/en/latest/",
  BeautifulSoup: "https://beautiful-soup-4.readthedocs.io/",
  Selenium: "https://www.selenium.dev/",
  "Riot Games API": "https://developer.riotgames.com/",
  "Yahoo Finance API": "https://pypi.org/project/yahoo-fin/",
  "OpenAI API": "https://platform.openai.com/docs/",
  "Scikit-learn": "https://scikit-learn.org/",
  Tensorflow: "https://www.tensorflow.org/",
  "Hugging Face API": "https://huggingface.co/docs",
  Keras: "https://keras.io/",
  OpenCV: "https://opencv.org/",
  Pandas: "https://pandas.pydata.org/",
  Matplotlib: "https://matplotlib.org/",
  NumPy: "https://numpy.org/",
  MySQL: "https://www.mysql.com/",
  PostgreSQL: "https://www.postgresql.org/",
  Getstream: "https://getstream.io/",
};

const labelsFirst = [
  "Python",
  "Discord",
  "Requests",
  "BeautifulSoup",
  "Selenium",
  "Riot Games API",
  "Yahoo Finance API",
];

const labelsSecond = [
  "Python",
  "OpenAI API",
  "Scikit-learn",
  "Tensorflow",
  "Hugging Face API",
  "Keras",
  "OpenCV",
];

const labelsThird = [
  "Python",
  "Pandas",
  "Matplotlib",
  "NumPy",
  "MySQL",
  "PostgreSQL",
  "Getstream",
];

function Expertise() {
    const handleChipClick = (label: string) => {
      const url = chipLinks[label];
      if (url) {
        window.open(url, "_blank");
      }
    };
  
    return (
      <div className="container" id="expertise">
        <div className="skills-container">
          <h1>Expertise</h1>
          <div className="skills-grid">
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faDiscord}
                  size="3x"
                  className="skill-icon"
                />
                <h3>Discord Bot Development</h3>
              </div>
              <p>
                I specialize in developing feature-rich Discord bots to streamline
                workflows and enhance community engagement. Using API
                integrations, I build bots that deliver robust functionality and a
                unique user experience.
              </p>
              <div className="flex-chips">
                {labelsFirst.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
  
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faProjectDiagram}
                  size="3x"
                  className="skill-icon"
                />
                <h3>Machine Learning & LLMs</h3>
              </div>
              <p>
                I design and implement solutions powered by machine-learning and
                Large Language Models (LLMs) to automate tasks, improve
                decision-making, and enable intelligent interactions.
              </p>
              <div className="flex-chips">
                {labelsSecond.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
  
            <div className="skill">
              <div className="skill-header">
                <FontAwesomeIcon
                  icon={faDatabase}
                  size="3x"
                  className="skill-icon"
                />
                <h3>Data Pipelines & Automation</h3>
              </div>
              <p>
                I create scalable data pipelines and automate workflows to optimize
                data processes through efficient data ingestion, transformation,
                and delivery.
              </p>
              <div className="flex-chips">
                {labelsThird.map((label, index) => (
                  <Chip
                    key={index}
                    className="chip"
                    label={label}
                    onClick={() => handleChipClick(label)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Expertise;
