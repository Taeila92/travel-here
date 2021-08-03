import React, { useEffect, useState } from "react";
import { dbService, storageService } from "firebase.js";
import * as S from "./Category.style";
const Category = () => {
  const [cate, setCate] = useState([]);
  const [photo, setPhoto] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getData = async () => {
      const cateArray = await dbService.collection("post").get();
      const postArray = [];
      const imgArray = [];

      cateArray.forEach((res) => {
        postArray.push(res.data().post_religion);
        if (res.data().post_photo.length > 0) {
          const random = Math.floor(
            Math.random() * res.data().post_photo.length
          );
          imgArray.push(res.data().post_photo[random]);
        }
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
      imgArray.forEach(async (cate) => {
        await storageService
          .ref(`/post/${cate}`)
          .getDownloadURL()
          .then((url) => {
            setPhoto((prev) => [...prev, url]);
          });
        setLoading(true);
      });
    };
    getData();
  }, []);
  const click = () => {
    console.log(loading);
    console.log(photo);
  };
  return (
    <S.Container>
      <ul>
        {cate.map((ca, index) => (
          <li key={index}>
            <S.LinkStyle to={`/categorylist/${ca}`}>
              <p>{ca}</p>
              {loading && <img src={photo[index]} width="100px" />}
            </S.LinkStyle>
          </li>
        ))}
      </ul>
      <button onClick={click}>click!</button>
    </S.Container>
  );
};

export default Category;
