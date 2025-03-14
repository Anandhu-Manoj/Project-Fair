import React from "react";
import AddProject from "../Components/AddProject";
import EditProject from "../Components/EditProject";

const ViewProject = () => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <h2 className="text-warning">All Projects</h2>
        <AddProject />
      </div>
      <div className="mt-2">
        <div className="p-2 border rounded d-flex justify-content-between">
          <h2>Title</h2>
          <div className="d-flex">
            <div className="btn">
              <EditProject />
            </div>
            <div className="btn">
              <a href="">
                <i class="fa-brands fa-gitlab"></i>
              </a>
            </div>
            <div>
              <button className="btn text-danger">
                <i class="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProject;
