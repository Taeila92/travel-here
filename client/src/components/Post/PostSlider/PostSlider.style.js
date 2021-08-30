import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  width : 100%;
  height : 25rem;
  .slick-list {
    width : 100%;
    height : 100%;
  }
  .slick-track{
    width : 100%;
    height : 100%;
    display: flex;
    flex-direction: row;
  }
  .slick-slide {
    img {
      width: 100%;
      height : 25rem;
      object-fit: cover;
    }
  }
  .slick-prev {
    left : 10px;
    z-index : 100;
  }
  .slick-next {
    right : 10px;
    z-index : 100;
  }
  .slick-prev::before, .slick-next::before {
    position : absolute;
    top : 0;
    bottom : 0;
  }
`;

export {
  StyledSlider,
}