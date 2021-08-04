import React, { useRef } from 'react';
import * as S from "./Comment.style"; 

const Comment = ({profile}) => {
  const textarea = useRef();
  const postBtn = useRef();
  const comment = useRef();

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
    </S.Comment>
  )
}

export default Comment;