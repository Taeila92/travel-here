import React, { useEffect, useState } from "react";
import { dbService } from "firebase.js";
import { Link } from "react-router-dom";

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
  const click = () => {
    let abc = "ABC";
    abc = abc.toLowerCase();
    console.log(abc);
  };
  return (
    <div>
      <ul>
        {cate.map((ca, index) => (
          <li key={index}>
            <Link to={`/categorylist/${ca}`}>{ca}</Link>
          </li>
        ))}
      </ul>
      <button onClick={click}>click</button>
    </div>
  );
};

export default Category;
