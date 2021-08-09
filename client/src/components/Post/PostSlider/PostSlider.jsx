import React, {useState, useEffect, useRef} from 'react'
import { storageService } from 'firebase.js';
import * as S from './PostSlider.style'

const PostSlider = ({postImages}) => {
  
  // post에 저장되어있던 image들의 url을 저장
  const [imageURL, setImageURL] = useState([])
  const [sliderReady, setSliderReady] = useState(false)

  useEffect(()=>{
    const storageRef = storageService.ref(); 
    // 현재 post가 가지고 있는 것들을 url로 받아옴 -> 나중에 post올릴 때, url로 저장하면 바꿔주면 됨
    const imageURLCheck = async () => {
      const result = []
      for(let image of postImages){
        let imageLocation = storageRef.child(`post/${image}`)
        let url = await imageLocation.getDownloadURL()
        result.push(url)
      }
      return result;
    }
    imageURLCheck()
      .then((value)=>{
      setImageURL(value) // url check하고서 동기적으로 imageUrl에 넣어줌
    }).catch((error)=>{
      console.error(error)
    })
    setSliderReady(()=>(true)) // slider가 준비되면 (동기적으로)
  },[])

  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipToSlide : true,
    lazyLoad : true,
  }

  return (
    <S.StyledSlider {...setting}>
      {sliderReady && imageURL.map((image)=>{
        return (
          <div key={image}>
            <img src={image} alt="" />
          </div>
        );
      })}
    </S.StyledSlider>
  )
}

export default PostSlider;
