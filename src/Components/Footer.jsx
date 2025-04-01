import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className="row border p-3">
        <div className="col-4">
          <h3>
            <i className="fa-brands fa-docker m-2"></i>Project Fair
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non neque
            eveniet error, voluptas repellendus sequi pariatur, eaque deserunt
          </p>
        </div>
        <div className="col-2">
          <h3>Links</h3>
          <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
            Home Page
          </Link>
          <br />
          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Register Page
          </Link>
          <br />
          <Link
            to={"/projects"}
            style={{ textDecoration: "none", color: "white" }}
          >
            Projects Page
          </Link>
        </div>
        <div className="col-3">
          <h3>Guides</h3>

          <p>
            React <br />
            React Router <br />
            React Bootstrap
          </p>
        </div>
        <div className="col-3">
          <h3>Content</h3>
          <input
            style={{
              borderRadius: "5px",
              margin: "0px",
              fontSize: "12px",
              outline: "none",
            }}
            type="email"
            name=""
            id=""
            placeholder="Enter your E-mail here!!!"
          />
          <button className="btn-info m-2" style={{ width: "40px" }}>
            {" "}
            →{" "}
          </button>
          <div className="d-flex ">
            <i className="fa-brands fa-twitter m-1"></i>
            <i className="fa-brands fa-instagram m-1 ms-3"></i>
            <i className="fa-brands fa-facebook-f m-1 ms-3"></i>
            <i className="fa-brands fa-linkedin m-1 ms-3"></i>
            <i className="fa-brands fa-github m-1 ms-3"></i>
            <i className="fa-solid fa-phone m-1 ms-3"></i>
          </div>
        </div>
        <p className="text-center mt-1">
          Copyright © july 2024 Batch. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
