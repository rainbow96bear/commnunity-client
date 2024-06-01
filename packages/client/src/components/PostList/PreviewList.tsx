import { useNavigate } from "react-router-dom";
import { Box, Item } from "./PreviewList.style";
import { boardRootRouter } from "src/constant/Category";
import { PostType } from "src/types";

interface PreviewList {
  category: string;
  posts: PostType[];
}
const PreviewList: React.FC<PreviewList> = ({ category, posts }) => {
  const navigate = useNavigate();
  return (
    <Box>
      <h3>{category}'s</h3>
      {posts.map((post, index) => (
        <Item key={index}>
          <div
            onClick={() =>
              navigate(
                boardRootRouter + "/" + category + "/" + post.subcategory
              )
            }>
            {"[" + post.subcategory + "]"}
          </div>
          <div
            onClick={() =>
              navigate(
                boardRootRouter +
                  "/" +
                  category +
                  "/" +
                  post.subcategory +
                  "/" +
                  post.id
              )
            }>
            {post.title}{" "}
          </div>
        </Item>
      ))}
    </Box>
  );
};
export default PreviewList;
