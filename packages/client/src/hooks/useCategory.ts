import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_version } from "src/constant";
import { AppDispatch } from "src/store";
import { updateCategories } from "src/store/slices/category";

const useGetCategory = () => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = (
          await axios.get(`${API_version}/categories`, {
            withCredentials: true,
          })
        ).data;
        dispatch(updateCategories(response.category));
      } catch (error) {
        console.log("Error fetching category : ", error);
      }
    };

    getCategory();
  }, [dispatch]);
};

export { useGetCategory };
