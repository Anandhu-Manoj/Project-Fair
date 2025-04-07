import React, { createContext, useState } from "react";

export const addProjectContext = createContext();
export const EditProjectContext = createContext();

const ProjectContext = ({ children }) => {
  const [addProjectResponse, SetAddProjectResponse] = useState([]);
  const [editProjectResponse, SeteditProjectResponse] = useState([]);

  //created states to store conditions

  return (
    <div>
      <addProjectContext.Provider
        value={{ addProjectResponse, SetAddProjectResponse }}
      >
        <EditProjectContext.Provider
          value={{ editProjectResponse, SeteditProjectResponse }}
        >
          {children}
        </EditProjectContext.Provider>
      </addProjectContext.Provider>
    </div>
  );
};

export default ProjectContext;
