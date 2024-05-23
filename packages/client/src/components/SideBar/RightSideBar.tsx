import React, { ReactNode } from "react";
import { Box } from "./LeftSideBar.style";

interface RightSideBarProps {
  children: ReactNode;
}

const RightSideBar: React.FC<RightSideBarProps> = ({ children }) => {
  return <Box>{children}</Box>;
};

export default RightSideBar;
