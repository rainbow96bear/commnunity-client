import React, { ReactNode } from "react";
import { Box } from "./LeftSideBar.style";

interface LeftSideBarProps {
  children: ReactNode;
}

const LeftSideBar: React.FC<LeftSideBarProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default LeftSideBar;
