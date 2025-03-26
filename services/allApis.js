import commonApi from "./commonApi";

export const registeruser=async(reqbody)=>{
    return await commonApi("post","/register",reqbody)
}

export const loginUser=async(reqbody)=>{
return await commonApi('post','/login',reqbody)
}