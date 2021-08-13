import { dbService } from "firebase.js";

export const getLikeAPI = async(id) => {
  const response = await dbService.collection("post").where("post_id","==",id).get();
  console.log(response);
  return response;
}