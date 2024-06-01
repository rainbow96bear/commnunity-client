import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "src/store"; // Redux store 파일 경로를 확인하세요
import {
  Box,
  ContentInput,
  SelectInput,
  TitleInput,
  Button,
  ErrorText,
} from "./WritePost.style";
import { clearEditPost } from "src/store/slices/post";
import { useUpdatePost, useUploadPost } from "src/hooks/usePost";
import { boardRoot } from "src/constant";

const WritePost: React.FC = () => {
  const { postId } = useParams();
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const editPost = useSelector((state: RootState) => state.post.editPost);
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );
  const userInfo = useSelector((state: RootState) => state.userInfo.userInfo);

  const [category, setCategory] = useState<string>(editPost?.category || "");
  const [subcategory, setSubCategory] = useState<string>(
    editPost?.subcategory || ""
  );
  const [title, setTitle] = useState<string>(editPost?.title || "");
  const [content, setContent] = useState<string>(editPost?.content || "");
  const [error, setError] = useState<string>("");
  const [availableSubCategories, setAvailableSubCategories] = useState<
    string[]
  >([]);

  const updatePost = useUpdatePost();
  const uploadPost = useUploadPost();

  useEffect(() => {
    if (category) {
      const selectedCategory = categories.find(
        (cat) => cat.category === category
      );
      if (selectedCategory) {
        setAvailableSubCategories(
          selectedCategory.subcategories.map((sub) => sub.subcategory)
        );
      } else {
        setAvailableSubCategories([]);
      }
    } else {
      setAvailableSubCategories([]);
    }
  }, [category, categories]);

  useEffect(() => {
    return () => {
      dispatch(clearEditPost());
    };
  }, [dispatch]);

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value);
    setSubCategory("");
  };

  const handleSubCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) =>
    setSubCategory(e.target.value);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    if (newTitle.length <= 30) {
      setTitle(newTitle);
    }
  };

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setContent(e.target.value);

  const handleSubmit = async () => {
    if (!category) {
      setError("분야를 선택해주세요.");
      return;
    }

    if (!subcategory) {
      setError("스킬을 선택해주세요.");
      return;
    }

    if (!title) {
      setError("제목을 입력해주세요.");
      return;
    }

    if (!content) {
      setError("내용을 입력해주세요.");
      return;
    }
    const userId = userInfo.id;
    const post = { category, subcategory, title, content };
    if (postId) {
      const success = await updatePost(userId, postId, post);
      if (success) {
        navigate(`${boardRoot}/posts/${category}/${subcategory}/${postId}`);
      } else {
        setError("글 수정에 실패했습니다. 다시 시도해주세요.");
      }
    } else {
      const { success, postId } = await uploadPost(userId, post);
      if (success) {
        navigate(`${boardRoot}/posts/${category}/${subcategory}/${postId}`);
      } else {
        setError("글 등록에 실패했습니다. 다시 시도해주세요.");
      }
    }
  };

  return (
    <Box>
      <SelectInput
        value={category}
        onChange={handleCategoryChange}
        disabled={!!postId}>
        <option value="">분야를 선택하세요.</option>
        {categories.map((cat, idx) => (
          <option key={idx} value={cat.category}>
            {cat.category}
          </option>
        ))}
      </SelectInput>
      <SelectInput
        value={subcategory}
        onChange={handleSubCategoryChange}
        disabled={!!postId}>
        <option value="">스킬을 선택하세요.</option>
        {availableSubCategories.map((subCat, idx) => (
          <option key={idx} value={subCat}>
            {subCat}
          </option>
        ))}
      </SelectInput>
      <TitleInput
        type="text"
        placeholder="Enter Title"
        value={title}
        onChange={handleTitleChange}
      />
      <ContentInput
        placeholder="Enter Content"
        value={content}
        onChange={handleContentChange}
      />
      <Button onClick={handleSubmit}>등록</Button>
      {error && <ErrorText>{error}</ErrorText>}
    </Box>
  );
};

export default WritePost;
