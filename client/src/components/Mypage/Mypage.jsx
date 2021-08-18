import React, { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userMiddleware } from 'store/modules/userLike';
import firebase from "firebase";
import * as S from "./Mypage.style";
import Post from './post/Post';
import Comment from './comment/Comment';
import Bookmark from './bookmark/Bookmark';
import img from "assets/images/mypage_back_Img1.png";
import profileImg from "assets/images/profile_img.png";



const Mypage = (props) => {

  const auth = firebase.auth();

  const [info, setInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  
  const user = useSelector(state => state.userLike.data);
  // const posts = useSelector(state => state.board.data);
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
    auth.onAuthStateChanged((user) => {
      dispatch(userMiddleware(user.email, '', 'init'));
    });
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
            <Post post={post} user={user}/>
          </ul>
        </S.Content>}
        {comment &&
        <S.Content>
          <ul>
            <li>내가 쓴 댓글</li>
            <Comment comments={user.user_write_comments} user={user}/>
          </ul>
        </S.Content>}
        {bookmark &&
        <S.Content>
          <ul>  
            <li>찜</li>
            <Bookmark bookmarks={user.user_bookmark_posts} user={user}/>
          </ul>
        </S.Content>}
      </S.Container>
    </>
  )
}

export default Mypage;