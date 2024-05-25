import { Moveto } from "shared/dist/CustomHooks/Moveto";
import {
  Box,
  ListHeader,
  Number,
  Title,
  Writer,
  ListItem,
} from "./PostList.style";
import { boardRootRouter } from "src/constant/Category";

interface Post {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  content: string;
  writer: string;
  time: string;
}

interface PostsList {
  posts: Post[];
}

const PostList: React.FC<PostsList> = ({ posts }) => {
  return (
    <Box>
      <ListHeader>
        <Number>No.</Number>
        <Title>제목</Title>
        <Writer>글쓴이</Writer>
      </ListHeader>
      {posts.map((post, idx) => (
        <ListItem key={idx}>
          <Number>{post.id}</Number>
          <Title
            onClick={Moveto(
              boardRootRouter +
                "/" +
                post.category +
                "/" +
                post.subCategory +
                "/" +
                post.id
            )}>
            {post.title}
          </Title>
          <Writer>{post.writer}</Writer>
        </ListItem>
      ))}
    </Box>
  );
};

export default PostList;
