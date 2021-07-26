import React from 'react'
import * as S from './Post.style'

const Post = ({data}) => {
  const { post_id, post_title } = data;
  
  return (
    <S.Container>
      <S.Profile>
        <img src="" alt="profile" />
        <h2>Account Name</h2>
      </S.Profile>
      <S.Content>
        <p>Lorem ipsum dolor sit amet, consectetur adipisic</p>
        <img src="" alt="travel site" />
      </S.Content>
      <div>date</div>
    </S.Container>
  )
}

export default Post
