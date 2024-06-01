import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: fit-content;
  border: 1px solid lightgray;
  border-top: none;
`;

const truncateText = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Items = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  & > div {
    cursor: pointer;
    ${truncateText}
    width: 100%;
  }
`;

export const Item = styled.div`
  padding: 10px;
  width: 100%;
  font-size: 1.2rem;
  font-weight: 700;
  border-top: 2px solid red;

  text-align: left;
  ${truncateText}
`;

export const SubItem = styled.div`
  padding: 10px 25px;
  width: 100%;

  border-top: 1px solid lightgray;
  text-align: left;
  ${truncateText}
`;
