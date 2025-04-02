import React, { useState } from "react";
import { Card } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import baseUrl from "../../services/baseUrl.JS";

const ProjectCard = ({project}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  console.log(project)
  const handleShow = () => setShow(true);

  return (
    <>
      <Card onClick={handleShow} className="btn shadow">
        <Card.Img
          height={"200px"}
          variant="top"
          src={`${baseUrl}/uploads/${project.projectImg}`}
        />

        <Card.Body>
          <Card.Title>{project.projectTitle}</Card.Title>
        </Card.Body>
      </Card>
      <Modal size="lg" centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{project.projectTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {" "}
          <div className="row">
            <div className="col-lg-6 ">
              {" "}
              <img
                className="img-fluid"
                src={`${baseUrl}/uploads/${project.projectImg}`}
                alt=""
              />
            </div>
            <div className="col-lg-6">
              <h3>Project Heading</h3>
              <h6>
                Languages used{" "}
                <span className="text-warning fw-bolder">js,Html</span>
              </h6>
              <p style={{ textAlign: "justify" }}>
                {" "}
                <span className="fw-bolder">Project overview :</span>
                {project.projectOverview}
              </p>
            </div>
          </div>
          <div className="float-start mt-3">
            <a
              className="btn btn-secondary"
              href="https://github.com/Anandhu-Manoj/Media-player.git"
            >
              {" "}
              <i className="fa-brands fa-github"></i>
            </a>
            <a
              className="btn btn-secondary ms-2"
              href="https://github.com/Anandhu-Manoj/Media-player.git"
            >
              <i className="fa-solid fa-link"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default ProjectCard;
