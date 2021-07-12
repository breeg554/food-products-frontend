import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials: true,
});

const getNewAccessToken = async () => {
  const res = await api.post("/token");
  return res.data;
};

api.interceptors.request.use(
  async (config) => {
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);
api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    console.log(error.response);
    const originalRequest = error.config;

    if (
      error.response.status === 403 &&
      !originalRequest._retry &&
      error.response.data.error.message !== "invalid csrf token"
    ) {
      originalRequest._retry = true;
      await getNewAccessToken();
      return axios(originalRequest);
    }
    return originalRequest;
  }
);
export default api;
