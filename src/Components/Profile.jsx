import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import propic from "../assets/propic.svg";

const Profile = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="d-flex flex-column w-100 text-center ms-5">
        <div className="d-flex  justify-content-evenly ">
          <h3 className=" mt-2 text-warning">Profile </h3>
          <button onClick={() => setOpen(!open)} className="btn me-4">
            {" "}
            <i className=" fa-solid fa-angle-down text-warning"></i>
          </button>
        </div>
        <Collapse in={open} className="w-75 text-center">
          <div id="example-collapse-text">
            <div className="d-flex flex-column align-items-center shadow p-2 ">
              <label>
                <input style={{ display: "none" }} type="file" />
                <img
                  height={"200px"}
                  width={"200px"}
                  className="img-fluid rounded-circle"
                  src={propic}
                  alt=""
                />
              </label>
              <input
                className="form-control mt-2"
                type="text"
                placeholder="user GitHub Link"
              />
              <input
                className="form-control mt-2"
                type="text"
                placeholder="user linkdin Link"
              />
              <button className="btn btn-warning w-100 mt-2">update</button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;
