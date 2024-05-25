import { Moveto } from "shared/dist/CustomHooks/Moveto";
import ScrollUpButton from "shared/dist/Components/ScrollUpButton";
import {
  Box,
  Title,
  Info,
  ContentBox,
  FuctionBar,
  WriteButton,
} from "./Post.style";
import { boardRootRouter } from "src/constant/Category";

interface Post {
  post: {
    id: number;
    category: string;
    subCategory: string;
    title: string;
    content: string;
    writer: string;
    time: string;
  };
}
const Post: React.FC<Post> = ({ post }) => {
  return (
    <Box>
      <Title>{post.title}</Title>
      <Info>
        <div
          onClick={Moveto(
            boardRootRouter + "/" + post.category + "/" + post.subCategory
          )}>
          [{post.subCategory}]
        </div>
        <div>{post.writer}</div>
        <div>{post.time}</div>
      </Info>
      <ContentBox>{post.content}</ContentBox>
      <FuctionBar>
        <ScrollUpButton
          width={30}
          height={30}
          fontSize={30}
          color={"lightblue"}
        />
        <WriteButton>글쓰기</WriteButton>
      </FuctionBar>
    </Box>
  );
};

export default Post;
