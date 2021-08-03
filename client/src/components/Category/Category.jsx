import React, { useCallback, useEffect } from "react";
import * as S from "./Category.style";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk } from "../../store/modules/category";
const Category = () => {
  const category = useSelector((state) => state.category.data);
  const dispatch = useDispatch();

  const getCategory = useCallback(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  const click = () => {
    console.log(category);
    console.log(getCategory);
  };
  return (
    <S.Container>
      <ul>
        {category.map((ca, index) => (
          <li key={index}>
            <S.LinkStyle to={`/categorylist/${ca}`}>
              <p>{ca}</p>
            </S.LinkStyle>
          </li>
        ))}
      </ul>
      <button onClick={click}>click!</button>
    </S.Container>
  );
};

export default Category;
