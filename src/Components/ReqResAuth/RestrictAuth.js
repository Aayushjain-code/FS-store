import React from "react";
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const RistrictAuth = () => {
  const {
    authState: { userId },
  } = useAuth();
  const location = useLocation();
  return userId ? (
    <Navigate to="/" state={{ from: location }} replace />
  ) : (
    <Outlet />
  );
};

export default RistrictAuth;
