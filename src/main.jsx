import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import ProjectContext from "./contexts/ProjectContext.jsx";
import AuthhContext from "./contexts/AuthhContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthhContext>
        <ProjectContext>
          <App />
        </ProjectContext>
      </AuthhContext>
    </BrowserRouter>
  </StrictMode>
);
