import axios from "axios";
import baseUrl from "./baseUrl.JS";

const commonApi = async (httpMethod, endPoint, requestBody) => {
  const requestConfig = {
    method: httpMethod,
    url: baseUrl + endPoint,
    data: requestBody,
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
