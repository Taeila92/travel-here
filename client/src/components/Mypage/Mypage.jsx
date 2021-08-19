import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import * as S from "./Mypage.style";
import Post from './post/Post';
import Comment from './comment/Comment';
import Bookmark from './bookmark/Bookmark';
import img from "assets/images/mypage_back_Img1.png";
import profileImg from "assets/images/profile_img.png";

import { mypageBookmarkMiddleware } from 'store/modules/mypageBookmark';
import { mypageCommentMiddleware } from 'store/modules/mypageComment';
import { mypagePostMiddleware } from 'store/modules/mypagePost';



const Mypage = ({user}) => {

  const [info, setInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmark, setBookmark] = useState(false);

  const dispatch = useDispatch();

  const onClose = () => {
    setInfo(false);
    setPost(false);
    setComment(false);
    setBookmark(false);
  }

  const onInfo = () => {
    if(info){
      onClose();
      return;
    }
    onClose();
    setInfo(true);
  }

  const onPost = () => {
    if(post){
      onClose();
      return;
    }
    onClose();
    setPost(true);
  }

  const onComment = () => {
    if(comment){
      onClose();
      return;
    }
    onClose();
    setComment(true);
  }

  const onBookmark = () => {
    if(bookmark){
      onClose();
      return;
    }
    onClose();
    setBookmark(true);
  }


  useEffect(()=>{
    dispatch(mypagePostMiddleware(user.user_id));
    for(let i=0; i<user.user_write_comments.length; i++){
      dispatch(mypageCommentMiddleware(user.user_write_comments[i]));
    }
    for(let i=0; i<user.user_bookmark_posts.length; i++){
      dispatch(mypageBookmarkMiddleware(user.user_bookmark_posts[i]));
    }
  },[]);

  return (
    <>
      <S.Container>
        <S.Contents>
          <S.BackImage>
            <img src={profileImg} alt="배경사진" />
          </S.BackImage>
          <S.ListArea>
            <p onClick={onInfo}>
              <i className="fas fa-user-alt"></i>
              내 정보
            </p>
            <ul>
              <li onClick={onPost}>
                <i className="fas fa-pencil-alt"></i>
                내가 쓴 글
              </li>
              <li onClick={onComment}>
                <i className="fas fa-comment-dots"></i>
                내가 쓴 댓글
              </li>
              <li onClick={onBookmark}>
                <i className="fas fa-bookmark"></i>
                찜
              </li>
            </ul>
          </S.ListArea>
        </S.Contents>
        {info &&
        <S.Content>
          <li>내 정보</li>
          <li>{user.user_id}</li>
          <li>{user.user_name}</li>
          <li>{user.user_image}</li>
        </S.Content>}
        {post &&
        <S.Content>
          <ul>
            <li>내가 쓴 글</li>
            <Post user={user}/>
          </ul>
        </S.Content>}
        {comment &&
        <S.Content>
          <ul>
            <li>내가 쓴 댓글</li>
            <Comment user={user}/>
          </ul>
        </S.Content>}
        {bookmark &&
        <S.Content>
          <ul>  
            <li>찜</li>
            <Bookmark user={user}/>
          </ul>
        </S.Content>}
      </S.Container>
    </>
  )
}

export default Mypage;