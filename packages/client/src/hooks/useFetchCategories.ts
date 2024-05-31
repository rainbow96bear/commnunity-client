import axios from "axios";
import { useDispatch } from "react-redux";
import { AppDispatch } from "src/store";
import { updateCategories } from "src/store/slices/category";

const useFetchCategory = () => {
  const dispatch = useDispatch<AppDispatch>();

  const fetchCategory = async () => {
    try {
      const response = (
        await axios.get(`${process.env.REACT_APP_API_VERSION}/categories`, {
          withCredentials: true,
        })
      ).data;
      dispatch(updateCategories(response.category));
    } catch (error) {
      console.log("Error fetching category : ", error);
    }
  };

  return fetchCategory;
};

export default useFetchCategory;
