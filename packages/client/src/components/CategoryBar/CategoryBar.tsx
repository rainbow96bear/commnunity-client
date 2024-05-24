import { Box, Items, Item, SubItem } from "./CategoryBar.style";
import { rootRouter, categories } from "src/constant/Category";
import { Moveto } from "shared/dist/customNavigate";

const CategoryBar = () => {
  return (
    <Box>
      <Items>
        {categories.map((category, idx) => (
          <>
            <Item key={idx} onClick={Moveto(rootRouter + category.router)}>
              {category.title}
            </Item>
            {category.subcategories.map((subcategory, subidx) => (
              <SubItem
                key={subidx}
                onClick={Moveto(rootRouter + subcategory.router)}>
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
