import React from "react";
import { Navigate } from "react-router-dom";

// interface PrivateRouteProps {
//   children: React.ReactNode;
// }

const PrivateRoute: React.FC<any> = ({ children }) => {
  const user = null;

  return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
