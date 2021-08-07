import React, { useCallback, useRef } from 'react';
import * as S from "./Comment.style"; 
import { commentAdd, commentEdit, commentDelete } from 'store/modules/comment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { storageService } from 'firebase.js';
import { useState } from 'react';
import { dbService } from "firebase.js";
import { commentMiddleware } from 'store/modules/comment';

const Comment = ({profile, postId, comments}) => {
  let time = Date.now().toString();

  const textarea = useRef();
  const postBtn = useRef();
  const comment = useRef();

  const dispatch = useDispatch();


  let allComment = useSelector(state => state.comment.data);
  const [profilePhoto, setProfilePhoto] = useState('');
  const [img, setImg] = useState(false);

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

    let content = `
    <div class=${time}>
      <img src=${profile} alt="프로필 이미지입니다"></img>
      <p>${textarea.current.value}</p>
      <i class="fas fa-edit"></i>
      <i class="fas fa-times"></i>
    </div>
    `;

    comment.current.insertAdjacentHTML('beforeend', content);
    comment.current.lastElementChild.scrollIntoView({behavior: "smooth", block: "end"});
    onNotPost();
    textarea.current.value = '';
  };


  const onAddServer = (url, i) => {
    let content = `
    <div class=${allComment[i].comment_id}>
      <img src="${url}" alt="프로필 이미지입니다"></img>
      <p>${allComment[i].comment_content}</p>
      <i class="fas fa-edit"></i>
      <i class="fas fa-times"></i>
    </div>
    `;
    comment.current.insertAdjacentHTML('beforeend', content);
    onNotPost();
  }

  const onEditAndDelete = (e) => {
    const target = e.target;
    let i = target.parentElement.className;
    if(target.classList.contains('fa-edit')){
      onStartEdit(target);
    }
    if(target.classList.contains('fa-check')){
      onCompleteEdit(target);
    }
    if(target.classList.contains('fa-times')){
      dbService.collection('comment').doc(i).delete();
      target.parentElement.remove();
    }
  }

  const onStartEdit = (target) => {
    const p = target.previousElementSibling;
    const text = p.textContent;
    p.remove();
    const inputText = `<input placeholder=${text}></input>`;
    target.insertAdjacentHTML('beforebegin', inputText);

    const checkIcon = `<i class="fas fa-check"></i>`;
    target.nextElementSibling.insertAdjacentHTML('beforebegin', checkIcon);
    target.remove();
  }

  const onCompleteEdit = (target) => {
    const i = target.parentElement.className;
    const input = target.previousElementSibling;
    const text = input.value;

    const pText = `<p>${text}</p>`;
    input.remove();
    target.insertAdjacentHTML('beforebegin', pText);

    const editIcon = `<i class="fas fa-edit"></i>`;
    target.nextElementSibling.insertAdjacentHTML('beforebegin', editIcon);
    target.remove();

    dbService.collection('comment').doc(i).update({
      comment_content: text
    })
  }


  const onLoadImg = () => {
    if(allComment != undefined){
      if(allComment.length == 1){
        onSetImg(0);
        return;
      }
      for(let i=0; allComment.length-1; i++){
        if(i == allComment.length){
          break;
        }
        if(allComment[i].post_id == postId){
          onSetImg(i);
        }
      }
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
        onAddServer(downloadDynURL, i);
      })
    }).catch(function(error) {});
  };

  useEffect(()=>{
    onLoadImg();
  },[]);


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
    </S.Comment>
  )
}

export default Comment;