import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategoryThunk } from "../../store/modules/category";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import * as S from './Category.style'

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <S.ArrowStyle onClick={onClick} right>
      <i className="fas fa-arrow-right" />
    </S.ArrowStyle>
  );
}

function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <S.ArrowStyle onClick={onClick}>
      <i className="fas fa-arrow-left" fontSize="300px" />
    </S.ArrowStyle>
  );
}
// const settings = {
//   dots: false,
//   infinite: true,
//   speed: 500,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   nextArrow: <SampleNextArrow />,
//   prevArrow: <SamplePrevArrow />,
// };

const Category = () => {
  const category = useSelector((state) => state.category.data);
  const isPc = useMediaQuery({
    query: `(min-width : 820px) and (max-width :3840px)`,
  });

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isPc ? 3 : 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const dispatch = useDispatch();
  

  const getCategory = useCallback(() => {
    dispatch(getCategoryThunk());
  }, [dispatch]);

  useEffect(() => {
    getCategory();
  }, [getCategory]);

  return (
    <S.Container>
      <Slider {...settings}>
        {category.map((cate, index) => (
          <S.CategoryBox key={index} isPc={isPc}>
            <S.LinkStyle to={`/categorylist/${cate.region}`}>
              <h3>{cate.region.replace("_", " ").toUpperCase()}</h3>
              <div>
                <img src={cate.photo} />
              </div>
            </S.LinkStyle>
          </S.CategoryBox>
        ))}
      </Slider>
    </S.Container>
  );
};

export default Category;
