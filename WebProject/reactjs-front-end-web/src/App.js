import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./Components/Users/Login";
import Home from "./Components/Users/Home-me/Home";
import Checklist from "./Components/Users/Checklist";
import Edit from "./Components/Users/Edit";
import Footer from "./Components/Users/Footer-me/Footer";
import NavBar from "./Components/Users/Navbar-me/Navbar";
import Report from "./Components/Users/Report";

const isAuthenticated = () => {
  const userToken = localStorage.getItem("userToken");
  return userToken ? true : false;
};

const PrivateRoute = ({ element, path }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/" state={{ from: path }} replace />
  );
};

const App = () => {
  return (
    <div className="p-1">
      <Router>
        <div className="container mt-3">
          <Routes>
            <Route
              path="/"
              element={<Login />} />
            <Route
              path="/home"
              element={
                <React.Fragment>
                  <NavBar />
                  <PrivateRoute element={<Home />} path="/home" />
                  <Footer />
                </React.Fragment>
              }
            />
            <Route
              path="/checklist"
              element={
                <React.Fragment>
                  <NavBar />
                  <PrivateRoute element={<Checklist />} path="/checklist" />
                  <Footer />
                </React.Fragment>
              }
            />
              <Route
              path="/edit"
              element={
                <React.Fragment>
                  <NavBar />
                  <PrivateRoute element={<Edit />} path="/edit" />
                  <Footer />
                </React.Fragment>
              }
            />
            <Route
              path="/report"
              element={
                <React.Fragment>
                  <NavBar />
                  <PrivateRoute element={<Report />} path="/report" />
                  <Footer />
                </React.Fragment>
              }
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
