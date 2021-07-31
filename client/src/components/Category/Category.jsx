import React, { useEffect, useState } from "react";
import { dbService } from "firebase.js";
import * as S from "./Category.style";
const Category = () => {
  const [cate, setCate] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const cateArray = await dbService.collection("post").get();
      const postArray = [];
      cateArray.forEach((data) => {
        postArray.push(data.data().post_religion);
      });
      postArray.forEach((data, index) => {
        data = data.toLowerCase().trim();
        if (data === undefined || data === null || data === "") {
          postArray.splice(index, 1);
        }
      });
      const set = new Set(postArray);
      const setArray = [...set];
      setCate(setArray);
    };
    getData();
  }, []);
  return (
    <S.Container>
      <ul>
        {cate.map((ca, index) => (
          <li key={index}>
            <S.LinkStyle to={`/categorylist/${ca}`}>{ca}</S.LinkStyle>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Category;
