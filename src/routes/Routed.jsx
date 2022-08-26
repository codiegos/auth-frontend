import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";

function Routed() {
  const token = localStorage.getItem("token");
  let routes;
  if (token) {
    routes = (
      <>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route element={<Home />} path="/home" />
      </>
    );
  } else {
    routes = (
      <>
        <Route element={<Login />} exact path="/" />
        <Route path="*" element={<Navigate to="/" replace />} />
      </>
    );
  }

  return <Routes>{routes}</Routes>;
}

export default Routed;
