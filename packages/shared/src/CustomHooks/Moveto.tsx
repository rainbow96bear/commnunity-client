import { useNavigate } from "react-router-dom";

export const Moveto = (router: string) => {
  const navigate = useNavigate();

  const moveToRouter = () => {
    navigate(router);
  };

  return moveToRouter;
};
