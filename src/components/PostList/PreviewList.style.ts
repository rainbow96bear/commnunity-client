import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  overflow: hidden;
  & > h3 {
    text-align: left;
    margin: 0px;
    padding-bottom: 10px;
    border-bottom: 2px solid black;
  }
`;

export const Item = styled.div`
  display: flex;
  border-bottom: 1px solid lightgray;
  padding: 10px 0px;
  width: 100%;
  & > div {
    cursor: pointer;
  }
  & > div:not(:first-child) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  & > :first-child {
    color: blue;
    padding: 0px 10px;
    width: fit-content;
  }
`;
