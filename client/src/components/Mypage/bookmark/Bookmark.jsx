import React, { useEffect } from 'react';
import * as S from "./Bookmark.style";
import { useDispatch, useSelector } from 'react-redux';
import { mypageBookmarkMiddleware } from 'store/modules/mypageBookmark';
import { useHistory } from 'react-router-dom';


const Bookmark = ({ bookmarks, user }) => {

  const bookmarkDB = useSelector(state => state.mypageBookmark.data);
  const dispatch = useDispatch();

  const history = useHistory();

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
  
  useEffect(()=>{
    for(let i=0; i<bookmarks.length; i++){
      dispatch(mypageBookmarkMiddleware(bookmarks[i]));
    }
  },[]);

  return (
    <>
      {bookmarkDB.map((bm) => {
        return (
          <S.List key={bm.post_id} onClick={()=>onMovePage(bm)}>
            <h1>{bm.post_title}</h1>
            <h2>{bm.post_content}</h2>
          </S.List>
        )
      })}
    </>
  )
}

export default Bookmark;