import React from 'react';
import * as S from "./Bookmark.style";
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';


const Bookmark = ({ user }) => {

  const bookmarkDB = useSelector(state => state.mypageBookmark.data);

  const history = useHistory();

  const check = bookmarkDB.length === 0;

  const onMovePage =(post) => {
    history.push({
      pathname: `/categorylist/${post.post_region}`,
      search: `?id=${post.post_id}`,
      state: {
        like: user.user_like_posts,
        bookmark: user.user_bookmark_posts,
        postData: post,
        profile: user.user_image,
      }
    });
  }
  

  return (
    <>
      {!check && bookmarkDB.map((bm) => {
        return (
          <S.List key={bm.post_id} onClick={()=>onMovePage(bm)}>
            <h1>{bm.post_title}</h1>
            <h2>{bm.post_content}</h2>
          </S.List>
        )
      })}
      {check &&
        <h1>daksldfads</h1>
      }
    </>
  )
}

export default Bookmark;