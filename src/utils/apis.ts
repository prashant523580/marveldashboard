import axiosInstance from "../helpers/axios";

export const fetchCharacters = async () => {
    try {
      const response = await axiosInstance.get("/characters");
      return response.data.data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  };
  export const fetchCharactersByName = async (name: string) => {
    try {
      const response = await axiosInstance.get(`/characters?name=${name}`);
      return response.data.data.results;
    } catch (error) {
      console.error('Error fetching characters:', error);
      throw error;
    }
  };