import axios from "axios";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

let Api = axios.create({
  baseURL: 'http://p-7.test/api',

  headers: {
    "Content-type": "application/json",
    accept: "application/json",
  },
  transformResponse: (data) => {
    let response = JSON.parse(data);  
    console.log("🚀 ~ file: http.js:14 ~ response:", response)
    if (response?.status == 201) {
      const MySwal = withReactContent(Swal)
      MySwal.fire({
        position: 'top-end',
        icon: 'success',
        title: response?.message,
        showConfirmButton: false,
        timer: 1500
      })
    }
    return response;
  },

  validateStatus: function (status) {
    if (status === 401) {
      localStorage.removeItem("user");
      window.location.href = "/";
    }
    
    if (status === 422) {
      return status;
    }

    return status >= 200 && status < 300; // default
  },
});

Api.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${
    localStorage.getItem("accessToken") && JSON.parse(localStorage.getItem("accessToken"))
  }`;
  return config;
});

export default Api;