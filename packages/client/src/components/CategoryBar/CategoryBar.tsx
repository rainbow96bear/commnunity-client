import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { boardRootRouter } from "src/constant/Category";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCategories } from "src/store/slices/category";
import { RootState } from "src/store";
import { useNavigate } from "react-router-dom";

const CategoryBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = (
          await axios.get(`${process.env.REACT_APP_API_VERSION}/categories`, {
            withCredentials: true,
          })
        ).data;
        dispatch(updateCategories(response.category));
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [dispatch]);

  return (
    <Box>
      <Items>
        {categories.map((category, idx) => (
          <div key={idx}>
            <Item
              onClick={() =>
                navigate(boardRootRouter + "/" + category.category)
              }>
              {category.category}
            </Item>
            {category.subcategories.map((subcategory, subidx) => (
              <SubItem
                key={subidx}
                onClick={() =>
                  navigate(
                    boardRootRouter +
                      "/" +
                      category.category +
                      "/" +
                      subcategory.subcategory
                  )
                }>
                {subcategory.subcategory}
              </SubItem>
            ))}
          </div>
        ))}
      </Items>
    </Box>
  );
};

export default CategoryBar;
