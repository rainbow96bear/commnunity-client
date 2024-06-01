import styled from "styled-components";

interface StyledButtonProps {
  width: number;
  height: number;
  fontSize: number;
  color: string;
}

export const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: white;
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize}px;
  border-radius: 50%;
  cursor: pointer;
`;
