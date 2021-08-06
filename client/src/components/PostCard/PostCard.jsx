import React, { useState, useEffect, useRef } from 'react'
import { storageService } from 'firebase.js';
import { useDispatch, useSelector } from 'react-redux';
import { commentMiddleware } from 'store/modules/comment';
import * as S from './PostCard.style'
import getDate from 'utils/getDate';
import Post from 'components/Post/Post';

const PostCard = ({data, test}) => {
  
  const dispatch = useDispatch();
  const postContainer = useRef();
  const allPost = useSelector(state => state.board.data);
  
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
  } = data;
  
  
  // post모달 띄우는 용도
  const [postClick, setPostClick] = useState(false);

 //!!중요!! 현재는 이렇게 저장되어있는 name 받아와서 하는데 나중에는 어차피 url로 저장되니깐 그걸로 바로 받아오면 됨

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
    setPostClick(true);
  };



  const lazyTarget = useRef()
  const [isView, setIsView] = useState(false);

  useEffect(()=>{
    const fetchTripImg = () => {
      // 해당 카테고리에 게시글이 한개만 있을 경우
      if(allPost.length === 1){
        setImgName(0);
        return;
      }

      // 게시글이 여러개 있을 경우
      for(let i=0; allPost.length-1; i++){
        if(i === allPost.length){
          break;
        }
        if(allPost[i].post_id === postContainer.current.firstElementChild.textContent){
          setImgName(i);
        }
      }
    }      
    dispatch(commentMiddleware(post_id));
    
    let observer;
    if(lazyTarget.current){ 
      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){ // intersecting 되어 있으면
            observer.unobserve(entry.target) // 1. 화면에서 나갈 때, 다시 발생안시키기 위해 2. element가 들어가야해서 .target 
            fetchTripImg()
            setIsView(true);
          }
        })
      },{ threshold : 0.3 })
      observer.observe(lazyTarget.current) // 맨처음에 등록시키고, 화면에 들어오면 unobserve
    } 

    return () => observer && observer.disconnect(); // clean up

  },[]);

  return (
    <>
      <S.Container ref={postContainer} onClick={onShowPostModal}>
        <S.Profile>
          <img src={profilePhoto} alt="프로필 사진" />
          <div>        
            <h2>UserName</h2>
            <h5>#{post_religion}</h5>
          </div>
        </S.Profile>
        <S.Content>
          <h2>{post_title}</h2>
          <p>{post_content}</p>
          <div ref={lazyTarget}>loading...</div>
          {isView && <img  src={tripPhoto} alt="여행 사진" />}
          <div>{getDate(post_date)}</div>
        </S.Content>
        <S.Button>
          <button>Like</button>
          <button>Comment</button>
        </S.Button>
      </S.Container>
      {postClick && <Post
        postId={post_id}
        profile={profilePhoto}
        trip={tripImgs}
        setPostClick={setPostClick}
      />}
    </>
  )
}

export default PostCard
