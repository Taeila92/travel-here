import React, { useEffect } from 'react';
import * as S from "./Comment.style";
import { useDispatch, useSelector } from 'react-redux';
import { mypageCommentMiddleware } from 'store/modules/mypageComment';
import { useHistory } from 'react-router-dom';


const Comment = ({ comments, user }) => {

  const commentDB = useSelector(state => state.mypageComment.data);
  const dispatch = useDispatch();

  const history = useHistory();

  const onMovePage =(post) => {
    history.push({
      pathname: `/categorylist/${post.post_religion}`,
      search: `?id=${post.post_id}`,
      state: {
        like: user.user_like_posts,
        bookmark: user.user_bookmark_posts,
        postData: post,
        profile: user.user_image,
      }
    });
  }

  useEffect(()=>{
    for(let i=0; i<comments.length; i++){
      dispatch(mypageCommentMiddleware(comments[i]));
    }
  },[]);


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