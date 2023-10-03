export const API_NOTIFICATION_MSG = {
    loading : {
        title : 'Loading ..... ',
        message : "Something is loadinng "
    },
    success : {
        title : "Success",
        message:"Data successfully  loaded"
    },
    responseFailure:{
        title : "Failure",
        messgae : "AN erropr occured while fetching "
    },
    requestFailure:{
      title : "Reuqest Failure",
      messgae:"failure occureed form backend"
    },
    networkError:{
        title : "Error",
        message : "Unable to connect  pls check connectivity"
    }
}



export const SERVICE_URLS = {
    userSignUp: { url: '/signUp', method: 'POST' },
    userLogin : { url : '/login',method : 'POST'}
};

