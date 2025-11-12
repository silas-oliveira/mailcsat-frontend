import React from "react";
import { Navigate } from "react-router-dom";
import { useCurrentUser } from "../hooks/useCurrentUser";

const PrivateRoute = ({ children }) => {
  const { user } = useCurrentUser();

  if (user === null) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        <p>Carregando usuário...</p>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/auth/login" />;
  }

  return children;
};

export default PrivateRoute;
