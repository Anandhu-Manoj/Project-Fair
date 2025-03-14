import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

const Header = ({ insideDashBoard }) => {
  return (
    <div>
      {" "}
      <Navbar className="shadow">
        <Container>
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <Navbar.Brand className="text-white" href="/">
              <i className="fa-brands fa-docker"></i> project Fair
            </Navbar.Brand>
          </Link>
          {insideDashBoard && (
            <button className="btn btn-link fw-bold">
              Logout <i className="fa-solid fa-right-from-bracket"></i>
            </button>
          )}
          
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
