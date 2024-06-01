import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const ItemBox = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5px;
  & > label {
    display: flex;
    align-items: left;
  }
`;

export const ItemBoxUnderLine = styled(ItemBox)`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid lightgray;
  padding-bottom: 5px;
  & > label {
    display: flex;
    align-items: left;
  }
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 10%;
  margin-bottom: 20px;
`;

export const ProfileImagePreview = styled(ProfileImage)`
  cursor: pointer;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
    filter: brightness(0.8);
  }
`;

const NicknameStyle = `
  // margin: 20px 0px 10px 0px;
  font-size: 1.5rem;
  font-weight: 700;
  // margin-bottom: 10px;
  text-align: left;
`;
export const TextInput = styled.input`
  min-width: 300px;
  max-width: 50%;
  height: 30px;
  font-size: 1rem;
  font-weight: 500;
  border: none;
  border-bottom: 1px solid black;
  // padding-bottom: 20px;
`;

export const Nickname = styled.div`
  ${NicknameStyle}
`;

export const NicknameInput = styled(TextInput)`
  ${NicknameStyle}
`;

export const WalletLabel = styled.h3`
  font-size: 1rem;
  margin-bottom: 5px;
  text-align: left;
`;

const WalletAddressStyle = `
  font-size: 1rem;
  font-weight: 650;
  margin: 16px 0px 0px 0px;
  text-align: left;
`;

export const WalletAddress = styled.div`
  ${WalletAddressStyle}
`;

export const EmptyWalletAddress = styled(WalletAddress)`
  color: gray;
`;

export const WalletInput = styled(TextInput)`
  ${WalletAddressStyle}
`;

export const EditBox = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;
export const Button = styled.button`
  padding: 10px 20px;
  font-size: 1rem;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const CancleButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;
export const SaveButton = styled(Button)`
  background-color: #28a745;
  &:hover {
    background-color: #218838;
  }
`;
export const EditButton = styled(Button)`
  background-color: #007bff;
  &:hover {
    background-color: #0056b3;
  }
`;
