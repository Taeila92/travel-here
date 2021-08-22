import { dbService } from "firebase.js";

export const getPostAPI = async(id) => {
  const response = await dbService.collection("post").where("post_uid","==",id).get();
  console.log(response);
  return response;
}

export const getBookmarkAPI = async(id) => {
  const response = await dbService.collection("post").where("post_id","==",id).get();
  console.log(response);
  return response;
}