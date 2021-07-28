import React, { useState, useEffect } from 'react'
import { storageService } from 'firebase.js';
import * as S from './Post.style'
import getDate from 'utils/getDate';

const Post = ({data}) => {
  
  const { 
    post_id, 
    post_title, 
    post_writer, 
    post_content, 
    post_photo,
    post_religion, 
    post_date, 
    post_views, 
    post_like 
  } = data;


  const [photo, setphoto] = useState();
  const [profile, setProfile] = useState();

  // !!!이미지 업로드할 때, 어떤 값을 firestore에 넣어야하지??!!!
  // !!!async, await try catch!!!
  useEffect(()=>{
    if(post_photo){
      console.log()
      const photoUrl = storageService.refFromURL(post_photo.path.replace('gs:/','gs://')).getDownloadURL()
      photoUrl.then((url)=>{
        setphoto(url)
      })
    }
    const profileUrl = storageService.refFromURL('gs://travel-here-36a2e.appspot.com/users/woman-6482214_640.jpg').getDownloadURL()
    profileUrl.then((url)=>{
      setProfile(url)
    }) 
  },[])
 
  return (
    <S.Container>
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
        <img src={photo} alt="travel site" />
        <div>{getDate(post_date)}</div>
      </S.Content>
      <S.Button>
        <button>Like</button>
        <button>Comment</button>
      </S.Button>
    </S.Container>
  )
}

export default Post
