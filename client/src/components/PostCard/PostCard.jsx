import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from "react-router-dom";
import { storageService } from 'firebase.js';
import Post from 'components/Post/Post';
import * as S from './PostCard.style';
import { userMiddleware } from 'store/modules/userLike';
import { likeMiddleware } from 'store/modules/postLike';
import { bookmarkMiddleware } from 'store/modules/bookmark';
import { viewMiddleware } from 'store/modules/view';
import { useDispatch, useSelector } from 'react-redux';
import firebase from "firebase";
import qs from 'qs';
import getDate from 'utils/getDate';
import NoneMember from 'components/Post/NoneMember';


const PostCard = ({ postData, location, view }) => {

  const auth = firebase.auth();
  const dispatch = useDispatch();

  let [userCheck, setUserCheck] = useState(false);

  let [likeRender, setLikeRender] = useState('init');

  let [viewRender, setViewRender] = useState(false);

  // // 해당 유저가 좋아요한 post의 post_id 배열(users collection에 담김)
  let likePost = useSelector((state) => state.userLike.data);
  // // 해당 유저가 북마크한 post의 post_id 배열(users collection에 담김)
  let bookmark = useSelector((state) => state.userLike.data);

  // let view = useSelector((state)=>state.view.view);



  // 개별 post
  const { post_id, post_title, post_region, post_view, post_profile_img, post_date } = postData;
  
  // post모달 띄우는 용도
  const [isPostOpened, setIsPostOpened] = useState(false);

  // representative image 지정 후 가져오기
  const repImageName = useRef(`${postData.post_photo[0]}`);
  const [repImage, setRepImage] = useState();

  let history = useHistory();

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true
  });

  const qsID = query.id === post_id;

  const getRepImage = async (repImageName) => {
    await storageService.refFromURL(repImageName).getDownloadURL().then((value)=>{
      setRepImage(value)
    })
  }

  // profile image 가져오기
  const profileImageName = useRef(`${postData.post_profile_img}`);
  const [profileImage, setProfileImage] = useState();

  const getProfileImage = async (profileImageName) => {
      setProfileImage(profileImageName)
  };

  // 모달 띄우기
  const onShowPostModal = (postId) => {
    setIsPostOpened(true);
    setLikeRender('init');
    history.push({
      search: `?id=${postId}`,
      state: {
        like: likePost.user_like_posts,
        bookmark: bookmark.user_bookmark_posts,
        postData,
      }
    });
  };

  const onView = () => {
    dispatch(viewMiddleware(post_id, 'view'));
  }


  const onContainerClick = () => {
    onView();
    onShowPostModal(post_id);
  }

  // Lazy Loading
  const lazyTarget = useRef();
  const [isView, setIsView] = useState(false);

  useEffect(() => {
    let observer;

    if(lazyTarget.current){ 
      observer = new IntersectionObserver((entries)=>{
        entries.forEach((entry)=>{
          if(entry.isIntersecting){ // intersecting 되어 있으면
            observer.unobserve(entry.target) // 1. 화면에서 나갈 때, 다시 발생안시키기 위해 2. element가 들어가야해서 .target 
            getRepImage(repImageName.current)
            getProfileImage(profileImageName.current)
            setIsView(true);
          }
        })
      },{ threshold : 0.3 })
      
      observer.observe(lazyTarget.current)
    } 
    return () => observer && observer.disconnect();
  }, []);

  useEffect(() => {
    if(location.state === undefined){
      return;
    }
    if(location.state.hasOwnProperty('uuid')){
      onShowPostModal(location.state.uuid);
    }
  }, [])

  // 1. 모달창 띄움 --> 2. 모달창 안에서 상태변화 --> 3. 모달창 닫음
  // --> 4. 페이지를 나갔다 다시 들어오거나 새로고침하지 않고 바로 또 모달창 띄움
  // useEffect의 용도 --> 4.할 때 2.에서 한 것이 바로 적용되어있게 하기
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        dispatch(userMiddleware(user.uid, post_id, 'init'));
        dispatch(bookmarkMiddleware(user.uid, post_id, 'init'));
        setUserCheck(user);
      }
    });
    dispatch(likeMiddleware(post_id, 'init'));
    // window.location.reload();
  }, [isPostOpened]);

  useEffect(()=>{
    dispatch(viewMiddleware(post_id, 'init'));
  },[viewRender]);

  return (
    <>
      <S.Container onClick={onContainerClick} id={post_id}>
        <S.Profile>
          <img src={post_profile_img} alt="프로필 사진" />
          <div>        
            <h2>UserName</h2>
            <h5>#{post_region}</h5>
          </div>
          <p>{post_view}</p>
        </S.Profile>
        <S.Content>
          <h2>{post_title}</h2>
          {isView ? (
            <img src={repImage} alt="여행 사진" />
          ) : (
            <S.SkeletonImage ref={lazyTarget}>loading</S.SkeletonImage>
          )}
          {/* 이미지가 로드 안 되었으면 회색 상자로 나오게 하고 싶다.. 그리고 이미지가 로드될때, 아래 창이 안 말려들었으면..*/}
          <div>{getDate(post_date)}</div>
        </S.Content>
      </S.Container>
      {qsID && (userCheck ?
      <Post
        profile={post_profile_img}
        postData={postData}
        isPostOpened={isPostOpened}
        setIsPostOpened={setIsPostOpened}
        setLikeRender={setLikeRender}
        setViewRender={setViewRender}
        viewRender={viewRender}
        postView={view} /> :
      <NoneMember setIsPostOpened={setIsPostOpened}/>
      )}
    </>
  );
};

export default PostCard;
