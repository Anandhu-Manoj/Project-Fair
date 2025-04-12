import React, { useEffect, useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import propic from "../assets/propic.svg";
import { getProfileDetails, updateusers } from "../../services/allApis";

const Profile = () => {
  const [editResult, setEditResult] = useState([]);
  const [userData, setUserData] = useState({});
  const [open, setOpen] = useState(false);
  const [data, setData] = useState({
    gitlink: "",
    linkdinlink: "",
    proimage: "",
  });

  useEffect(() => {
    getUserData();
  }, [editResult]);

  useEffect(() => {
    // Update `data` whenever `userData` changes
    setData({
      gitlink: userData.gitlink || "",
      linkdinlink: userData.linkdinlink || "",
      proimage: userData.proimage || "",
    });
  }, [userData]);

  const getUserData = async () => {
    if (sessionStorage.getItem("token")) {
      let profileHeader = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      };
      try {
        let apiResponse = await getProfileDetails(profileHeader);
        if (apiResponse.status === 200) {
          setUserData(apiResponse.data);
        } else {
          alert("Failed to fetch user details");
        }
      } catch (error) {
        alert("Error fetching user details: " + error.message);
      }
    } else {
      alert("Please login");
    }
  };

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

        try {
          let apiResponse = await updateusers(payLoad, reqHeader);
          if (apiResponse.status === 200) {
            setEditResult(apiResponse.data);
            alert("Successfully updated");
          } else {
            alert("Error occurred while updating profile");
          }
        } catch (error) {
          alert("Error updating profile: " + error.message);
        }
      } else {
        alert("Please fill out the form completely");
      }
    } else {
      alert("Please login");
    }
  };

  return (
    <>
      <div className="d-flex flex-column w-100 text-center ms-5">
        <div className="d-flex justify-content-evenly">
          <h3 className="mt-2 text-warning">Profile</h3>
          <button onClick={() => setOpen(!open)} className="btn me-4">
            <i className="fa-solid fa-angle-down text-warning"></i>
          </button>
        </div>
        <Collapse in={open} className="w-75 text-center">
          <div id="example-collapse-text">
            <div className="d-flex flex-column align-items-center shadow p-2">
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
                  src={data.proimage || propic}
                  alt="Profile"
                />
              </label>
              <input
                onChange={(e) => setData({ ...data, gitlink: e.target.value })}
                className="form-control mt-2"
                type="text"
                placeholder="User GitHub Link"
                value={data.gitlink}
              />
              <input
                onChange={(e) =>
                  setData({ ...data, linkdinlink: e.target.value })
                }
                className="form-control mt-2"
                type="text"
                placeholder="User LinkedIn Link"
                value={data.linkdinlink}
              />
              <button
                className="btn btn-warning w-100 mt-2"
                onClick={updateProfileChanges}
              >
                Update
              </button>
            </div>
          </div>
        </Collapse>
      </div>
    </>
  );
};

export default Profile;