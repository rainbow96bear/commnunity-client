import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../AuthContext/AuthContext";

const PrivateRoutes: React.FC = () => {
  const { accessToken } = useAuth();
  const location = useLocation();

  return accessToken ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoutes;
