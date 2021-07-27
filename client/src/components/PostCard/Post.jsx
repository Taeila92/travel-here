import React from 'react'
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
  
  console.log(post_date.toDate())

  return (
    <S.Container>
      <S.Profile>
        <img src={post_photo} alt="profile" />
        <h2>{post_title}</h2>
      </S.Profile>
      <S.Content>
        <p>{post_content}</p>
        <img src="" alt="travel site" />
      </S.Content>
      <div>{getDate(post_date)}</div>
      <div>views : {post_views}</div>
      <div>like : {post_like}</div>
    </S.Container>
  )
}

export default Post
