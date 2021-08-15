import { dbService } from "firebase.js";

export const getPostAPI = async(email) => {
  const response = await dbService.collection("post").where("post_user_email","==",email).get();
//   console.log(response);
  return response;
}