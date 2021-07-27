import { dbService } from "firebase.js";

export const getPostsListAPI = async (religion) => {
  const response = await dbService.collection("post").where("post_religion","==",religion).get()
  response.forEach(doc=>{
    console.log(doc.data())
  })
}

// redux부터 구성하죠ㅣ ARS