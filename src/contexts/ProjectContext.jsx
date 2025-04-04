import React, { createContext, useState } from "react";

export const addProjectContext = createContext();

const ProjectContext = ({ children }) => {
  const [addProjectResponse, SetAddProjectResponse] = useState([]);

  //created states to store conditions

  return (
    <div>
      <addProjectContext.Provider
        value={(addProjectResponse, SetAddProjectResponse)}
      >
        {children}
      </addProjectContext.Provider>
    </div>
  );
};

export default ProjectContext;
