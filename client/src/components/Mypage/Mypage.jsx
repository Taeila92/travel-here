import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userMiddleware } from 'store/modules/userLike';
import firebase from "firebase";
import * as S from "./Mypage.style";

const Mypage = (props) => {

  const auth = firebase.auth();

  const [info, setInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const user = useSelector(state => state.userLike);
  const dispatch = useDispatch();
  console.log(user);

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
          {/* <S.Info onClick={onInfo}>내 정보</S.Info>
          <S.Post onClick={onPost}>내가 쓴 글</S.Post>
          <S.Comment onClick={onComment}>내가 쓴 댓글</S.Comment>
          <S.Bookmark onClick={onBookmark}>찜</S.Bookmark> */}
          <li onClick={onInfo}>내 정보</li>
          <li onClick={onPost}>내가 쓴 글</li>
          <li onClick={onComment}>내가 쓴 댓글</li>
          <li onClick={onBookmark}>찜</li>
        </S.Content>
        {info &&
        <S.Content>
          내 정보
        </S.Content>}
        {post &&
        <S.Content>
          내가 쓴 글
        </S.Content>}
        {comment &&
        <S.Content>
          내가 쓴 댓글
        </S.Content>}
        {bookmark &&
        <S.Content>
          찜
        </S.Content>}
      </S.Container>
    </>
  )
}

export default Mypage;