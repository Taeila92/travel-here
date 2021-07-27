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

  // !!!이미지 업로드할 때, 어떤 값을 firestore에 넣어야하지??!!!
  // !!!async, await try catch!!!
  useEffect(()=>{
    const photoUrl = storageService.refFromURL('gs://travel-here-36a2e.appspot.com/post/desert-5720527_1280.jpg').getDownloadURL()
    photoUrl.then((url)=>{
      setphoto(url)
    })
  },[])
 


  return (
    <S.Container>
      <S.Profile>
        <img src="" alt="profile" />
        <h2>{post_title}</h2>
      </S.Profile>
      <S.Content>
        <p>{post_content}</p>
        <img src={photo} alt="travel site" />
      </S.Content>
      <div>{getDate(post_date)}</div>
      <div>views : {post_views}</div>
      <div>like : {post_like}</div>
    </S.Container>
  )
}

export default Post
