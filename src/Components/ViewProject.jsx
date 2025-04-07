import React, { useContext, useEffect, useState } from "react";
import AddProject from "../Components/AddProject";
import EditProject from "../Components/EditProject";
import { deleteProject, getuserSpeceficProjects } from "../../services/allApis";
import {
  addProjectContext,
  EditProjectContext,
} from "../contexts/ProjectContext";

const ViewProject = () => {

  const [deleteProjectResp,setDeleteProjectResp]=useState([])
  const [projectdata, setProjectData] = useState([]);
  const { addProjectResponse, SetAddProjectResponse } =
    useContext(addProjectContext);
  const { editProjectResponse, SeteditProjectResponse } =
    useContext(EditProjectContext);

  const getuserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      try {
        let requestHeader = {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        };
        let apiResponse = await getuserSpeceficProjects(requestHeader);
        if (apiResponse.status == 200) {
          setProjectData(apiResponse.data);
          console.log(apiResponse);
        } else {
          console.log(apiResponse);
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      alert("Please login");
    }
  };

  console.log(projectdata);
  useEffect(() => {
    getuserProjects();
  }, [addProjectResponse, editProjectResponse,deleteProjectResp]);

  const onDeleteClick = async (id) => {
    if (sessionStorage.getItem("token")) {
      const reqHeader = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      try {
        let apiResponse = await deleteProject(id, reqHeader);
        console.log(apiResponse);
        if(apiResponse.status==200){
          setDeleteProjectResp(apiResponse.data)

        }else{alert('error occured')}
      } catch (error) {
        console.log(error);
      }
    }
   
  };

  return (
    <>
      <div className="overflow-x-hidden">
        <div className="d-flex justify-content-between ">
          <h2 className="text-warning">All Projects</h2>
          <AddProject />
        </div>
        {projectdata?.length > 0
          ? projectdata?.map((a, index) => (
              <div className="mt-2" key={index}>
                <div className="p-2 border rounded d-flex justify-content-between">
                  <h2>{a.projectTitle}</h2>
                  <div className="d-flex">
                    <div className="">
                      <EditProject project={a} />
                    </div>
                    <div className="btn">
                      <a target="blank" href="">
                        <i className="fa-brands fa-gitlab"></i>
                      </a>
                    </div>
                    <div>
                      <button
                        onClick={() => onDeleteClick(a._id)}
                        className="btn text-danger"
                      >
                        <i className="fa-solid fa-trash"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    </>
  );
};
export default ViewProject;
