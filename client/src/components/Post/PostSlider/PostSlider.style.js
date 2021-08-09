import styled from 'styled-components'
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const StyledSlider = styled(Slider)`
  width : 100%;
  height : 15rem;
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
      height : 100%;
      background-size: contain;
    }
  }
`;

export {
  StyledSlider,
}