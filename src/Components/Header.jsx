import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { LoginContext } from "../contexts/AuthhContext"; // Corrected the context name

const Header = ({ insideDashBoard }) => {
  const { isLoggedIn, setIsLoggedIn } = useContext(LoginContext); // Corrected the context name

  const loggedOut = () => {
    sessionStorage.clear();
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Navbar className="shadow">
        <Container>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Navbar.Brand className="text-white" href="/">
              <i className="fa-brands fa-docker"></i> Project Fair
            </Navbar.Brand>
          </Link>
          {insideDashBoard && (
            <button className="btn btn-link fw-bold" onClick={loggedOut}>
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          )}
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;