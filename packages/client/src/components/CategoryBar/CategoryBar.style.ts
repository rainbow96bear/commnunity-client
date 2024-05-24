import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: fit-content;
  border: 1px solid lightgray;
  border-top: none;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

export const Item = styled.div`
  padding: 10px;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 550;
  cursor: pointer;
  border-top: 2px solid red;
  box-sizing: border-box;
  text-align: left;
`;

export const SubItem = styled.div`
  padding: 10px 25px;
  width: 100%;
  box-sizing: border-box;
  border-top: 1px solid lightgray;
  text-align: left;
`;
