import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import propic from "../assets/propic.svg";
import { getProfileDetails, updateusers } from "../../services/allApis";

const Profile = () => {
  const [editResult, setEditResult] = useState([]);

  const [userData, setUserData] = useState({});
  useEffect(() => {
    getUserData();
  }, [editResult]);

  // useEffect(() => {
  //   setData({
  //     gitlink: userData.gitlink || "",
  //     linkdinlink: userData.linkdinlink || "",
  //     proimage: userData.proimage || "",
  //   });
  // }, [userData]);

  const getUserData = async () => {
    if (sessionStorage.getItem("token")) {
      let profileHeader = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      try {
        let apiResponse = await getProfileDetails(profileHeader);
        setUserData(apiResponse.data);
      } catch (error) {
        alert(error);
      }
    } else {
      alert("please login");
    }
  };

  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    gitlink: userData.gitlink,
    linkdinlink: userData.linkdinlink,
    proimage: userData.proimage
  });
  const updateProfileChanges = async () => {
    if (sessionStorage.getItem("token")) {
      if (data.gitlink && data.linkdinlink && data.proimage) {
        let reqHeader = {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          "Content-Type": "multipart/form-data",
        };
        let payLoad = new FormData();
        payLoad.append("gitlink", data.gitlink);
        payLoad.append("linkdinlink", data.linkdinlink);
        payLoad.append("proimage", data.proimage);

        let apiResponse = await updateusers(payLoad, reqHeader);
        if (apiResponse.status == 200) {
          setEditResult(apiResponse.data);
          alert("succesfully updated");
        } else {
          alert("error occured");
        }
      } else {
        alert("please fill the form");
      }
    } else {
      alert("please login");
    }
  };
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
                <input
                  onChange={(e) => {
                    setData({ ...data, proimage: e.target.files[0] });
                  }}
                  style={{ display: "none" }}
                  type="file"
                />
                <img
                  height={"200px"}
                  width={"200px"}
                  className="img-fluid rounded-circle"
                  src={propic}
                  alt=""
                />
              </label>
              <input
                onChange={(e) => setData({ ...data, gitlink: e.target.value })}
                className="form-control mt-2"
                type="text"
                placeholder="user GitHub Link"
                value={data.gitlink}
              />
              <input
                onChange={(e) =>
                  setData({ ...data, linkdinlink: e.target.value })
                }
                className="form-control mt-2"
                type="text"
                placeholder="user linkdin Link"
                value={data.linkdinlink}

              />
              <button
                className="btn btn-warning w-100 mt-2"
                onClick={updateProfileChanges}
              >
                update
              </button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;
