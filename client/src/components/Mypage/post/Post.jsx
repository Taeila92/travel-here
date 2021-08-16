import React, { useEffect } from 'react';
import * as S from "./Post.style";
import { useDispatch, useSelector } from 'react-redux';
import { mypagePostMiddleware } from 'store/modules/mypagePost';



const Post = ({user}) => {

  const postDB = useSelector(state => state.mypagePost.data);
  const dispatch = useDispatch();
  

  useEffect(()=>{
    dispatch(mypagePostMiddleware(user.user_id));
  },[])
  
  console.log(postDB);

  return (
    <>
      {postDB.map((post) => {
        return(
        <li>
          <h1>{post.post_title}</h1>
          <h2>{post.post_content}</h2>
        </li>
        )
      })}
    </>
  )
}

export default Post;