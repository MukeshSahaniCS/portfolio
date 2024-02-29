import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import apple from "../../Assets/Projects/apple.png";
import dynamic from "../../Assets/Projects/dynamic.png";
import eBharat from "../../Assets/Projects/e-bharat.png";

import calc from "../../Assets/Projects/calc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eBharat}
              isBlog={false}
              title="e-India"
              description="Ecommerce web app build with react.js, Material-UI,Tailwind CSS, Razorpay payment gateway and Firebase. Have features which allows user shoping."
              ghLink="https://github.com/MukeshSahaniCS/e-commerce/tree/new-branch"
              demoLink="https://e-bharat-mukesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calc}
              isBlog={false}
              title="Calculator"
              description="I have create a stylish calculator using HTML CSS and Javascript. This project is create when learn JavaScript, this project help to build my skills"
              ghLink="https://github.com/MukeshSahaniCS/StylishCalculator"
              demoLink="https://calculatormukesh.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dynamic}
              isBlog={false}
              title="Dynamic Web using MERN"
              description="I am learning phase in this phase learned MERN stack. Now then create a dynamic web app using MERN stack. This web is based on athunticaton system"
              ghLink="https://github.com/MukeshSahaniCS/DynamicWebApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={apple}
              isBlog={false}
              title="Apple-Web Clone"
              description="One day a company give a project apple-website clone. Then creating a clone website using HTML and CSS."
              ghLink="https://github.com/MukeshSahaniCS/apple-clone/"
              demoLink="https://apple-clone-mukesh.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
