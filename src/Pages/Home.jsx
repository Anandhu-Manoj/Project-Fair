import React from "react";
import { Link } from "react-router-dom";
import landingImage from "../assets/landingIMG.jpg";
import ProjectCard from "../Components/ProjectCard";
import Card from "react-bootstrap/Card";

const Home = () => {
  return (
    <>
      <div
        style={{ minHeight: "100vh" }}
        className="d-flex justify-content-center align-items-center rounded shadow"
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 style={{ fontSize: "80px" }}>
                <i className="fa-brands fa-docker"></i>Project Fair
              </h1>
              <p style={{ textAlign: "justify" }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestias, non ipsa itaque sequi voluptates molestiae totam
                porro laboriosam. Iste aspernatur possimus ipsa dolores ducimus
                facere maiores illum maxime beatae sint.
              </p>
              <Link className="btn btn-warning" to={"/dashboard"}>
                Start to explore
              </Link>
            </div>
            <div className="col-lg-6">
              <img className="img-fluid" src={landingImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5 text-center">
        <h1 className="mt-5">Explore Our Project</h1>
        <marquee behavior="" direction="">
          <div className="d-flex">
            <div className="me-5">
              <ProjectCard />
            </div>
          </div>
        </marquee>
        <button className="btn btn-link mt-5">
          CLICK HERE TO VIEW MORE PROJECTS..
        </button>
      </div>
      <div className="d-flex justify-content-center align-items-center mt-5 flex-column">
        <h1>Our Testimonials</h1>

        <div className="d-flex justify-content-evenly align-items-center mt-3 w-100">
          <Card style={{ width: "18rem" }}>
            <Card.Body>
              <Card.Title className="d-flex justify-content-center align-items-center flex-column">
                {" "}
                <img
                  height={"60px"}
                  width={"60px"}
                  className="img-fluid rounded-circle"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkkVsRNVJ7O7xNGK7IXtRwchi4NsKzUUdPMMcmIdbDKH_x6DKXR2EQGWrBiM8KKga7Ey0&usqp=CAU"
                  alt="user"
                />
                <span>MAX MILLER</span>
              </Card.Title>
              <Card.Text>
                <div className="d-flex justify-content-center">
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                  <i class="fa-solid fa-star text-warning"></i>
                </div>
              </Card.Text>
              <Card.Text>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
