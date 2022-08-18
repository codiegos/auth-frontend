import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";
import Login from "../pages/Login";
import PrivateRoutes from "./PrivateRoutes";

function Routed() {
  return (
    <Routes>
      <Route element={<PrivateRoutes/>}>
        <Route element={<Home/>} exact path="/home" />
        <Route element={<UserDetails/>} exact path="/userdetails" />
      </Route>
        <Route element={<Login/>} exact path="/" />
    </Routes>
  );
}

export default Routed;
