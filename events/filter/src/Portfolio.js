import React from "react";
import "./App.css";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";

const Portfolio = props => {
  const { projects } = props;

  const renderProjects = projects => {
    return projects.map((project, i) => {
      return (
        <div className="project" key={`project-${project.category}-${i}`}>
          <img src={project.img} alt={`project-${project.category}-${i}`} />
        </div>
      );
    });
  };

  return (
    <div className="portfolio">
      <ReactCSSTransitionGroup
        transitionName="portfolio"
        transitionEnterTimeout={500}
        transitionLeaveTimeout={300}
      >
        {projects && renderProjects(projects)}
      </ReactCSSTransitionGroup>
    </div>
  );
};

export default Portfolio;
