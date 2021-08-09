import React, { useState } from 'react';

const CommentList = ({ com, onEdit, profile }) =>{
  let [edit, setEdit] = useState(false);

  const onDoneEdit = (e) => {
    onEdit(e);
    setEdit(false);
  };

  const onStartEdit = (e) => {
    setEdit(true);
  };

  return (
    <div class={com.comment_id} key={com.comment_id}>
      <img src={profile} alt="프로필 이미지입니다"></img>
      {edit ?
      (<input placeholder={com.comment_content}/>) :
      (<p>{com.comment_content}</p>)}
      {edit ?
      (<i class="fas fa-check" onClick={e=>onDoneEdit(e)}></i>) :
      (<i class="fas fa-edit" onClick={e=>onStartEdit(e)}></i>)}
      <i class="fas fa-times"></i>
    </div>
  )
}

export default CommentList;