import { Moveto } from "shared/dist/CustomHooks/Moveto";
import { Box, Item } from "./PreviewList.style";
import { boardRootRouter } from "src/constant/Category";

interface Post {
  id: number;
  category: string;
  subCategory: string;
  title: string;
  content: string;
}

interface PreviewList {
  category: string;
  posts: Post[];
}
const PreviewList: React.FC<PreviewList> = ({ category, posts }) => {
  return (
    <Box>
      <h3>{category}'s</h3>
      {posts.map((post, index) => (
        <Item key={index}>
          <div
            onClick={Moveto(
              boardRootRouter + "/" + category + "/" + post.subCategory
            )}>
            {"[" + post.subCategory + "]"}
          </div>
          {/* fix : Moveto로 이동할 router 고민중 post의 id로 이동시키긴 해야함 */}
          <div
            onClick={Moveto(
              boardRootRouter +
                "/" +
                category +
                "/" +
                post.subCategory +
                "/" +
                post.id
            )}>
            {post.title}{" "}
          </div>
        </Item>
      ))}
    </Box>
  );
};
export default PreviewList;
