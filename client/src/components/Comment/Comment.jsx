import React, { useRef } from 'react';
import * as S from "./Comment.style"; 
import { commentAdd, commentEdit, commentDelete } from 'store/modules/comment';
import { commentMiddleware } from 'store/modules/comment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storageService } from 'firebase.js';
import { useState } from 'react';

const Comment = ({profile, postId, comments}) => {
  const textarea = useRef();
  const postBtn = useRef();
  const comment = useRef();

  const dispatch = useDispatch();

  let allComment = useSelector(state => state.comment.data);
  const [profilePhoto, setProfilePhoto] = useState('');

  // comment쓰는 textarea의 값 null check에 따른 '게시'버튼 색깔 변화 
  const onNotPost = () => {
    postBtn.current.style.color = "black";
    postBtn.current.style.fontWeight = "normal";
  };

  const onDoPost = () => {
    postBtn.current.style.color = "blue";
    postBtn.current.style.fontWeight = "bold";
  };

  const onChangePostBtn = () => {
    if(!textarea.current.value){
      onNotPost();
      return;
    }
    onDoPost();
  };


  // 댓글 쓰고 엔터 눌렀을 때
  const onEnter = (e) => {
    if(e.key != 'Enter' | e.key === 'Enter' && e.shiftKey){
      return;
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      if(!textarea.current.value){
        return;
      }
      onAddComment();
    }
  };

  const onAddComment = () => {
    let content = `
    <div>
      <img src=${profile} alt="프로필 이미지입니다"></img>
      <p>${textarea.current.value}</p>
      <i class="fas fa-times"></i>
    </div>
    `;
    comment.current.insertAdjacentHTML('beforeend', content);
    comment.current.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"});
    onNotPost();
    textarea.current.value = '';
  };

  const onAddServerComment = (url, i) => {
    let content = `
    <div>
      <img src="${url}" alt="프로필 이미지입니다"></img>
      <p>${allComment[i].comment_content}</p>
      <i class="fas fa-times"></i>
    </div>
    `;
    comment.current.insertAdjacentHTML('beforeend', content);
    onNotPost();
    textarea.current.value = '';
  }


  const onLoadImg = () => {
    if(allComment.length == 1){
      onSetImg(0);
      return;
    }
    for(let i=0; allComment.length-1; i++){
      if(i == allComment.length){
        break;
      }
      onSetImg(i);
    }
  };

  const onSetImg = (i) => {
    let imgArr = [allComment[i].profile_img];
    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${imgArr}`);

    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setProfilePhoto(downloadDynURL);
      setProfilePhoto((downloadDynURL)=>{
        onAddServerComment(downloadDynURL, i);
      })
    }).catch(function(error) {});
  };


  useEffect(()=>{
    dispatch(commentMiddleware(postId));
    onLoadImg();
  },[]);
  
  
  return (
    <S.Comment ref={comment}>
      <section>
        <textarea
          ref={textarea}
          placeholder="댓글을 입력해주세요"
          onKeyPress={e=>onEnter(e)}
          onChange={onChangePostBtn}>
        </textarea>
        <button ref={postBtn} type="submit" onClick={onAddComment}>게시</button>
      </section>
      {allComment ? allComment.map((com)=>{
        <div>
          <img src={com.profile_img} alt="프로필 이미지입니다"></img>
          <p>{com.comment_content}</p>
          <i class="fas fa-times"></i>
        </div>
        }) : <div>?</div>
      }
      {/* {allComment &&
        <div>
          <img src={profilePhoto} alt="프로필 이미지입니다"></img>
          <p>{allComment.comment_content}</p>
          <i class="fas fa-times"></i>
        </div>} */}
    </S.Comment>
  )
}

export default Comment;