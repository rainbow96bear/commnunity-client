import React, { ReactNode } from "react";
import { Box } from "./Body.style";

interface BodyProps {
  children: ReactNode;
}

const Body: React.FC<BodyProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default Body;
