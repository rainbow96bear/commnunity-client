import React from "react";
import { FaArrowCircleUp } from "react-icons/fa";
import styled from "styled-components";

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
    console.log("Scroll to top triggered");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const StyledButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: ${width}px;
    height: ${height}px;
    background-color: white;
    color: ${color};
    font-size: ${fontSize}px;
    border-radius: 50%;
    cursor: pointer;
  `;

  return (
    <StyledButton onClick={scrollToTop}>
      <FaArrowCircleUp />
    </StyledButton>
  );
};

export default ScrollUpButton;
