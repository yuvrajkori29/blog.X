import { useState, useContext } from 'react'
import  API from '../../service/api.js'
import { Box, TextField, Button, styled, Typography} from '@mui/material'
import { DataContext } from '../../context/Dataprovider.jsx'
import { useNavigate } from 'react-router-dom';


// import { useNavigate } from 'react-router-dom';
const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`

const Image = styled('img')({
  width: 100,
  margin: 'auto',
  display: 'flex',
  padding: '50px 0 0',
})

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div,
  & > button,
  & > p {
    margin-top: 20px;
  }
`

const LoginButton = styled(Button)`
  text-transform: none;
  background: #fb641b;
  height: 48px;
`

const SignupButton = styled(Button)`
  text-transform: none;
  background: #fff;
  color: #2874f0;
  height: 48px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0/ 20%);
`

const Text = styled(Typography)`
  color: #878787;
`
const signupInitialValues = {

  name :'',
  username :'',
  password : ''

}

const loginValues = {

  username :'',
  password : ''

}


const Error = styled(Typography) 
`
font-size : 10px;
color : #ff6161 ;
line-height : 0;
margin-top: 10px;
font--weight : 600;`

 

const Login = ( {isUserAuthenticated}) => {
  const imageURL =
    'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png'
  const [account, toggleAccount] = useState('login');
  const [error,setError]  = useState('');

  const { setAccount } = useContext(DataContext);
  



  
  //state for input changes
  const [signUp,setSignUp] =  useState(signupInitialValues);
  const [login,setLogin] = useState(loginValues);
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const { account: accountData, setAccount: setAccountData } = useContext(DataContext);

   
  const toggleSignup = () => {
    account === 'signup'?
    toggleAccount('login'): toggleAccount('signup');
  }

  //hadnle input changes
 const onInputChnge = (e)=>{
    setSignUp({...signUp,[e.target.name]:e.target.value})
 } 
 
 const onValueChange = (e)=>{
   setLogin({...login,[e.target.name]:e.target.value})
 }    

 //hadnle signup
 const userSignUp = async () => {
  try {
    let response = await API.userSignUp(signUp);
    if(response.isSuccess)
    {
      setError('');
      setSignUp(signupInitialValues);
      toggleAccount('login');
    }
    console.log('Sign-up successful:', response);
    // Handle success (e.g., show a success message to the user)
  } catch (error) {
    setError('Something went wrong ! please try again later')
    console.error('Sign-up error:', error);
    // Handle error (e.g., show an error message to the user)
  }
}

const loginUser = async ()=>{

try {
  let response  = await API.userLogin(login);
  console.log(response);

  if(response.isSuccess)
   {
    // setLogin()
    console.log("Successfully logged in");
    sessionStorage.setItem(`accessToken` ,`Bearer ${response.data.accessToken}`);
     sessionStorage.setItem(`refreshToken` , `Bearer ${response.data.refreshToken}`)

     setAccount({username : response.data.username , name : response.data.name})
     isUserAuthenticated(true) ;
     setLogin(loginValues);
     navigate('/');
    //  setLoggedIn(true);
    // setError('');
   
   
   }
} catch (error) {
  // console.log(error);
  setError('Something went wrong ! please try again later')
    console.error('Login Error :', error);
}
 
}


 



  return (
    <Component>
      <Box>
        <Image src={imageURL} alt="login" />
        {account === 'login' ? 
          <Wrapper>
            <TextField variant="standard" value={login.username} label="Enter Username" name="username" onChange={(e)=>onValueChange(e)} />
            <TextField variant="standard" value={login.password} label="Enter Password" name="password"  onChange={(e)=>onValueChange(e)} />
            <LoginButton variant="contained" onClick={()=>loginUser()}>Login</LoginButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton>
          </Wrapper>
         : 
          <Wrapper>
            <TextField variant="standard" label="Enter Name" name='name' onChange={(e)=>onInputChnge(e)} />
            <TextField variant="standard" label="Enter Username" name='username' onChange={(e)=>onInputChnge(e)}/>
            <TextField variant="standard" label="Enter Password" name='password' onChange={(e)=>onInputChnge(e)}/>
            {error && <Error>{error}</Error>}
            <SignupButton onClick={()=>userSignUp()} variant="contained">Signup</SignupButton>
            <Text style={{ textAlign: 'center' }}>OR</Text>
            <LoginButton variant="contained" onClick={() => toggleSignup()}>
              Already have an account
            </LoginButton>
          </Wrapper>
        }
      </Box>
    </Component>
  )
}

export default Login
