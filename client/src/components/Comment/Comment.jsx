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
      onAddComment();
    }
  };

  const onAddComment = async() => {
    // firestore에 데이터 올리기
    await dbService.collection('comment').add({
      post_id: postId,
      profile_img: '아이유.jpg',
      comment_id: 3,
      comment_content: textarea.current.value,
      comment_like: 0,
      comment_writer: 'phjphj',
    });

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
    <div class=${i}>
      <img src="${url}" alt="프로필 이미지입니다"></img>
      <p>${allComment[i].comment_content}</p>
      <i class="fas fa-times"></i>
    </div>
    `;
    comment.current.insertAdjacentHTML('beforeend', content);
    onNotPost();
  }


  // function onAddServerComment(url, i){
  //   // if(i == undefined){
  //   //   return;
  //   // }
  //     let content = `
  //       <img src="${url}" alt="프로필 이미지입니다"></img>
  //       <p>${allComment[0].comment_content}</p>
  //       <i class="fas fa-times"></i>
  //     `;
  //     // setImg(true);
  //     return {__html :content};
  // }


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
    // console.log(allComment);
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

  const onCommentClick = (e) => {
    const target = e.target;
    if(!target.classList.contains('fa-times')){
      return;
    }
    // let i = target.parentElement.className;
    // let imgArr = [allComment[i].profile_img];
    // let storageRef = storageService.ref();
    // let dynamicImg = storageRef.child(`post/${imgArr}`);
    // dynamicImg.delete().then(function() {}).catch(function(error) {});
    // db.collection('comment').doc('0fBhQbBqZZkHnT3FPlfP').delete();
    // dispatch(commentDelete());
  }

  useEffect(()=>{
    onLoadImg();
  },[]);


  return (
    <S.Comment ref={comment} onClick={e=>onCommentClick(e)}>
      <section>
        <textarea
          ref={textarea}
          placeholder="댓글을 입력해주세요"
          onKeyPress={e=>onEnter(e)}
          onChange={onChangePostBtn}>
        </textarea>
        <button ref={postBtn} type="submit" onClick={onAddComment}>게시</button>
      </section>
      {/* {allComment ?
      allComment.map((com)=>{
            <div>
              <img src={allComment[0].profile_img} alt="프로필 이미지입니다"></img>
              <p>{allComment[0].comment_content}</p>
              <i class="fas fa-times"></i>
            </div>
        <div>{allComment[0].profile_img}</div>
        })
        : <div>?</div>} */}
      {/* {allComment &&
        <div>
          <img src={allComment[0].profile_img} alt="프로필 이미지입니다"></img>
          <p>{allComment[0].comment_content}</p>
          <i class="fas fa-times"></i>
        </div>} */}
      {/* {allComment &&
      <div>
        <img src={allComment[0].profile_img} alt="프로필 이미지입니다"></img>
        <p>{allComment[0].comment_content}</p>
        <i class="fas fa-times"></i>
      </div>} */}
      {/* <div dangerouslySetInnerHTML={onAddServerComment()} /> */}
    </S.Comment>
  )
}

export default Comment;