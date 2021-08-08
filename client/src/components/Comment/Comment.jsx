import React, { memo, useCallback, useRef } from 'react';
import * as S from "./Comment.style"; 
import { commentAdd, commentEdit, commentDelete } from 'store/modules/comment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { dbService } from "firebase.js";
import { commentMiddleware } from 'store/modules/comment';

const Comment = memo(({profile, postId}) => {
  let time = Date.now().toString();

  const textarea = useRef();
  const postBtn = useRef();
  const comment = useRef();

  const dispatch = useDispatch();


  let allComment = useSelector(state => state.comment.data);

  let [edit, setEdit] = useState(false);

  // 댓글 추가하고 모달창 내렸다가 다시 띄우면 추가한 댓글 떠있게 하기
  dispatch(commentMiddleware());

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
      onAdd();
    }
  };

  const onAdd = async() => {
    await dbService.collection('comment').doc(time).set({
      post_id: postId,
      profile_img: '아이유.jpg',
      comment_id: time,
      comment_content: textarea.current.value,
      comment_like: 0,
      comment_writer: 'phjphj',
    })
    comment.current.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"});
    onNotPost();
    textarea.current.value = '';
  };


  const onEditAndDelete = (e) => {
    const target = e.target;
    let i = target.parentElement.className;
    console.log(i);
    //edit
    if(target.classList.contains('fa-edit')){
      setEdit(true);
    }
    // delete
    if(target.classList.contains('fa-times')){
      dispatch(commentDelete());
      dbService.collection('comment').doc(i).delete();
      target.parentElement.remove();
    }
  }


  const onEditClick = (e) => {
    const target = e.target;
    let i = target.parentElement.className;
      
    dbService.collection('comment').doc(i).update({
      comment_content: target.previousElementSibling.value
    });
    setEdit(false);
  }

  return (
    <S.Comment ref={comment} onClick={e=>onEditAndDelete(e)}>
      <section>
        <textarea
          ref={textarea}
          placeholder="댓글을 입력해주세요"
          onKeyPress={e=>onEnter(e)}
          onChange={onChangePostBtn}>
        </textarea>
        <button ref={postBtn} type="submit" onClick={onAdd}>게시</button>
      </section>
      {allComment && allComment.map((com)=>{
        if(com.post_id == postId){
          return (
            <div class={com.comment_id} key={com.comment_id}>
              <img src={profile} alt="프로필 이미지입니다"></img>
              {edit ?
              (<input placeholder={com.comment_content}/>) :
              (<p>{com.comment_content}</p>)}
              {edit ?
              (<i class="fas fa-check" onClick={e=>onEditClick(e)}></i>) :
              (<i class="fas fa-edit"></i>)}
              <i class="fas fa-times"></i>
            </div>
          )
        }
      })}
    </S.Comment>
  )
})

export default Comment;