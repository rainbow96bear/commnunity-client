import axios from "axios";
import { API_version } from "src/constant";
import { ProfileType } from "src/types";

const useUpdateProfile = () => {
  const updateProfile: (
    userId: string,
    formData: FormData
  ) => Promise<ProfileType | null> = async (
    userId: string,
    formData: FormData
  ) => {
    try {
      const response = (
        await axios.put(`${API_version}/profiles/${userId}`, formData, {
          withCredentials: true,
        })
      ).data;
      return response.profile;
    } catch (error) {
      return null;
    }
  };
  return updateProfile;
};

const useGetProfile = () => {
  const getProfile: (userId: string) => Promise<ProfileType | null> = async (
    userId: string
  ) => {
    try {
      const response = (
        await axios.get(`${API_version}/profiles/${userId}`, {
          withCredentials: true,
        })
      ).data;
      return response.profile;
    } catch (error) {
      return null;
    }
  };
  return getProfile;
};

export { useUpdateProfile, useGetProfile };
