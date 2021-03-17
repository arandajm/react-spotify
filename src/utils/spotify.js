import axios from "axios";
export const getTokenFromUrl = () => {
  return window.location.hash
    .slice(1)
    .split("&")
    .reduce((prev, curr) => {
      const [key, value] = curr.split("=");
      prev[key] = decodeURIComponent(value);
      return prev;
    }, {});
};
export const setAuthHeader = () => {
  try {
    const params = JSON.parse(localStorage.getItem("params"));
    if (params) {
      axios.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${params.access_token}`;
    }
  } catch (error) {
    console.log("Error setting auth", error);
  }
};
