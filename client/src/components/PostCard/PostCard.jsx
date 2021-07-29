import React, { useState, useEffect } from 'react'
import { storageService } from 'firebase.js';
import * as S from './PostCard.style'
import getDate from 'utils/getDate';
import Post from 'components/Post/Post';

const PostCard = ({data}) => {
  
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


  const [photo, setphoto] = useState();
  const [profile, setProfile] = useState();
  const [postClick, setPostClick] = useState(false); 


  // firestore storage에있는 image받아오기
  useEffect(() =>{
    let storageRef = storageService.ref();
    let tripImg = storageRef.child('post/desert-5720527_1280.jpg');
    let profileImg = storageRef.child('post/아이유.jpg');
  
    profileImg.getMetadata().then(async function() {
      let downloadProfileURL = await profileImg.getDownloadURL();
      setProfile(downloadProfileURL);
    }).catch(function(error) {
      console.log(error);
    });

    tripImg.getMetadata().then(async function() {
      let downloadTripURL = await tripImg.getDownloadURL();
      setphoto(downloadTripURL);
    }).catch(function(error) {
      console.log(error);
    });
  },[])

  const onShowPostModal = () => {
    setPostClick(true);
  }

  return (
    <>
      <S.Container onClick={onShowPostModal}>
        <S.Profile>
          <img src={profile} alt="profile" />
          <div>        
            <h2>UserName</h2>
            <h5>#{post_religion}</h5>
          </div>
        </S.Profile>
        <S.Content>
          <h2>{post_title}</h2>
          <p>{post_content}</p>
          {(post_photo) ? (
            <img src={photo} alt="" />
          ) : (
            null
          )}
          <div>{getDate(post_date)}</div>
        </S.Content>
        <S.Button>
          <button>Like</button>
          <button>Comment</button>
        </S.Button>
      </S.Container>
      {postClick && <Post
        postId={post_id}
        profile={profile}
        photo={photo}
        setPostClick={setPostClick}
      />}
    </>
  )
}

export default PostCard
