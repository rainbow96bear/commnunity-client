import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Subcategory {
  subcategory: string;
}

interface Category {
  category: string;
  subcategories: Subcategory[];
}

interface CategoriesState {
  categories: Category[];
}

const initialState: CategoriesState = {
  categories: [],
};

const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    updateCategories(state, action: PayloadAction<Category[]>) {
      state.categories = action.payload;
    },
  },
});

export const { updateCategories } = categorySlice.actions;

export default categorySlice.reducer;
