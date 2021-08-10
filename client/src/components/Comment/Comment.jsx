import React, { memo, useRef, useState, useEffect } from 'react';
import * as S from "./Comment.style"; 
import { commentAdd, commentEdit, commentDelete } from 'store/modules/comment';
import { dbService } from "firebase.js";
import { useDispatch, useSelector } from 'react-redux';
import { commentMiddleware } from 'store/modules/comment';
import CommentList from './CommentList';


const Comment = memo(({profile, postId}) => {
  let time = Date.now().toString();

  const textarea = useRef();
  const postBtn = useRef();
  const comment = useRef();

  const dispatch = useDispatch();


  let allComment = useSelector(state => state.comment.data);

  let [render, setRender] = useState(false);

  // 댓글 추가 시 스크롤 내리기 용도
  let [add, setAdd] = useState('');

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
      onAdd();
    }
  };

  const onAdd = async() => {
    if(!textarea.current.value){
      return;
    }
    await dbService.collection('comment').doc(time).set({
      post_id: postId,
      profile_img: '아이유.jpg',
      comment_id: time,
      comment_content: textarea.current.value,
      comment_like: 0,
      comment_writer: 'phjphj',
    })
    onNotPost();
    setAdd('add');
    setRender(!render);
    textarea.current.value = '';
  };

  const onDelete = () => {
    setAdd('');
    setRender(!render);
  };

  const onEdit = () => {
    setAdd('');
    setRender(!render);
  };

  const onScroll = () => {
    comment.current.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"});
  };

  useEffect(()=>{
     // 댓글 추가하고 모달창 내렸다가 다시 띄우면 추가한 댓글 떠있게 하기
    dispatch(commentMiddleware());
    // console.log(render);
  },[render]);

  return (
    <S.Comment ref={comment}>
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
            <CommentList
            key={com.comment_id}
            com={com}
            add={add}
            onEdit={onEdit}
            profile={profile}
            onDelete={onDelete}
            onScroll={onScroll}
            render={render}/>
          )
        }
      })}
      <p></p>
    </S.Comment>
  )
})

export default Comment;