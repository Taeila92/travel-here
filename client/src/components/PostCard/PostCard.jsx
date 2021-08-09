import React, { useState, useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { storageService } from 'firebase.js';
import Post from 'components/Post/Post';
import { commentMiddleware } from 'store/modules/comment';
import * as S from './PostCard.style'
import getDate from 'utils/getDate';

const PostCard = ({postData}) => {
  
  const allPost = useSelector(state => state.board.data); // 해당 지역의 모든 게시글 -> 나중에 몇 개씩 끊어서해야!! (한 번에 다 가져오면 안되니깐)
  const dispatch = useDispatch();
  const postContainer = useRef();

  const { 
    post_id, 
    post_title, 
    post_writer, 
    post_content, 
    post_photo,
    post_religion, 
    post_date, 
    post_views, 
    post_like,
    post_profile_img 
  } = postData; // 개별 post
  
  // post모달 띄우는 용도
  const [isPostModalOpened, setIsPostModalOpened] = useState(false);

  // **trip 관련**
  // 게시글 목록에서 보여질 딱 한개의 대표 여행사진
  const [tripPhoto, setTripPhoto] = useState();
  // Post컴포넌트에 넘기는 용도(모든 여행사진)
  const [tripImgs, setTripImgs] = useState();
  // getTripImg함수에서 사용하는 용도(여행사진 이름 넘기기)
  const [trip, setTrip] = useState();

  // **profile 관련**
  // getProfileImg함수에서 사용하는 용도(프로필사진 이름 넘기기)
  const [profile, setProfile] = useState();
  // 렌더링에 사용되는 프로필사진
  const [profilePhoto, setProfilePhoto] = useState();



  // firestore storage에있는 image경로 받아오기
  // 여행사진
  const getTripImg = (name) => {
    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${name[0]}`);
    setTripImgs(name);
  
    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setTripPhoto(downloadDynURL);
    }).catch(function(error) {});
  };
  
  // 프로필 사진
  const getProfileImg = (name) => {
    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${name}`);
  
    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setProfilePhoto(downloadDynURL);
    }).catch(function(error) {});
  };

  const setImgName = (i) => {
    setTrip(allPost[i].post_photo);
    setTrip((img)=>{
      getTripImg(img);
    });
    setProfile(allPost[i].post_profile_img);
    setProfile((img)=>{
      getProfileImg(img);
    });
  };



  // 모달 띄우기
  const onShowPostModal = () => {
    setIsPostModalOpened(true);
  };

  const lazyTarget = useRef()
  const [isView, setIsView] = useState(false);

  // firestore storage에있는 image name받아오기
  useEffect(()=>{
    const func = () => {
      // 해당 카테고리에 게시글이 한개만 있을 경우
      // if(allPost.length == 1){
      //   setImgName(0);
      //   return;
      // }

      // 게시글이 여러개 있을 경우
      for(let i=0; i < allPost.length; i++){
        if(i === allPost.length){
          break;
        }
        if(allPost[i].post_id === postContainer.current.id){
          setImgName(i);
        }
      }
    }  
    
    // 게시물 모달창 띄우면 서버에 있는 댓글 바로 업로드 되어있게 하기
    dispatch(commentMiddleware());

    let observer;
    
    if(lazyTarget.current){ 

      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){ // intersecting 되어 있으면
            observer.unobserve(entry.target) // 1. 화면에서 나갈 때, 다시 발생안시키기 위해 2. element가 들어가야해서 .target 
            func()
            setIsView(true);
          }
        })
      },{ threshold : 0.3 })
      
      observer.observe(lazyTarget.current)
    } 

    return () => observer && observer.disconnect();
  },[]);

  return (
    <>
      <S.Container ref={postContainer} onClick={onShowPostModal} id={post_id}>
        <S.Profile>
          <img src={profilePhoto} alt="프로필 사진" />
          <div>        
            <h2>UserName</h2>
            <h5>#{post_religion}</h5>
          </div>
        </S.Profile>
        <S.Content>
          <h2>{post_title}</h2>
          {isView ? <img  src={tripPhoto} alt="여행 사진"/> : <S.SkeletonImage ref={lazyTarget}>loading</S.SkeletonImage> }
          {/* 이미지가 로드 안 되었으면 회색 상자로 나오게 하고 싶다.. 그리고 이미지가 로드될때, 아래 창이 안 말려들었으면..*/}
          <div>{getDate(post_date)}</div>
        </S.Content>
      </S.Container>
      {isPostModalOpened && <Post
        postId={post_id}
        profile={profilePhoto}
        trip={tripImgs}
        postData={postData}
        setIsPostModalOpened={setIsPostModalOpened}
      />}
    </>
  )
}

export default PostCard
