import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "src/hooks/useAuth";

const PrivateRoutes: React.FC = () => {
  const { userInfo } = useAuth();
  const location = useLocation();

  return userInfo ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoutes;
