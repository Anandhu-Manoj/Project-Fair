import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Login from "../assets/Login.svg";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, registeruser } from "../../services/allApis";

//de structuring to pass the prompt

const Auth = ({ fromRegisterPage }) => {
  const navigate = useNavigate();
  const [data, setData] = useState({ username: "", password: "", email: "" });

  const btnClick = async (e) => {
    e.preventDefault();
    if (fromRegisterPage) {
      try {
        const { username, password, email } = data;
        if (username && password && email) {
          let responseData = await registeruser(data);

          if (responseData.status == 201) {
            alert("user succesfully created");
          } else {
            if (responseData.status == 409) {
              alert("user already exist please login");
              navigate('/login')
            }
          }
        } else {
          alert("please fill the form");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      if (data.email && data.password) {
        const payload = {
          email: data.email,
          password: data.password,
        };
        let apiResponse = await loginUser(payload);
        if (apiResponse?.status == 200) {
          console.log(apiResponse);

          sessionStorage.setItem("user", apiResponse?.data?.user.username);
          sessionStorage.setItem("token", apiResponse?.data?.token);
          navigate("/dashboard");
        } else if (apiResponse?.status == 401) {
          alert(apiResponse?.message);
        } else {
          alert("internal server error contact admin");
        }
      } else {
        alert("please fill the form completely");
      }
    }
  };
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
                  <Form.Control
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                    type="text"
                    placeholder="Username"
                  />
                </FloatingLabel>
              ) : (
                ""
              )}
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
                <Form.Control
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                  type="email"
                  placeholder="name@example.com"
                />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                  type="password"
                  placeholder="Password"
                />
              </FloatingLabel>

              <button onClick={btnClick} className="mt-2 btn btn-primary w-100">
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
