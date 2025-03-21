import commonApi from "./commonApi";

export const registeruser=async(reqbody)=>{
    return await commonApi("post","/register",reqbody)
}