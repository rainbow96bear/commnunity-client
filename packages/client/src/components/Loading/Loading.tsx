import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "./Loading.style";

const Loading = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const from = localStorage.getItem("from");
    if (from) {
      localStorage.removeItem("from");
      navigate(from, { replace: true });
    }
  }, [navigate]);

  return <Box>로딩중</Box>;
};

export default Loading;
