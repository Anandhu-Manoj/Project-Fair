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


export const getAllProjects=async(reqHeader,searchKey)=>{
return await commonApi('get',`/getAllProjects?search=${searchKey}`,"",reqHeader)
}

export const getuserSpeceficProjects=async(reqHeader)=>{
return await commonApi('get','/speceficProjects',"",reqHeader)
}
export const updateProjects=async(id,reqBody,reqHeader)=>{
return await commonApi('put',`/project/${id}/update`,reqBody,reqHeader)
}


//delete
export const deleteProject=async(id,reqHeader)=>{
 return await commonApi('delete',`/project/${id}/delete`,{},reqHeader)
}

