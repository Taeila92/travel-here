import React, { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import * as S from "./Post.style";
import { storageService } from 'firebase.js';
import Comment from 'components/Comment/Comment';
import PostSlider from './PostSlider/PostSlider';


const Post = ({postData, postId, profile, trip, setIsPostModalOpened}) => {

  const container = useRef();
  console.log(postData)

  const { post_religion, post_title, post_content, post_like, post_photo } = postData


  // 내가 해당 게시글에 좋아요을 보냈나 안 보냇나 표시
  let [likePost, setLikePost] = useState(false);

  // 좋아요 아이콘 토글 -> 할 때마다 firestore에 저장 되어야 함
  const onLikeToggle = () => {
    if(likePost){
      setLikePost(false);
    }else{
      setLikePost(true);
    }
  };
  
  // 모달창 숨기기
  const onHideModal = () => {
    setIsPostModalOpened(false);
  };  


  
  const [post_date, setPost_date] = useState({});
  const [post_id, setPost_id] = useState("");
  const [post_photor, setPost_photor] = useState("");
  const [post_views, setPost_views] = useState("");
  const [post_writer, setPost_writer] = useState("");
  const [post_profile_img, setPost_profile_img] = useState("");
  let [com, setCom] = useState("");
  const allPost = useSelector(state => state.board.data);

  const onSetData = () => {
    // 해당 카테고리에 게시글이 한개일 경우
    // if(allPost.length == 1){
    //   onSetDataFrame(0);
    // }
    // 여러개일 경우
    for(let i=0; i < allPost.length; i++){
      if(i == allPost.length){
        break;
      }
      if(allPost[i].post_id == postId){
        onSetDataFrame(i);
      };
    }
  };
  const onSetDataFrame = (i) => {

    setPost_date(allPost[i].post_date);
    setPost_id(allPost[i].post_id);

    setPost_views(allPost[i].post_views);
    setPost_writer(allPost[i].post_writer);
    setPost_profile_img(allPost[i].post_profile_img);
  };
  // firestore에서 사진 받아오기
  const onLoadImg = () => {
    // 게시글에 사진이 하나일 경우
    // if(trip.length == 1){
    //   onSetImg(0);
    //   return;
    // }
    // 사진이 여러개일 경우
    for(let i=0; i < trip.length; i++){
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
      setPost_photor(downloadDynURL);
      // setPost_photor((downloadDynURL)=>{
      //   onAddImg(downloadDynURL);
      // })
    }).catch(function(error) {});
  };

  // useEffect
  useEffect(()=>{
    onSetData();
    //onLoadImg();
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
          <PostSlider postImages={post_photo} />
          <S.Profile>
            <img src={profile} alt="프로필 이미지입니다"></img>
            <p>Park HyunJeong</p> {/* post_writer로 검색?*/}
            <span>15min</span>
          </S.Profile>
          <S.Title>{post_title}</S.Title>
          <S.Content>{post_content}</S.Content>
          <S.Like>
            <span>♥{post_like}</span>
            {likePost ?
            <i onClick={onLikeToggle} className="fas fa-thumbs-up"></i> :
            <i onClick={onLikeToggle} className="far fa-thumbs-up"></i>}
          </S.Like>
          {/*<Comment profile={profile} postId={postId}/>*/}
          {/*comment는 잠시 보류*/}
        </ul>
      </S.Contents>
    </S.Container>
  )
}

export default Post;