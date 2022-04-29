import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { Outlet, useLocation } from "react-router-dom";
import LoadingSpinner from "../LoadingSpinner";
import { LinearProgress } from "@mui/material";

const PrivateRoute: React.FC<any> = ({ allowedRoles }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return <LinearProgress sx={{ height: "8px" }} />;
  }

  return user && allowedRoles?.includes(user.role) ? (
    <Outlet />
  ) : user ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};

export default PrivateRoute;
