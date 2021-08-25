import React, { useState, useEffect, useRef } from 'react';
import { dbService } from "firebase.js";
import firebase from "firebase";
import * as S from "./Comment.style"; 


const CommentList = ({ com, add, onEdit, onDelete, onScroll, render, user }) =>{
  let [editDelete, setEditDelete] = useState(false);
  let [edit, setEdit] = useState(false);
  let userCheck = com.user_uid === user.uid;

  const container = useRef();
  const input = useRef();

  const onEnter = (e) => {
    if(e.key !== 'Enter' | e.key === 'Enter' && e.shiftKey){
      return;
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      console.log(e.target.parentElement);
      onEditFrame(e.target.value, e.target.parentElement.id);
    }
  }

  const onDoneEdit = () => { 
    onEditFrame(input.current.value, container.current.id);
  };
  
  const onEditFrame = async(value, i) => {
    if(!value){
      return;
    }
    await dbService.collection('comment').doc(i).update({
      comment_content: value
    });
    onEdit();
    setEdit(false);
    setEditDelete(false);
  }

  const onStartEdit = () => {
    setEdit(true);
  };

  const onDeleteList = async(e) => {
    const target = e.target;
    let i = target.parentElement.parentElement.parentElement.id;

    await dbService.collection('comment').doc(i).delete();
    await dbService.collection('users').doc(user.uid).update({
      user_write_comments: firebase.firestore.FieldValue.arrayRemove(i),
    });
    onDelete();
  }

  const onEditDelete = () => {
    setEditDelete(!editDelete);
  }


  //댓글 추가시 스크롤 맨 밑으로
  useEffect(() => {  
    if(add != 'add'){
      return;
    }
    onScroll();
  },[render]);


  return (
    <S.CommentList ref={container} id={com.comment_id} key={com.comment_id}>
      <img src={com.user_image} alt="프로필 이미지입니다"></img>
      {edit ?
      (<input ref={input} placeholder={com.comment_content} onKeyPress={e=>onEnter(e)}/>) :
      <S.Content><p>{com.comment_writer}</p><p>{com.comment_content}</p></S.Content>}
      <S.EditDel>
        {editDelete &&
          <>
          <S.Toggle>
            {!edit && <div onClick={onStartEdit}>수정</div>}
            {!edit && <div onClick={e=>onDeleteList(e)}>삭제</div>}
            <div></div>
          </S.Toggle>
          </>
        }
        {edit && <S.Check onClick={onDoneEdit}>수정완료</S.Check>}
        {userCheck && <i className="fas fa-ellipsis-v" onClick={onEditDelete}></i>}
      </S.EditDel>
    </S.CommentList>
  )
}

export default CommentList;