import axios from "axios";
import baseUrl from "./baseUrl.JS";

const commonApi = async (httpMethod, endPoint, requestBody, requestHeader) => {
  const requestConfig = {
    method: httpMethod,
    url: baseUrl + endPoint,
    data: requestBody,
    headers: requestHeader
      ? requestHeader
      : { "Content-Type": "application/json" },
  };
  return await axios(requestConfig)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export default commonApi;
