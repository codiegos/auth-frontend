import React from "react";
import Login from "./pages/Login";
import Home from "./pages/Home";
import UserDetails from "./pages/UserDetails";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/home" element={<Home />} />
      <Route exact path="/userdetails" element={<UserDetails />} />
    </Routes>
  );
};

export default App;
