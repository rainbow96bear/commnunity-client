import { PacmanLoader } from "react-spinners";
import { Box } from "./Loading.style";

const Loading = () => {
  return (
    <Box>
      <PacmanLoader color="#36d7b7"></PacmanLoader>
    </Box>
  );
};

export default Loading;
