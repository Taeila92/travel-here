import React, { useState, useEffect } from 'react';
import { dbService } from "firebase.js";


const CommentList = ({ com, add, onEdit, onDelete, profile, onScroll, render }) =>{
  let [edit, setEdit] = useState(false);

  const onEnter = (e) => {
    if(e.key != 'Enter' | e.key === 'Enter' && e.shiftKey){
      return;
    }
    if(e.key === 'Enter'){
      e.preventDefault();
      const target = e.target;
      let i = target.parentElement.className;
        
      onEditFrame(target.value, i);
    }
  }

  const onDoneEdit = (e) => {
    const target = e.target;
    let i = target.parentElement.className;
      
    onEditFrame(target.previousElementSibling.value, i);
  };

  const onEditFrame = (value, i) => {
    dbService.collection('comment').doc(i).update({
      comment_content: value
    });
    onEdit();
    setEdit(false);
  }

  const onStartEdit = () => {
    setEdit(true);
  };

  const onDeleteList = (e) => {
    const target = e.target;
    let i = target.parentElement.className;
    dbService.collection('comment').doc(i).delete();
    onDelete();
  }


  //댓글 추가시 스크롤 맨 밑으로
  useEffect(() => {  
    if(add != 'add'){
      return;
    }
    onScroll();
  },[render]);


  return (
    <div className={com.comment_id} key={com.comment_id}>
      <img src={profile} alt="프로필 이미지입니다"></img>
      {edit ?
      (<input placeholder={com.comment_content} onKeyPress={e=>onEnter(e)}/>) :
      (<p>{com.comment_content}</p>)}
      {edit ?
      (<i className="fas fa-check" onClick={e=>onDoneEdit(e)}></i>) :
      (<i className="fas fa-edit" onClick={onStartEdit}></i>)}
      <i className="fas fa-times" onClick={e=>onDeleteList(e)}></i>
    </div>
  )
}

export default CommentList;