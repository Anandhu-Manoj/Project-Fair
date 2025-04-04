import React, { useEffect, useState } from "react";
import Header from "../Components/Header";
import { Row, Col } from "react-bootstrap";
import ProjectCard from "../Components/ProjectCard";
import { getAllProjects } from "../../services/allApis";

const Projects = () => {
  const [searchKey, setSearchkey] = useState("");

  useEffect(() => {
    getProjects();
  }, [searchKey]);
  const [projectData, setProjectData] = useState([]);

  const getProjects = async () => {
    if (sessionStorage.getItem("token")) {
      try {
        let reqHeader = {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };
        let apiResponse = await getAllProjects(reqHeader,searchKey);
        if (apiResponse.status == 200) {
          setProjectData(apiResponse.data);
        } else {
          alert(apiResponse.data);
        }
      } catch (error) {
        alert(error);
      }
    }
  };

  return (
    <div>
      <Header />
      <div style={{ paddingTop: "80px" }} className="container-fluid ">
        <div className="d-flex justify-content-between">
          <h1>All Projects</h1>
          <input
            onChange={(e) => setSearchkey(e.target.value)}
            className="form-control w-25 me-3"
            placeholder="search projects by language"
            type="text"
          />
        </div>
        <div className="mt-4">
          <Row>
            {projectData?.map((eachProject, index) => (
              <Col key={index} sm={12} md={6} lg={4}>
                <ProjectCard project={eachProject} />
              </Col>
            ))}
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Projects;
