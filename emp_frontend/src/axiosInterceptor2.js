import axios from "axios";
const axiosInstance=axios.create({
    baseURL:'https://employ-app-server.vercel.app/'
})
axiosInstance.interceptors.request.use(function (config) {
    
    const accessToken=sessionStorage.getItem('token2');
    if(accessToken){
        if(config){
            config.headers.token=accessToken;
        }
    }
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

  export default axiosInstance