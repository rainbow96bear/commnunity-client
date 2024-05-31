import styled from "styled-components";

// 박스 컨테이너 스타일
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0px 20px;
  background-color: #fff;
`;

// 셀렉트 입력 필드 스타일
export const SelectInput = styled.select`
  padding: 12px;
  border: 1px solid #d32f2f;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;
  appearance: none;
  outline: none;
  cursor: pointer;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23d32f2f' width='24' height='24'%3E%3Cpath d='M7 10l5 5 5-5z'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px top 50%;
  background-size: 20px auto;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    border-color: #ffa940;
  }
`;

// 제목 입력 필드 스타일
export const TitleInput = styled.input`
  padding: 12px;
  border: 1px solid #d32f2f;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;
  outline: none;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    border-color: #ffa940;
  }
`;

// 내용 입력 필드 스타일
export const ContentInput = styled.textarea`
  padding: 12px;
  border: 1px solid #d32f2f;
  border-radius: 5px;
  font-size: 14px;
  background-color: #fff;
  min-height: 200px;
  resize: vertical;
  outline: none;

  &:hover {
    background-color: #f5f5f5;
  }

  &:focus {
    border-color: #ffa940;
  }
`;

// 버튼 스타일
export const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #d32f2f;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ff6347;
  }
`;

export const ErrorText = styled.p`
  font-size: 12px;
  color: #d32f2f;
  margin-top: -10px;
  margin-bottom: 5px;
`;
