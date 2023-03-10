import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../firebase.init";

const ProtectedRoute = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  // console.log(user);

  if (loading) {
    return <p>Loading....</p>;
  }
  if (!user) {
    return <Navigate to={"/login"} state={{ from: location }} replace />;
  }
  return children; //<Outlet />;
};

export default ProtectedRoute;
