import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { boardRootRouter, categories } from "src/constant/Category";
import { Moveto } from "shared/dist/CustomHooks/Moveto";

const CategoryBar = () => {
  // fix : MoveTo의 category.router를 constant에서 Category를 받고 DB에서 받은 subCategory로 교체
  return (
    <Box>
      <Items>
        {categories.map((category, idx) => (
          <div key={idx}>
            <Item onClick={Moveto(boardRootRouter + category.router)}>
              {category.title}
            </Item>
            {category.subcategories.map((subcategory, subidx) => (
              <SubItem
                key={subidx}
                onClick={Moveto(boardRootRouter + subcategory.router)}>
                {subcategory.title}
              </SubItem>
            ))}
          </div>
        ))}
      </Items>
    </Box>
  );
};

export default CategoryBar;
