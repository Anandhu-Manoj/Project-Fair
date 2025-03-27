import React, { useEffect } from "react";
import { useState } from "react";
import Button from "react-bootstrap/Button";

import Modal from "react-bootstrap/Modal";
import uploadimage from "../assets/uploadIMG.jpg";

const AddProject = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => {
    clearContent();
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState("");
  const [imgTypeStatus, setImgTypeStatus] = useState(false);
  const [projectData, setProjectData] = useState({
    projectImg: "",
    projectTitle: "",
    projectLanguage: "",
    projectOverview: "",
    projectGitLink: "",
    projectWebsiteLink: "",
  });


  
  const onBtnClick = () => {
    if (
      projectData.projectGitLink &&
      projectData.projectImg &&
      projectData.projectLanguage &&
      projectData.projectOverview &&
      projectData.projectTitle &&
      projectData.projectWebsiteLink
    ) {const payload=new FormData()

      payload.append("projectImg",projectData.projectImg)
      payload.append("projectTitle",projectData.projectTitle)
      payload.append("projectLanguage",projectData.projectLanguage)
      payload.append("projectOverview",projectData.projectOverview)
      payload.append("projectGitLink",projectData.projectGitLink)
      payload.append("projectWebsiteLink",projectData.projectWebsiteLink)
    }else{'please fill the form correctly'}
  };
  //showing image
  useEffect(() => {
    if (projectData.projectImg) {
      if (
        projectData.projectImg.type == "image/png" ||
        projectData.projectImg.type == "image/jpg" ||
        projectData.projectImg.type == "image/jpeg"
      ) {
        setImgTypeStatus(true);
        setPreview(URL.createObjectURL(projectData.projectImg));
      } else {
        setImgTypeStatus(false);
        alert("please upload only specified data");
      }
    }
  }, [projectData.projectImg]);

  //used to clear contents inside the modal
  const clearContent = () => {
    setProjectData({
      ...projectData,
      projectImg: "",
      projectTitle: "",
      projectLanguage: "",
      projectOverview: "",
      projectGitLink: "",
      projectWebsiteLink: "",
    });
    setPreview(""), setImgTypeStatus(false);
  };

  return (
    <>
      <button onClick={handleShow} className="btn btn-primary">
        <i className="fa-solid fa-plus"></i> new project
      </button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-4">
              <label>
                <input
                  onChange={(e) =>
                    setProjectData({
                      ...projectData,
                      projectImg: e.target.files[0],
                    })
                  }
                  type="file"
                  style={{ display: "none" }}
                />
                <img
                  className="img-fluid"
                  src={preview ? preview : uploadimage}
                  alt=""
                />
              </label>
              {!imgTypeStatus ? (
                <p className="text-warning fw-bolder mt-3">
                  *upload only the following file types (jpeg,jpg,png) here!!!*
                </p>
              ) : (
                ""
              )}
            </div>
            <div className="col-lg-8">
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectTitle: e.target.value,
                  })
                }
                type="text"
                placeholder="project Title"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectLanguage: e.target.value,
                  })
                }
                type="text"
                placeholder="project Language"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectOverview: e.target.value,
                  })
                }
                type="text"
                placeholder="project OverView"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectGitLink: e.target.value,
                  })
                }
                type="text"
                placeholder="project GitHub Link"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectData({
                    ...projectData,
                    projectWebsiteLink: e.target.value,
                  })
                }
                type="text"
                placeholder="project Website Link"
                className="form-control mt-2"
              />
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button onClick={onBtnClick} variant="primary">
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AddProject;
