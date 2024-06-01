import { PacmanLoader } from "react-spinners";
import { Box } from "./Loading.style";
import { color_3db } from "src/constant";

const Loading = () => {
  return (
    <Box>
      <PacmanLoader color={color_3db}></PacmanLoader>
    </Box>
  );
};

export default Loading;
