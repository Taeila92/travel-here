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
  
  // let posts = []; 
  // let comments = [];
  // let bookmarks = [];

  // const onGetPost = async(user) => {
  //   user.user_write_posts.map(async(post) => {
  //     let allpost = await dbService.collection('post').doc(post).get();
  //     return allpost;
  //   });
  // };

  const onSetPost = async(user) => {
    console.log(user);
    // let allpost = await onGetPost(user);
    // let test = [];
    // if(allpost){
    //   allpost.forEach(elem => {
    //     test.push(elem);
    //   });
    
    //   console.log(test);
    // }
  }
  // user.user_write_comments.map((comment) => {
  //   comments = dbService.collection('comment').doc(comment).get();
  // });
  // user.user_bookmark_posts.map(async(bookmark) => {
  //   bookmarks = await dbService.collection('post').doc(bookmark).get();
  // });

  // console.log(bookmarks);

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
      onSetPost(user);
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
          <li>내 정보</li>
          <li>{user.user_id}</li>
          <li>{user.user_name}</li>
          <li>{user.user_image}</li>
        </S.Content>}
        {post &&
        <S.Content>
          <li>내가 쓴 글</li>
          {user.user_write_posts.map((post) => {
            // return <li>{post}</li>;
            return <Post key={post} post={post} user={user} posts={user.user_write_posts}/>
          })}
        </S.Content>}
        {comment &&
        <S.Content>
          <li>내가 쓴 댓글</li>
          {user.user_write_comments.map((com) => {
            // return <li>{com}</li>;
            return <Comment key={com} com={com} user={user}/>
          })}
        </S.Content>}
        {bookmark &&
        <S.Content>
          <li>찜</li>
          {user.user_bookmark_posts.map((bookmark) => {
            // return <li>{bookmark}</li>;
            return <Bookmark key={bookmark} bookmark={bookmark} user={user}/>
          })}
        </S.Content>}
      </S.Container>
    </>
  )
}

export default Mypage;