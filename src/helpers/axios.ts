import axios from "axios";
const API_KEY = '75fce75f85054b16c12b8b2d5bc79559';
const API_URL = `https://gateway.marvel.com:443/v1/public`;

const axiosInstance = axios.create({
        baseURL: API_URL,
        headers:{
                "Content-Type": "application/json",
        },
        params:{
          apikey:API_KEY,
          limit:100
        }
});


axiosInstance.interceptors.response.use(
        (res) => {
          return res;
        },
        (error) => {
          // console.log(error.response);
          const status = error.response ? error.response.status : 400;
          if (status && status === 400) {
           console.error(error)
            
          }
          return Promise.reject(error);
        }
      );
      
export default axiosInstance;
