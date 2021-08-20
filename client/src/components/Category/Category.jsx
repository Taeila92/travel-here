import React, { useCallback, useEffect } from "react";
import * as S from "./Category.style";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk } from "../../store/modules/category";

const Category = () => {
  const category = useSelector((state) => state.category.data);

  // let view = useSelector((state)=>state.view.view);

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
            {/* <S.LinkStyle to={{
              pathname: `/categorylist/${cate.region}`,
              state: {view}}}> */}
            <S.LinkStyle to={`/categorylist/${cate.region}`}>
              <p>{cate.region.replace("_", " ")}</p>
            </S.LinkStyle>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Category;
