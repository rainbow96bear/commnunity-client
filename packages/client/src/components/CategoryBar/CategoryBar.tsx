import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { boardRootRouter, categories } from "src/constant/Category";
import { Moveto } from "shared/dist/CustomHooks/Moveto";

const CategoryBar = () => {
  return (
    <Box>
      <Items>
        {categories.map((category, idx) => (
          <>
            <Item key={idx} onClick={Moveto(boardRootRouter + category.router)}>
              {category.title}
            </Item>
            {category.subcategories.map((subcategory, subidx) => (
              <SubItem
                key={subidx}
                onClick={Moveto(boardRootRouter + subcategory.router)}>
                {subcategory.title}
              </SubItem>
            ))}
          </>
        ))}
      </Items>
    </Box>
  );
};

export default CategoryBar;
