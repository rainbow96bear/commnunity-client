import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { boardRootRouter } from "src/constant/Category";
import { RootState } from "src/store";
import { Box, Title, Info, ContentBox, FuctionBar } from "./Post.style";
import PostButton from "../Buttons/PostButton";
import ScrollUpButton from "../ScrollUpButton/ScrollUpButton";
import { useSetEditPost } from "src/hooks/usePostReducer";
import { useDeletePost } from "src/hooks/usePost";
import { PostType } from "src/types";

interface PostProps {
  post: PostType | null;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);
  const navigate = useNavigate();
  const deletePost = useDeletePost();
  const setEditPost = useSetEditPost();

  const handleEditClick = () => {
    if (post) {
      setEditPost(post);
    }
    navigate(`/board/editpost/${post?.id}`);
  };

  const handleDeleteClick = async () => {
    const postId = post?.id;
    const userId = userInfo.id;
    if (postId) {
      const success = await deletePost(postId, userId);
      if (success) {
        navigate(-1);
      }
    }
  };

  return (
    <Box>
      <Title>{post?.title}</Title>
      <Info>
        <div
          onClick={() =>
            navigate(
              boardRootRouter + "/" + post?.category + "/" + post?.subcategory
            )
          }>
          [{post?.subcategory}]
        </div>
        <div>{post?.user?.nickname}</div>
        <div>{post?.createdAt?.slice(0, 10)}</div>
      </Info>
      <ContentBox>{post?.content}</ContentBox>
      <FuctionBar>
        <ScrollUpButton
          width={30}
          height={30}
          fontSize={30}
          color={"lightblue"}
        />
        <PostButton
          text={"글쓰기"}
          onClick={() => navigate("/board/newpost")}></PostButton>
        {post?.userId == userInfo.id && (
          <>
            <PostButton
              text={"수정"}
              onClick={() => handleEditClick()}></PostButton>
            <PostButton
              text={"삭제"}
              onClick={() => handleDeleteClick()}></PostButton>
          </>
        )}
      </FuctionBar>
    </Box>
  );
};

export default Post;
