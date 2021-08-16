import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userMiddleware } from 'store/modules/userLike';
import firebase from "firebase";
import { dbService } from "firebase.js";
import * as S from "./Mypage.style";
import Post from './post/Post';
import Comment from './comment/Comment';
import Bookmark from './bookmark/Bookmark';



const Mypage = (props) => {

  const auth = firebase.auth();

  
  const [info, setInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  
  const user = useSelector(state => state.userLike.data);
  const posts = useSelector(state => state.board.data);
  const dispatch = useDispatch();


  const onInfo = () => {
    setPost(false);
    setComment(false);
    setBookmark(false);
    setInfo(true);
  }

  const onPost = () => {
    setInfo(false);
    setComment(false);
    setBookmark(false);
    setPost(true);
  }

  const onComment = () => {
    setInfo(false);
    setPost(false);
    setBookmark(false);
    setComment(true);
  }

  const onBookmark = () => {
    setInfo(false);
    setPost(false);
    setComment(false);
    setBookmark(true);
  }


  useEffect(()=>{
    auth.onAuthStateChanged((user) => {
      dispatch(userMiddleware(user.email, '', 'init'));
    });
  },[]);

  return (
    <>
      <S.Container>
        <S.Content>
          <li onClick={onInfo}>내 정보</li>
          <li onClick={onPost}>내가 쓴 글</li>
          <li onClick={onComment}>내가 쓴 댓글</li>
          <li onClick={onBookmark}>찜</li>
        </S.Content>
        {info &&
        <S.Content>
          <li>내 정보</li>
          <li>{user.user_id}</li>
          <li>{user.user_name}</li>
          <li>{user.user_image}</li>
        </S.Content>}
        {post &&
        <S.Content>
          <li>내가 쓴 글</li>
          <Post post={post} user={user}/>
        </S.Content>}
        {comment &&
        <S.Content>
          <li>내가 쓴 댓글</li>
          <Comment comments={user.user_write_comments}/>
        </S.Content>}
        {bookmark &&
        <S.Content>
          <li>찜</li>
          <Bookmark bookmarks={user.user_bookmark_posts} />
        </S.Content>}
      </S.Container>
    </>
  )
}

export default Mypage;