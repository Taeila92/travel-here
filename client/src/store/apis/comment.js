import { dbService } from "firebase.js";

export const getCommentAPI = async () => {
  const response = await dbService.collection("comment").get();
  return response;
}