import React, {useState, useEffect, useRef} from 'react'
import { storageService } from 'firebase.js';
import * as S from './PostSlider.style'

const PostSlider = ({postImages}) => {
  
  // post에 저장되어있던 image들의 url을 저장
  const imageURL = useRef([]); 
  const [sliderReady, setSliderReady] = useState(false)
  const storageRef = storageService.ref();  
  
  useEffect(()=>{
    for(let image of postImages){
      const imageURLCheck = async ()=> {
        let imageLocation = storageRef.child(`post/${image}`)
        let url = await imageLocation.getDownloadURL()
        console.log(url)
        imageURL.current.push(url)
      }
      imageURLCheck()
      setSliderReady(true)
    }
  },[])

  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipToSlide : true,
  }

  console.log(sliderReady)
  console.log(imageURL)
  return (
    <S.StyledSlider {...setting}>
      {sliderReady && imageURL.current.map((image)=>{
        return (
          <div>
            <img src={image} alt="" />
          </div>
        );
      })}
    </S.StyledSlider>
  )
}

export default PostSlider;
