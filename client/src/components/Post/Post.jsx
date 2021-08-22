import React, { useState, useRef, useEffect } from "react";
import * as S from "./Post.style";
import Comment from "components/Comment/Comment";
import PostSlider from "./PostSlider/PostSlider";
import { useDispatch, useSelector } from "react-redux";
import { likeMiddleware } from "store/modules/postLike";
import { userMiddleware } from "store/modules/userLike";
import { bookmarkMiddleware } from "store/modules/bookmark";
import firebase from "firebase";

const Post = ({ postData, profile, setIsPostModalOpened, like, bookmark }) => {
  const {
    post_region,
    post_title,
    post_content,
    post_photo,
    post_id,
    post_writer,
    post_profile_img,
  } = postData;

  const auth = firebase.auth();

  const dispatch = useDispatch();

  // 좋아요 숫자 받아오기
  let { likeNum } = useSelector((state) => state.postLike);

  // 내가 해당 게시글에 좋아요을 했나 안 했나 표시
  let [likePost, setLikePost] = useState(like.includes(post_id));
  // 내가 해당 게시글에 찜을 했나 안 했나 표시
  let [bookmarkPost, setBookmarkPost] = useState(bookmark.includes(post_id));

  const comment = useRef();

  // 좋아요 아이콘 토글 -> 할 때마다 firestore에 저장 되어야 함
  const onLikeToggle = async () => {
    auth.onAuthStateChanged((user) => {
      if (likePost) {
        setLikePost(false);
        dispatch(likeMiddleware(post_id, "noneLike"));
        dispatch(userMiddleware(user.email, post_id, "noneLike"));
      } else {
        setLikePost(true);
        dispatch(likeMiddleware(post_id, "like"));
        dispatch(userMiddleware(user.email, post_id, "like"));
      }
    });
  };

  // 찜 아이콘 토글
  const onBookmarkToggle = () => {
    auth.onAuthStateChanged((user) => {
      if (bookmarkPost) {
        setBookmarkPost(false);
        dispatch(bookmarkMiddleware(user.email, post_id, "noneBookmark"));
      } else {
        setBookmarkPost(true);
        dispatch(bookmarkMiddleware(user.email, post_id, "bookmark"));
      }
    });
  };

  // 모달창 닫기
  const onHideModal = () => {
    setIsPostModalOpened(false);
  };

  // useEffect(() => {
  //   dispatch(likeMiddleware(post_id, 'init'));
  // }, []);

  return (
    <S.Container>
      <S.Contents>
        <ul ref={comment}>
          <S.Header>
            <span>
              <span>영국</span>
              <p>#{post_region}</p>
            </span>
            <i onClick={onHideModal} className="fas fa-times"></i>
          </S.Header>
          <PostSlider postImages={post_photo} />
          <S.Profile>
            <img src={post_profile_img} alt="프로필 이미지입니다"></img>
            <p>{post_writer}</p> {/* post_writer로 검색?*/}
            <span>15min</span>
          </S.Profile>
          <S.Title>{post_title}</S.Title>
          <S.Content>{post_content}</S.Content>
          <S.Like>
            <span>
              {likePost ? (
                <i onClick={onLikeToggle} className="fas fa-heart"></i>
              ) : (
                <i onClick={onLikeToggle} className="far fa-heart"></i>
              )}
              {/* {likeRender === 'init' ? <span>{post_like}</span> : <span>{likeNum}</span>}<p>명</p>이 좋아합니다 */}
              <span>{likeNum}</span>
              <p>명</p>이 좋아합니다
            </span>
            {bookmarkPost ? (
              <i onClick={onBookmarkToggle} className="fas fa-bookmark"></i>
            ) : (
              <i onClick={onBookmarkToggle} className="far fa-bookmark"></i>
            )}
          </S.Like>
          <Comment profile={profile} postId={post_id} />
        </ul>
      </S.Contents>
    </S.Container>
  );
};

export default Post;
