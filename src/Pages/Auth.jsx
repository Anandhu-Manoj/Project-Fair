import React from "react";
import { Col, Row } from "react-bootstrap";
import Login from "../assets/Login.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
//de structuring to pass the prompt
const Auth = ({ fromRegisterPage }) => {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="d-flex justify-content align-items-center"
    >
      <div className="container w-75 border shadow card rounded p-2">
        <Row>
          <Col>
            <img className="img-fluid" src={Login} alt="" />
          </Col>
          <Col>
            <h1 className="mt-3">
              <i className="fa-brands fa-docker"></i> project Fair
            </h1>
            <h5>sign {fromRegisterPage ? "up" : "In"} to your account</h5>

            <Form className="mt-3">
              {fromRegisterPage ? (
                <FloatingLabel
                  controlId="floatingInput"
                  label="Username"
                  className="mb-3"
                >
                  <Form.Control type="text" placeholder="Username" />
                </FloatingLabel>
              ) : (
                ""
              )}
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" placeholder="Password" />
              </FloatingLabel>

              <button className="mt-2 btn btn-primary w-100">
                {fromRegisterPage ? "Register" : "Log In"}
              </button>

              <p className="mt-2 ">
                New User? Please Click here to{" "}
                {fromRegisterPage ? (
                  <Link to={"/login"}>LogIn</Link>
                ) : (
                  <Link to={"/register"}>Register</Link>
                )}
              </p>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Auth;
