 import { useState } from "react";
//components
import Login from "./components/account/Login";
import Home from "./components/Home/Home";
import Header from "./components/Header/header";
import { BrowserRouter, Outlet, Route ,Routes,Navigate } from "react-router-dom";
import React from "react";
import DataProvider from "./context/Dataprovider";

const PrivateRoute = ({ isAuthenticated,...props})=> {
    return 
      isAuthenticated ?
    <>
    <Outlet/>
    </>
    :<Navigate replace to='/login'/>
    
}

function App() {
  const[isAuthenticated , isUserAuthenticated] = useState(false);
  return (
    <DataProvider>
      <BrowserRouter>
      <Header/>
        <div style={{ marginTop: "64px" }}>

          <Routes>
            <Route path="/login" element ={<Login />} />
            <Route path ='/' element= {<Login PrivateRoute isAuthenticated={isUserAuthenticated}/>} />
            <Route path="/Home" element={<Home />} />
           
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
