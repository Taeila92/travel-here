import React, { useState, useEffect } from "react";
import { dbService } from "firebase.js";

const Board = ({ match, history, location }) => {
  //console.log(match) // 상위 라우팅에서 넣어준 :religion이 match.params로 들어옵니다
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await dbService.collection("post").get();
      response.forEach((doc) => {
        setPostData((prev) => [doc.data(), ...prev]);
        console.log(doc.data());
      });
    };
    getData();
    console.log(postData);
  }, []);

  return <div></div>;
};

export default Board;
