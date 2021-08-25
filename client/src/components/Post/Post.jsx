import React, { useState, useRef, useEffect } from "react";
import * as S from "./Post.style";
import Comment from 'components/Comment/Comment';
import PostSlider from './PostSlider/PostSlider';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from "react-router-dom";
import { likeMiddleware } from 'store/modules/postLike';
import { userMiddleware } from 'store/modules/userLike';
import { bookmarkMiddleware } from 'store/modules/bookmark';
import { commentDelThunk, userComDelThunk, userLikeDelThunk, userBookmarkDelThunk, getComId } from 'store/modules/delete';
// import { userComDelThunk } from 'store/modules/delete';
// import { userLikeDelThunk } from 'store/modules/delete';
// import { userBookmarkDelThunk, getComId } from 'store/modules/delete';
import firebase from "firebase";
import { dbService } from "firebase.js";


const Post = ({postData, isPostOpened, setIsPostOpened, setLikeRender, setViewRender, viewRender, postView }) => {
  const { post_date, post_region, post_title, post_content, post_photo, post_id, post_writer, post_uid, post_profile_img } = postData;

  const location = useLocation();

  const userDB = useSelector(state => state.userLike.data);

  const auth = firebase.auth();

  const dispatch = useDispatch();

  let [time, setTime] = useState('');

  let [bar, setBar] = useState(false);

  let [user, setUser] = useState('');

  let history = useHistory();

  // 좋아요 숫자 받아오기
  let likeNum = useSelector((state) => state.postLike.likeNum);

  // 내가 해당 게시글에 좋아요을 했나 안 했나 표시
  let [likePost, setLikePost] = useState(location.state.like.includes(post_id));

  // 내가 해당 게시글에 찜을 했나 안 했나 표시
  let [bookmarkPost, setBookmarkPost] = useState(location.state.bookmark.includes(post_id));
  
  const userCheck = user.uid === post_uid;

  const comment = useRef();

  // 좋아요 아이콘 토글 -> 할 때마다 firestore에 저장 되어야 함
  const onLikeToggle = async() => {
    if(likePost){
      setLikePost(false);
      setLikeRender('noneLike');
      dispatch(likeMiddleware(post_id, 'noneLike')); 
      dispatch(userMiddleware(user.uid, post_id, 'noneLike'));
    }else{
      setLikePost(true);
      setLikeRender('like');
      dispatch(likeMiddleware(post_id, 'like')); 
      dispatch(userMiddleware(user.uid, post_id, 'like'));
    }
  };

  // 찜 아이콘 토글
  const onBookmarkToggle = () => {
    if(bookmarkPost){
      setBookmarkPost(false);
      dispatch(bookmarkMiddleware(user.uid, post_id, 'noneBookmark'));
    }else{
      setBookmarkPost(true);
      dispatch(bookmarkMiddleware(user.uid, post_id, 'bookmark'));
    }
  };

  const postEdit = async() => {
    // await dbService.collection('post').doc(post_id).update({
    //   post_content: firebase.firestore.FieldValue.arrayUnion(),      
    // });
    
  }

  // 게시글 삭제 시 삭제되는 것들
  // post collection : post 문서 자체
  // users collection : user_write_posts, user_write_comments, user_like_posts, user_bookmark_posts
  // comment collection : comment 문서 자체
  const postDelete = async() => {
    await dbService.collection('post').doc(post_id).delete();
    await dbService.collection('users').doc(user.uid).update({
      user_write_posts: firebase.firestore.FieldValue.arrayRemove(post_id),
    });
    dispatch(commentDelThunk(post_id));
    dispatch(userLikeDelThunk(post_id));
    dispatch(userBookmarkDelThunk(post_id));
    // getComId함수를 통해 comment_id를 얻는데
    // dispatch(commentDelThunk(post_id))가 실행된 후에 그 comment_id 정보가 들어옴
    // dispatch를 비동기처리할 방법을 찾지 못해 setTimeout으로 처리
    setTimeout(() =>{
      let com = getComId();
      for(let i=0; i<com[0].length; i++){
        dispatch(userComDelThunk(com[0][i]));
      }
    }, 1000);
    onHideModal();
  }

  const onEditDelete = () => {
    setBar(!bar);
  }

  function timeNotice(time) {
    const milliSeconds = new Date() - time
    const seconds = milliSeconds / 1000
    if (seconds < 60){setTime(`방금 전`); return;};
    const minutes = seconds / 60
    if (minutes < 60){setTime(`${Math.floor(minutes)}분 전`); return;}
    const hours = minutes / 60
    if (hours < 24){setTime(`${Math.floor(hours)}시간 전`); return;}
    const days = hours / 24
    if (days < 7){setTime(`${Math.floor(days)}일 전`); return;}
    const weeks = days / 7
    if (weeks < 5){setTime(`${Math.floor(weeks)}주 전`); return;}
    const months = days / 30
    if (months < 12){setTime(`${Math.floor(months)}개월 전`); return;}
    const years = days / 365
    setTime(`${Math.floor(years)}년 전`)
  }

  
  // 모달창 닫기
  const onHideModal = () => {
    setViewRender(!viewRender);
    setIsPostOpened(false);
    history.push({
      search: '',
    });
    window.location.reload();
  };  


  useEffect(() =>{
    auth.onAuthStateChanged((user) => {
      setUser(user);
      dispatch(userMiddleware(user.uid, '', 'init'));
    });
    dispatch(likeMiddleware(post_id, 'init'));
    timeNotice(post_date);
  }, []);


  // 새로고침하면 좋아요, 찜 변경사항이 반영안됨
  // 그래서 일단 경고창 띄우는 걸로 처리
  // useEffect(() => {
  //   if(!isPostOpened){
  //     return;
  //   }
  //   window.onbeforeunload = (e) => {
  //     e.preventDefault()
  //     return true;
  //   };
  //   return () => {
  //     window.onbeforeunload = null;
  //   };
  // },[window.onbeforeunload]);




  return (
    <S.Container>
      <S.Contents>
        <ul ref={comment}>
          <S.Header>
            <span>
              <span>{post_title}</span>
              <p>#{post_region}</p>
              <p>조회수 {postView}</p>
            </span>
            <div>
              {userCheck && <i onClick={onEditDelete} className="fas fa-ellipsis-v"></i>}
              <i onClick={onHideModal} className="fas fa-times-circle"></i>
              {bar &&
              <S.editDelToggle>
                <div></div>
                <p onClick={postEdit}>수정</p>
                <p onClick={postDelete}>삭제</p>
              </S.editDelToggle>}
            </div>
          </S.Header>
          {post_photo && <PostSlider postImages={post_photo}/>}
          <S.Profile>
            <img src={post_profile_img} alt="프로필 이미지입니다"></img>
            <p>{post_writer}</p> {/* post_writer로 검색?*/}
            <span>{time}</span>
          </S.Profile>
          {/* <S.Title>{post_title}</S.Title> */}
          <S.Content>{post_content}</S.Content>
          <S.Like>
            <span>
              {likePost ? (
                <i onClick={onLikeToggle} className="fas fa-heart"></i>
              ) : (
                <i onClick={onLikeToggle} className="far fa-heart"></i>
              )}
              <span>{likeNum}</span>
              <p>명</p>이 좋아합니다
            </span>
            {bookmarkPost ? (
              <i onClick={onBookmarkToggle} title={'찜 해제'} className="fas fa-bookmark"></i>
            ) : (
              <i onClick={onBookmarkToggle} title={'찜하기'} className="far fa-bookmark"></i>
            )}
          </S.Like>
          <Comment postId={post_id} postregion={post_region} userDB={userDB}/>
        </ul>
      </S.Contents>
      {/* <S.Test></S.Test> */}
    </S.Container>
  );
};

export default Post;
