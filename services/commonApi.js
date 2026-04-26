import axios from "axios";

const commonApi = async (reqURL, reqMethod, reqHeader = null, reqBody = null) => {
  const config = {
    url: reqURL,
    method: reqMethod,
    timeout: 300000,
  };

  if (reqBody) config.data = reqBody;

  const token = localStorage.getItem("token");
  config.headers = {
    "Content-Type": "application/json",
    ...(token && { Authorization: `Bearer ${token}` }),
    ...reqHeader,
  };

  try {
    const response = await axios(config);
    return response;
  } catch (error) {
    // Re-throw with readable message
    const message =
      error.response?.data?.message || error.message || "Something went wrong";
    throw new Error(message);
  }
};

export default commonApi;