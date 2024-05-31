import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { boardRootRouter } from "src/constant/Category";
import { RootState } from "src/store";
import useFetchCategory from "src/hooks/useFetchCategories";
import useMoveto from "";

const CategoryBar = () => {
  const moveto = useMoveto();
  const fetchCategories = useFetchCategory();
  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <Box>
      <Items>
        {categories.map((category, idx) => (
          <div key={idx}>
            <Item
              onClick={() => moveto(boardRootRouter + "/" + category.category)}>
              {category.category}
            </Item>
            {category.subcategories.map((subcategory, subidx) => (
              <SubItem
                key={subidx}
                onClick={() =>
                  moveto(
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
