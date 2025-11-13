import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const PrivateRoute = ({ children }) => {
  const { user, token } = useCurrentUser();

  if (user === null) return null

  if (!user || !token) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoute;
