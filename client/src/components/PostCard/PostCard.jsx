import React, { useState, useEffect, useRef } from 'react'
import { storageService } from 'firebase.js';
import Post from 'components/Post/Post';
import * as S from './PostCard.style';
import getDate from 'utils/getDate';

const PostCard = ({postData}) => {

  const {post_id, post_title, post_religion, post_date} = postData; // 개별 post
  
  // post모달 띄우는 용도
  const [isPostModalOpened, setIsPostModalOpened] = useState(false);

  // representative image 지정 후 가져오기
  const repImageName = useRef(`${postData.post_photo[0]}`)
  const [repImage, setRepImage] = useState(); 

  const fetchRepImage = async (repImageName) => {
    await storageService.refFromURL(repImageName).getDownloadURL().then((value)=>{
      setRepImage(value)
    })
  }

  // profile image 가져오기
  const profileImageName = useRef(`${postData.post_profile_img}`)
  const [profileImage, setProfileImage] = useState();

  const fetchProfileImage = async (profileImageName) => {
    const storageRef = storageService.ref();
    await storageRef.child(`post/${profileImageName}`).getDownloadURL().then((value)=>{
      setProfileImage(value)
    })
    /*
    프로필 사진도 절대 경로로 바꾸면 이와같이 바꿀 것!!!
    await storageService.refFromURL(profileImageName).getDownloadURL().then((value)=>{
      setProfileImage(value)
    */
  };

  // Lazy Loading
  const lazyTarget = useRef()
  const [isView, setIsView] = useState(false);

  useEffect(()=>{
    let observer;

    if(lazyTarget.current){ 
      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){ // intersecting 되어 있으면
            observer.unobserve(entry.target) // 1. 화면에서 나갈 때, 다시 발생안시키기 위해 2. element가 들어가야해서 .target 
            // console.log(entry)
            fetchRepImage(repImageName.current)
            fetchProfileImage(profileImageName.current)
            setIsView(true);
          }
        })
      },{ threshold : 0.3 })
      
      observer.observe(lazyTarget.current)
    } 

    return () => observer && observer.disconnect();
  },[]);


  // 모달 띄우기
  const onShowPostModal = () => {
    setIsPostModalOpened(true);
  };

  console.log(post_date)

  return (
    <>
      <S.Container onClick={onShowPostModal} id={post_id}>
        <S.Profile>
          <img src={profileImage} alt="프로필 사진" />
          <div>        
            <h2>UserName</h2>
            <h5>#{post_religion}</h5>
          </div>
        </S.Profile>
        <S.Content>
          <h2>{post_title}</h2>
          {isView ? <img  src={repImage} alt="여행 사진"/> : <S.SkeletonImage ref={lazyTarget}>loading</S.SkeletonImage> }
          {/* 이미지가 로드 안 되었으면 회색 상자로 나오게 하고 싶다.. 그리고 이미지가 로드될때, 아래 창이 안 말려들었으면..*/}
          <div>{getDate(post_date)}</div>
        </S.Content>
      </S.Container>
      {isPostModalOpened && <Post
        profile={profileImage}
        postData={postData}
        setIsPostModalOpened={setIsPostModalOpened}
      />}
    </>
  );
};

export default PostCard;
