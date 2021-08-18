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
