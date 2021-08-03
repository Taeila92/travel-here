import { dbService } from "firebase.js";

export const getCommentAPI = async (id) => {
  const response = await dbService.collection("comment").where("post_id","==",id).get()
  return response;
}