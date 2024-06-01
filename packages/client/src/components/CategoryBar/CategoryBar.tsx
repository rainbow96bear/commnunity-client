import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { boardRootRouter } from "src/constant/Category";
import { RootState } from "src/store";
import { useGetCategory } from "src/hooks/useCategory";
import { useNavigate } from "react-router-dom";

const CategoryBar = () => {
  const navigate = useNavigate();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useGetCategory();

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
