import { useSelector } from "react-redux";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { RootState } from "src/store";

const PrivateRoutes: React.FC = () => {
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const location = useLocation();

  return userInfo.id != "" ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default PrivateRoutes;
