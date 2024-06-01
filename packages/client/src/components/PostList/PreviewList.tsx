import { useNavigate } from "react-router-dom";
import { Box, Item } from "./PreviewList.style";
import { PostType } from "src/types";
import { postRoute } from "src/constant";

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
              navigate(`${postRoute}/${category}/${post.subcategory}`)
            }>
            {"[" + post.subcategory + "]"}
          </div>
          <div
            onClick={() =>
              navigate(
                `${postRoute}/${category}/${post.subcategory}/${post.id}`
              )
            }>
            {post.title}
          </div>
        </Item>
      ))}
    </Box>
  );
};
export default PreviewList;
