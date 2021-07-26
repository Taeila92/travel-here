import React from "react";
import { dbService } from "firebase.js";

const CategoryList = () => {
  
  console.log(dbService)
  
  const getData = async () => {
    const response = await dbService.collection("post").get();
    response.forEach(doc => console.log(doc.data()))
  }

  getData()
 
  
  
  return (
    <div>
      
    </div>
  )
}

export default CategoryList;


