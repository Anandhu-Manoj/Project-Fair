import React, { useEffect, useState } from "react";
import AddProject from "../Components/AddProject";
import EditProject from "../Components/EditProject";
import { getuserSpeceficProjects } from "../../services/allApis";

const ViewProject = () => {

  const [projectdata,setProjectData]=useState([])

  const getuserProjects=async()=>{
    if(sessionStorage.getItem("token")){
      try {
        let requestHeader={
          "Authorization":`Bearer ${sessionStorage.getItem("token")}`
        }
        let apiResponse=await getuserSpeceficProjects(requestHeader)
        if(apiResponse.status==200){
          setProjectData(apiResponse.data)
          console.log(apiResponse)
        }else{
          console.log(apiResponse)
        }
      } catch (error) {
        console.log(error)
      }
    }else{
      alert("Please login")
    }
  }

  console.log(projectdata)
  useEffect(()=>{
    getuserProjects()
  },[])

  
  return (
    < >
    <div className="overflow-x-hidden">
    <div className="d-flex justify-content-between ">
        <h2 className="text-warning">All Projects</h2>
        <AddProject />
      </div>
      {projectdata?.length>0?projectdata?.map((a,index)=>(
         <div className="mt-2" key={index}>
         <div className="p-2 border rounded d-flex justify-content-between">
           <h2>{a.projectTitle}</h2>
           <div className="d-flex">
             <div className="">
               <EditProject />
             </div>
             <div className="btn">
               <a target="blank" href="">
                 <i className="fa-brands fa-gitlab"></i>
               </a>
             </div>
             <div>
               <button className="btn text-danger">
                 <i className="fa-solid fa-trash"></i>
               </button>
             </div>
           </div>
         </div>
       </div>
      )):""}
     

    </div>
     
    </>
  );
};

export default ViewProject;
