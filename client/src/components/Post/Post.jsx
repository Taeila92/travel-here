import React, { useState, useCallback } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as S from "./Post.style";
import { storageService } from 'firebase.js';
import Comment from 'components/Comment/Comment';


const Post = ({postId, profile, trip, setPostClick}) => {

  const container = useRef();
  const images = useRef();
  // const comment = useRef();
  // const postBtn = useRef();
  // const textarea = useRef();


  let [post_likeNum, setPost_likeNum] = useState(false);
  let [isMouseDown, setIsMouseDown] = useState(false);

  const [post_content, setPost_content] = useState("");
  const [post_date, setPost_date] = useState({});
  const [post_id, setPost_id] = useState("");
  const [post_like, setPost_like] = useState("");
  const [post_photo, setPost_photo] = useState("");
  const [post_religion, setPost_religion] = useState("");
  const [post_title, setPost_title] = useState("");
  const [post_views, setPost_views] = useState("");
  const [post_writer, setPost_writer] = useState("");
  const [post_profile_img, setPost_profile_img] = useState("");

  let [com, setCom] = useState("");

  const allPost = useSelector(state => state.board.data);

  const onSetData = () => {
    // 해당 카테고리에 게시글이 한개일 경우
    if(allPost.length == 1){
      onSetDataFrame(0);
    }
    // 여러개일 경우
    for(let i=0; allPost.length-1; i++){
      if(i == allPost.length){
        break;
      }
      if(allPost[i].post_id == postId){
        onSetDataFrame(i);
      };
    }
  };

  const onSetDataFrame = (i) => {
    setPost_content(allPost[i].post_content);
    setPost_date(allPost[i].post_date);
    setPost_id(allPost[i].post_id);
    setPost_like(allPost[i].post_like);
    setPost_religion(allPost[i].post_religion);
    setPost_title(allPost[i].post_title);
    setPost_views(allPost[i].post_views);
    setPost_writer(allPost[i].post_writer);
    setPost_profile_img(allPost[i].post_profile_img);
  };

  // firestore에서 사진 받아오기
  const onLoadImg = () => {
    // 게시글에 사진이 하나일 경우
    if(trip.length == 1){
      onSetImg(0);
      return;
    }
    // 사진이 여러개일 경우
    for(let i=0; trip.length-1; i++){
      if(i == trip.length){
        break;
      }
      onSetImg(i);
    }
  };

  const onSetImg = (i) => {
    let storageRef = storageService.ref();
    let dynamicImg = storageRef.child(`post/${trip[i]}`);
    dynamicImg.getMetadata().then(async function() {
      let downloadDynURL = await dynamicImg.getDownloadURL();
      setPost_photo(downloadDynURL);
      setPost_photo((downloadDynURL)=>{
        onAddImg(downloadDynURL);
      })
    }).catch(function(error) {});
  };


  // 여행사진들 마우스 드래그로 좌우 넘기기
  const onMouseDown = (e) => {

  };

  const onMouseUp = (e) => {
    
  };

  const onMouseMove = (e) => {
    
  };

  const onMouseLeave = (e) => {
    
  };

  // 모달창 숨기기
  const onHideModal = () => {
    setPostClick(false);
  };

  // 좋아요 아이콘 토글
  const onLikeToggle = () => {
    if(post_likeNum){
      setPost_likeNum(false);
    }else{
      setPost_likeNum(true);
    }
  };

  const onAddImg = (image) => {
    let img = `
      <img src="${image}" alt="여행사진"></img>
    `;
    images.current.insertAdjacentHTML('beforeend', img);
  };

  // useEffect
  useEffect(()=>{
    onSetData();
    onLoadImg();
  },[]);


  return (
    <S.Container ref={container}>
      <S.Contents>
        <ul>
          <S.Header>
            <span>
              <span>영국</span>
              <p>#{post_religion}</p>
            </span>
            <i onClick={onHideModal} className="fas fa-times"></i>
          </S.Header>
          <S.Images
            ref={images}
            onMouseDown={e=>onMouseDown(e)}
            onMouseUp={e=>onMouseUp(e)}
            onMouseMove={e=>onMouseMove(e)}
            onMouseLeave={e=>onMouseLeave(e)}>
          </S.Images>
          <S.Profile>
            <img src={profile} alt="프로필 이미지입니다"></img>
            <p>Park HyunJeong</p>
            <span>15min</span>
          </S.Profile>
          <S.Title>{post_title}</S.Title>
          <S.Content>{post_content}</S.Content>
          <S.Like>
            <span>27 Likes</span>
            {post_likeNum ?
            <i onClick={onLikeToggle} className="fas fa-thumbs-up"></i> :
            <i onClick={onLikeToggle} className="far fa-thumbs-up"></i>}
          </S.Like>
          {/* {allComment.map((com) => {
            return <Comment profile={profile} postId={postId} comments={com}/>
          })} */}
          <Comment profile={profile} postId={postId}/>
        </ul>
      </S.Contents>
    </S.Container>
  )
}

export default Post;