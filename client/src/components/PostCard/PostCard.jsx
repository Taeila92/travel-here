import React, { useState, useEffect } from 'react'
import { storageService } from 'firebase.js';
import { getImg } from 'utils/getFirestoreImg';
import { useSelector } from 'react-redux';
import * as S from './PostCard.style'
import getDate from 'utils/getDate';
import Post from 'components/Post/Post';
import { useRef } from 'react';

const PostCard = ({data}) => {

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


  const [tripPhoto, setTripPhoto] = useState();
  const [profilePhoto, setProfilePhoto] = useState();
  const [profile, setProfile] = useState();
  const [trip, setTrip] = useState();
  const [postClick, setPostClick] = useState(false);




  const getTripImg = (name) => {
    // getImg(trip);

    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${name}`);
  
    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setTripPhoto(downloadDynURL);
    }).catch(function(error) {
      // console.log(error);
    });
  }

  const getProfileImg = (name) => {
    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${name}`);
  
    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setProfilePhoto(downloadDynURL);
    }).catch(function(error) {
      // console.log(error);
    });
  }


  useEffect(()=>{
      for(let i=0; allPost.length-1; i++){
        if(i == allPost.length){
          break;
        }
        if(allPost[i].post_id == postContainer.current.firstElementChild.textContent){
          setTrip(allPost[i].post_photo);
          setTrip((img)=>{
            getTripImg(img);
          });
          setProfile(allPost[i].post_profile_img);
          setProfile((img)=>{
            getProfileImg(img);
          });
        }
      }
  },[])






  // firestore storage에있는 image받아오기
  useEffect(() =>{
    getTripImg();
  },[])


  // 모달 띄우기
  const onShowPostModal = () => {
    setPostClick(true);
  }




  return (
    <>
      <S.Container ref={postContainer} onClick={onShowPostModal}>
        <p>{post_id}</p>
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
          {tripPhoto && <img src={tripPhoto} alt="여행 사진" />}
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
        trip={tripPhoto}
        setPostClick={setPostClick}
      />}
    </>
  )
}

export default PostCard
