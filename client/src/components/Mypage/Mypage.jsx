import React, { useState, useRef } from 'react';
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

import { dbService, storageService } from 'firebase.js';
import firebase from 'firebase';

import { v4 as uuidv4 } from "uuid";


const Mypage = ({user}) => {

  const [info, setInfo] = useState(false);
  const [post, setPost] = useState(false);
  const [comment, setComment] = useState(false);
  const [bookmark, setBookmark] = useState(false);
  const [attachment, setAttachment] = useState([]);

  const [uid, setUid] = useState('');

  const input = useRef();

  const auth = firebase.auth();

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

  const onUsername = (value) => {
    dbService.collection('users').doc(user.user_id).update({
      user_name: value,      
    });
  }

  const onUserImage = (value) => {
    dbService.collection('users').doc(user.user_id).update({
      user_image: value,      
    });
  }

  const onFileChange = (e) => {
    const { files } = e.target;
    let file;
    let fileURLs = [];

    file = files[0];
    let reader = new FileReader();
    reader.onload = () => {
      fileURLs[0] = reader.result;
      setAttachment([...fileURLs]);
    };
    reader.readAsDataURL(file);
  };

  const onEnter = (e) => {
    if(e.key != 'Enter'){
      return;
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      onSubmitBtn();
    }
  }

  const onSubmitBtn = () => {
    onUsername(input.current.value);
    input.current.value = '';
  }

  const onSubmit = async(e) => {
    e.preventDefault();
    let attachmentUrl = [];
    if (attachment) {
      const attachmentRef = storageService
        .ref()
        .child(`${uid.uid}/${uuidv4()}`);
      const response = await attachmentRef.putString(
        attachment[0],
        "data_url"
      );
      attachmentUrl.push(await response.ref.getDownloadURL());
    };

    await dbService.collection('users').doc(user.user_id).update({
      user_image: attachmentUrl,
    });
    setAttachment([]);
  };

  useEffect(()=>{
    dispatch(mypagePostMiddleware(user.user_id));
    for(let i=0; i<user.user_write_comments.length; i++){
      if(i === user.user_write_comments.length-1){
        dispatch(mypageCommentMiddleware(user.user_write_comments[i], 'finish'));
      }
      if(i !== user.user_write_comments.length-1){
        dispatch(mypageCommentMiddleware(user.user_write_comments[i]));
      }
    }
    for(let i=0; i<user.user_bookmark_posts.length; i++){
      if(i === user.user_bookmark_posts.length-1){
        dispatch(mypageBookmarkMiddleware(user.user_bookmark_posts[i], 'finish'));
      }
      if(i !== user.user_bookmark_posts.length-1){
        dispatch(mypageBookmarkMiddleware(user.user_bookmark_posts[i]));
      }
    }

    auth.onAuthStateChanged((user) => {
      setUid(user);
    });
  },[]);


  return (
    <>
      <S.Container>
        <S.Contents>
          <S.BackImage>
            <img src={user.user_image} alt="배경사진" />
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
          {user.user_name ? <li>{user.user_name}</li> : <li onClick={onUsername}>닉네임 설정할래?</li>}
          {user.user_image ? <li><img src={user.user_image} alt="프로필 사진"></img></li> : <li onClick={onUserImage}>사진 추가할래?</li>}
          <li>
            <input ref={input} type="text" onKeyPress={e=>onEnter(e)}/>
            <button onClick={onSubmitBtn}>제출</button>
          </li>
          <li>
            <form onSubmit={onSubmit}>
              <input
                accept="image/*"
                type="file"
                onChange={onFileChange}
                name="fileNames[]"
              />
              {attachment && (
                <div>
                  {attachment.map((atta, i) => (
                    <img key={i} src={atta} width="50px" height="50px" alt="프로필 사진"/>
                  ))}
                </div>
              )}
              <button type="submit">제출</button>
            </form>
          </li>
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