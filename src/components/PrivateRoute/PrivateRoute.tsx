import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Outlet, useLocation } from "react-router-dom";

const PrivateRoute: React.FC<any> = ({ children }) => {
  const { user, result } = useAuth();

  if (!user && result.isLoading) {
    return <div>Loading...</div>;
  }

  // if (!user) {
  //   console.log(data, "data useAuth");
  // }

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
