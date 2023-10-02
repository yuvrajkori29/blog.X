import axios from 'axios';
import { API_NOTIFICATION_MSG, SERVICE_URLS } from '../constants/config.js';



const API_URL = "http://localhost:8000";


const axiosInstance = axios.create({
    baseURL : API_URL,
    timeout : 10000,
    headers : {
        "content-Type" : "application/json"
    }
})

axiosInstance.interceptors.request.use(
    function(config)
    {
        return config;
    },
    function(error)
    {return Promise.reject(error);}

)


axiosInstance.interceptors.response.use(
    function(response)
    {
        return processResponse(response);
    },
    function(error)
    {return Promise.reject(processError(error));}

)


const processResponse = (response)=>{
    if (response?.status===200)
    {
return {isSuccess : true , data:response.data}
    }
    else
    {
        return {isFailure : true,
        status : response?.status,
    msg : response?.msg,
code : response?.code}
    }

}


const processError = (error)=>{
    if (error.response)
    {
        //server responsed with diff sttus code taht falss outb of 2.x.x
        console.log("eroor in  response",error.toJSON());
        return{isError : true,
        msg : API_NOTIFICATION_MSG.responseFailure,
        code : error.response.status}
    }
    else if(error.request)
    {
        //req made but no res
        console.log("eroor in request",error.toJSON());
        return{isError : true,
         
        msg : API_NOTIFICATION_MSG.requestFailure,
    code : ""}
    }

    else 
    {
        //something happende in setting up
        console.log("eroor in netwrok",error.toJSON());
        return {isError : true,
        msg : API_NOTIFICATION_MSG.networkError,
        code : ""}
    }

}

const API = {};

for (const [key,value] of Object.entries(SERVICE_URLS)){
    API[key]  = (body,showUploadProgress,showDownloadProgress) =>
        axiosInstance({
            method : value.method,
            url : value.url,
            data : body,
            responseType :value.responseType,
            onUploadProgress:function(progressEvent)
            {
                if(showUploadProgress)
                {
                    let percent = Math.round((progressEvent.loaded * 100)/progressEvent.total);
                    showUploadProgress(percent);
                }
            },
            onDownloadProgress:function(progressEvent)
            {
                if(showDownloadProgress)
                {
                    let percent = Math.round((progressEvent.loaded * 100)/progressEvent.total);
                    showDownloadProgress(percent);
                }
            }
        })
    
}


export default API ;