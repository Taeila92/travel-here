import { dbService } from "firebase.js";

export const getUserAPI = async(id) => {
  const response = await dbService.collection("users").where("user_id","==",id).get();
  // console.log(response);
  return response;
}