import React from "react";
import { Button } from "./Button";

interface PostButtonProps {
  onClick: () => void;
  text: string;
}

const PostButton: React.FC<PostButtonProps> = ({ text, onClick }) => {
  return <Button onClick={onClick}>{text}</Button>;
};

export default PostButton;
