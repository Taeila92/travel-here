import React, {useState, useEffect, useRef} from 'react'
import { storageService } from 'firebase.js';
import * as S from './PostSlider.style'

const PostSlider = ({postImages}) => {

  const img = useRef();
  
  // post에 저장되어있던 image들의 url을 저장
  const [imageURL, setImageURL] = useState([])
  const [sliderReady, setSliderReady] = useState(false)

  useEffect(()=>{
    // 현재 post가 가지고 있는 것들을 url로 받아옴
    const imageURLCheck = async () => {
      const result = []
      for(let imageURL of postImages){
        let imageRef = storageService.refFromURL(imageURL)
        let url = await imageRef.getDownloadURL()
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

  const onMouseDown = () => {
    img.current.style.cursor = 'grab';
  }

  const onMouseUp = () => {
    img.current.style.cursor = 'default';
  }

  const setting = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipToSlide : true,
    lazyLoad : true,
  }

  useEffect(()=>{
    if(postImages.length != 0){
      img.current.style.width = '27rem';
      img.current.style.height = '100%';
      img.current.style.margin = '1rem 0 2rem 0';
    }
  }, []);

  return (
    <>
      {(postImages.length != 0) &&
      <li ref={img} onMouseDown={onMouseDown} onMouseUp={onMouseUp}>
        <S.StyledSlider {...setting} >
          {sliderReady && imageURL.map((image)=>{
            return (
              <div key={image}>
                <img src={image} alt="여행사진" />
              </div>
            );
          })}
        </S.StyledSlider>
      </li>}
    </>
  )
}

export default PostSlider;
