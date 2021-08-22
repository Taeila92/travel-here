import React, { useCallback, useEffect } from "react";
import * as S from "./Category.style";
import { useDispatch, useSelector } from "react-redux";
import reducer, { getCategoryThunk } from "../../store/modules/category";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.ArrowStyle onClick={onClick} right>
      <i className="fas fa-arrow-right" />
    </S.ArrowStyle>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <S.ArrowStyle onClick={onClick}>
      <i className="fas fa-arrow-left" fontSize="300px" />
    </S.ArrowStyle>
  );
}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
};

const Category = () => {
  const category = useSelector((state) => state.category.data);

  const dispatch = useDispatch();

  const getCategory = useCallback(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    getCategory();
    console.log(`category = ${category}`);
  }, [getCategory]);

  return (
    <S.Container>
      <Slider {...settings}>
        {category.map((cate, index) => (
          <span key={index}>
            <S.LinkStyle to={`/categorylist/${cate.region}`}>
              <h3>{cate.region.replace("_", " ").toUpperCase()}</h3>
              <div>
                <img src={cate.photo} />
              </div>
            </S.LinkStyle>
          </span>
        ))}
      </Slider>
    </S.Container>
  );
};

export default Category;
