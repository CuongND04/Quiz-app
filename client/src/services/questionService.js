import { get } from "../utils/request";

export const getListQuestion = async (topicId) => {
  const result = await get(`questions?topicId=${topicId}`);
  return result;
};
export const getTopic = async (id) => {
  const result = await get(`topics/${id}`);
  return result;
};
