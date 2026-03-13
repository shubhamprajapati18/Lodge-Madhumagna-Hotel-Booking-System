import React from "react";
import { Navigate } from "react-router-dom";

// Checks if a token exists in localStorage.
// If not, redirects to the admin login page.
const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/admin/login" replace />;
};

export default PrivateRoute;
