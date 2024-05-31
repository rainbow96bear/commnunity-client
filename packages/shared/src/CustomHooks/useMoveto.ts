import { useNavigate } from "react-router-dom";

const useMoveto = () => {
  const navigate = useNavigate();

  const moveto = (path: string) => {
    navigate(path);
  };
  return moveto;
};

export default useMoveto;
