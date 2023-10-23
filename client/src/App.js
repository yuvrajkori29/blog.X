 import { useState } from "react";
 import { Box } from '@mui/material';
//components
import Login from "./components/account/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/header";
import { BrowserRouter, Outlet, Route ,Routes,Navigate } from "react-router-dom";
import React from "react";
import DataProvider from "./context/Dataprovider";

const PrivateRoute = ({ isAuthenticated,...props})=> {
    return isAuthenticated ?
    <>
    <Header/>
    <Outlet/>
    </>:<Navigate replace to='/login'/>
    
}

function App() {
  const[isAuthenticated , isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
        <Box style={{ marginTop: "64px" }}>
 
          <Routes>
            <Route path='/login' element ={<Login isUserAuthenticated={isUserAuthenticated} />} />


            <Route path ='/' element= {<PrivateRoute isAuthenticated={isAuthenticated} />} >
               <Route path='/' element={<Home />} />
           </Route>


          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
