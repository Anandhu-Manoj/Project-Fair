import commonApi from "./commonApi";

export const registeruser=async(reqbody)=>{
    return await commonApi("post","/register",reqbody)
}

export const loginUser=async(reqbody)=>{
return await commonApi('post','/login',reqbody)
}
export const addProject=async(reqbody,reqHeader)=>{
return await commonApi('post','/addProject',reqbody,reqHeader)
}
export const getHomeProjectData=async()=>{
return await commonApi('get','/homeProjects',"")
}


export const getAllProjects=async(reqHeader)=>{
return await commonApi('get','/getAllProjects',"",reqHeader)
}

export const getuserSpeceficProjects=async(reqHeader)=>{
return await commonApi('get','/speceficProjects',"",reqHeader)
}

