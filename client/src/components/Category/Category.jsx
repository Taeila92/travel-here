import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk } from "store/modules/category";
import * as S from "./Category.style";

const Category = () => {
  const dispatch = useDispatch();
  
  const category = useSelector((state) => state.category.data);

  const getCategory = useCallback(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <S.Container>
      <ul>
        {category.map((cate, index) => (
          <li key={index}>
            <S.LinkStyle to={`/categorylist/${cate.religion}`}>
              <p>{cate.religion.replace("_", " ")}</p>
            </S.LinkStyle>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Category;
