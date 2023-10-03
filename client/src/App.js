import "./App.css";

//components
import Login from "./components/account/Login";
import Home from "./components/Home/Home";
import { BrowserRouter, Route ,Routes } from "react-router-dom";
import React from "react";
import DataProvider from "./context/Dataprovider";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <div style={{ marginTop: "64px" }}>
          <Routes>
            <Route path="/login" element ={<Login />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
