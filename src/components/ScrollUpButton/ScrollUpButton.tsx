import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import { StyledButton } from "./style";

interface ScrollUpButtonProps {
  width: number;
  height: number;
  fontSize: number;
  color: string;
}

const ScrollUpButton: React.FC<ScrollUpButtonProps> = ({
  width,
  height,
  fontSize,
  color,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <StyledButton
      width={width}
      height={height}
      fontSize={fontSize}
      color={color}
      onClick={scrollToTop}>
      <FaArrowCircleUp />
    </StyledButton>
  );
};

export default ScrollUpButton;
