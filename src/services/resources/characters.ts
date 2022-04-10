import api from "../api";

export const getCharacters = async (page: number) => {
  const { data } = await api.get(`/character/?page=${page}`);
  return data;
};
