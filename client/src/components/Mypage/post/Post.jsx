import React, { useEffect } from 'react';
import * as S from "./Post.style";
import { useDispatch, useSelector } from 'react-redux';
import { postMiddleware } from 'store/modules/post';
import { dbService } from "firebase.js";



const Post = ({post, user, posts}) => {

  const postDB = useSelector(state => state.post.data);
  const dispatch = useDispatch();


  const getPost = async() => {
    let data = await dbService.collection('post').doc(post).get();
    return data;
  }

  const setData = async() => {
    let data = await getPost();
    // console.log(user.user_id);
    console.log(postDB);
  }

  useEffect(()=>{
    // for(let p in posts){
    // }
    dispatch(postMiddleware(user.user_id));
    setData();
  },[])

  return (
    <li>{post}</li>
  )
}

export default Post;