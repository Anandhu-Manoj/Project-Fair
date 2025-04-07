import React, { useContext, useEffect, useState } from "react";
// import uploadimage from "../assets/uploadIMG.jpg";
import { Modal, Button } from "react-bootstrap";
import baseUrl from "../../services/baseUrl.JS";
import { updateProjects } from "../../services/allApis";
import { EditProjectContext } from "../contexts/ProjectContext";

const EditProject = ({ project }) => {

  const {editProjectResponse, SeteditProjectResponse}=useContext(EditProjectContext)
  console.log(baseUrl);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [preview, setPreview] = useState("");
  const [imgTypeStatus, setImgTypeStatus] = useState(false);

  const [projectDetails, setProjectDetails] = useState({
    projectID: project._id,
    projectImg: "",
    projectTitle: project.projectTitle,
    projectLanguage: project.projectLanguage,
    projectOverview: project.projectOverview,
    projectGitLink: project.projectGitLink,
    projectWebsiteLink: project.projectWebsiteLink,
  });
  useEffect(() => {
    if (projectDetails.projectImg) {
      if (
        projectDetails.projectImg.type == "image/png" ||
        projectDetails.projectImg.type == "image/jpg" ||
        projectDetails.projectImg.type == "image/jpeg"
      ) {
        setImgTypeStatus(true);
        setPreview(URL.createObjectURL(projectDetails.projectImg));
      } else {
        setImgTypeStatus(false);
        alert("please upload only specified data");
      }
    }
  }, [projectDetails.projectImg]);

  const onEditBtnClick = async () => {
    if (
     
      projectDetails.projectTitle &&
      projectDetails.projectLanguage &&
      projectDetails.projectOverview &&
      projectDetails.projectGitLink &&
      projectDetails.projectWebsiteLink
    ) {
      const payload = new FormData();

      payload.append("projectTitle", projectDetails.projectTitle);
      payload.append("projectLanguage", projectDetails.projectLanguage);
      payload.append("projectOverview", projectDetails.projectOverview);
      payload.append("projectGitLink", projectDetails.projectGitLink);
      payload.append("projectWebsiteLink", projectDetails.projectWebsiteLink);

      preview
        ? payload.append("projectImg", projectDetails.projectImg)
        : payload.append("projectImg", project.projectImg);

      const token = sessionStorage.getItem("token");

      if (token) {
        let reqHeader = {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        };

        let apiResponse = await updateProjects(
          projectDetails.projectID,
          payload,
          reqHeader
        );
        console.log(apiResponse);
        if(apiResponse.status==200){
          SeteditProjectResponse(apiResponse.data)
          alert('updated succesfully')
          handleClose()

          
        }else{
          alert('error while updating')
        }
      }
      } else {
        alert("please fill the form");
      }
    
  };

  return (
    <>
      <button className="btn" onClick={handleShow}>
        <i className="fa-solid fa-pen-to-square"></i>
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
                    setProjectDetails({
                      ...projectDetails,
                      projectImg: e.target.files[0],
                    })
                  }
                  type="file"
                  style={{ display: "none" }}
                />

                <img
                  className="img-fluid"
                  src={
                    preview
                      ? preview
                      : `${baseUrl}/uploads/${project.projectImg}`
                  }
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
                  setProjectDetails({
                    ...projectDetails,
                    projectTitle: e.target.value,
                  })
                }
                type="text"
                value={projectDetails.projectTitle}
                placeholder="project Title"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    projectLanguage: e.target.value,
                  })
                }
                type="text"
                value={projectDetails.projectLanguage}
                placeholder="project Language"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    projectOverview: e.target.value,
                  })
                }
                type="text"
                value={projectDetails.projectOverview}
                placeholder="project OverView"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    projectGitLink: e.target.value,
                  })
                }
                type="text"
                value={projectDetails.projectGitLink}
                placeholder="project GitHub Link"
                className="form-control mt-2"
              />
              <input
                onChange={(e) =>
                  setProjectDetails({
                    ...projectDetails,
                    projectWebsiteLink: e.target.value,
                  })
                }
                type="text"
                value={projectDetails.projectWebsiteLink}
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
          <Button variant="primary" onClick={onEditBtnClick}>
            Understood
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default EditProject;
