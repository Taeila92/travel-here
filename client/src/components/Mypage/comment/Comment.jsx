import React from 'react';
import * as S from "./Comment.style";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Comment = ({ user }) => {

  const commentDB = useSelector(state => state.mypageComment.data);

  const history = useHistory();

  const onMovePage =(post) => {
    history.push({
      pathname: `/categorylist/${post.post_region}`,
      search: `?id=${post.post_id}`,
      state: {
        like: user.user_like_posts,
        bookmark: user.user_bookmark_posts,
        postData: post,
        profile: user.user_image,
      }
    });
  }


  return(
    <>
      {commentDB.map((com) => {
        return(
        <S.List key={com.comment_id} onClick={()=>{onMovePage(com)}}>
          <h1>{com.comment_content}</h1>
        </S.List>
        )
      })}
    </>
  )
}

export default Comment;