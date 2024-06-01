import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  & > div {
    display: flex;
    flex-wrap: wrap;
  }
`;

const truncateText = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Number = styled.div`
  flex: 1;
  text-align: center;
  ${truncateText}
`;
export const Title = styled.div`
  flex: 7;
  cursor: pointer;
  ${truncateText}
`;

export const Writer = styled.div`
  flex: 2;
  text-align: center;
  ${truncateText}
`;

export const commonListItem = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid gray;
  width: 100%;
  & > div {
    padding: 0px 10px;
  }
`;

export const ListItem = styled(commonListItem)`
  text-align: left;
`;

export const ListHeader = styled(commonListItem)`
  font-weight: bold;
`;
