import axios from "axios";

export const configureAxios = () => {

  // Configure Axios to send cookies
  axios.defaults.withCredentials = true;

  // Add an interceptor that handles 401 Unauthorized errors
  axios.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error.response && error.response.status === 401) {
        // Redirect to the login page
        window.location.href = "/login";
      }
      return Promise.reject(error);
    }
  );
};

