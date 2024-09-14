import { useNavigate } from "react-router-dom";
import {
  Box,
  ListHeader,
  Number,
  Title,
  Writer,
  ListItem,
} from "./PostList.style";
import { PostType } from "src/types";
import { postRoute } from "src/constant";

interface PostsList {
  posts: PostType[];
}

const PostList: React.FC<PostsList> = ({ posts }) => {
  const navigate = useNavigate();
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
            onClick={() => {
              navigate(
                `${postRoute}/${post.category}/${post.subcategory}/${post.id}`
              );
            }}>
            {post.title}
          </Title>
          <Writer>{post.user?.nickname}</Writer>
        </ListItem>
      ))}
    </Box>
  );
};

export default PostList;
