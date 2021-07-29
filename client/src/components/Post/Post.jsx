import React, { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useSelector } from 'react-redux';
import * as S from "./Post.style";


const Post = ({postId, profile, photo}) => {

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

  const allPost = useSelector(state => state.board.data);
  useSelector(state => console.log(state.board.data));
  useEffect(()=>{
    for(let i=0; allPost.length-1; i++){
      if(i == allPost.length){
        break;
      }
      if(allPost[i].post_id == postId){
        console.log(allPost[i]);
        setPost_content(allPost[i].post_content);
        setPost_date(allPost[i].post_date);
        setPost_id(allPost[i].post_id);
        setPost_like(allPost[i].post_like);
        setPost_photo(allPost[i].post_photo);
        setPost_religion(allPost[i].post_religion);
        setPost_title(allPost[i].post_title);
        setPost_views(allPost[i].post_views);
        setPost_writer(allPost[i].post_writer);
        setPost_profile_img(allPost[i].post_profile_img);
      };
    }
  },[])
  const images = useRef();
  let [post_likeNum, setPost_likeNum] = useState(false);
  let [isMouseDown, setIsMouseDown] = useState(false);

  const onMouseDown = (e) => {

  }

  const onMouseUp = (e) => {
    
  }

  const onMouseMove = (e) => {
    
  }

  const onMouseLeave = (e) => {
    
  }

  return (
    <S.Container>
      <S.Content>
        <ul>
          <S.Header>
            <span>
              <span>영국</span>
              <p>#{post_religion}</p>
            </span>
            <i class="fas fa-times"></i>
          </S.Header>
          <S.Images
            ref={images}
            onMouseDown={e=>onMouseDown(e)}
            onMouseUp={e=>onMouseUp(e)}
            onMouseMove={e=>onMouseMove(e)}
            onMouseLeave={e=>onMouseLeave(e)}
          >
            <img src={photo} alt="여행사진 이미지입니다"></img>
            <img></img>
            <img></img>
            <img></img>
          </S.Images>
          <S.Profile>
            <img src={profile} alt="프로필 이미지입니다"></img>
            <p>Park HyunJeong</p>
            <span>15min</span>
          </S.Profile>
          <S.Title>{post_content}</S.Title>
          <S.Like>
            <span>27 Likes</span>
            {post_likeNum ?
            <i class="fas fa-thumbs-up"></i> :
            <i class="far fa-thumbs-up"></i>}
          </S.Like>
          <S.Comment>
            <textarea placeholder="댓글을 입력해주세요"></textarea>
            <div>
              <img></img>
              <p>재밌었겠다</p>
            </div>
            <div>
              <img></img>
              <p>신났겠다</p>
            </div>
            <div>
              <img></img>
              <p>맛있었겠다</p>
            </div>
            <div>
              <img></img>
              <p>나도 가고싶다</p>
            </div>
            <div>
              <img></img>
              <p>이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다
              이것은 길이가 긴 댓글이다. 기이이이이이이이이이이이이이이이이이이일다</p>
            </div>
          </S.Comment>
        </ul>
      </S.Content>
    </S.Container>
  )
}

export default Post;