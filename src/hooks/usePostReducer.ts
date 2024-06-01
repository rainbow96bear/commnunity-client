import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { clearEditPost, setEditPost } from "src/store/slices/post";
import { PostType } from "src/types";

const useSetEditPost = () => {
  const dispatch = useDispatch<AppDispatch>();

  const editPost = (post: PostType) => {
    dispatch(setEditPost(post));
  };

  return editPost;
};

const useClearEditPost = () => {
  const dispatch = useDispatch<AppDispatch>();

  const clearPost = () => {
    dispatch(clearEditPost());
  };

  return clearPost;
};

export { useSetEditPost, useClearEditPost };
