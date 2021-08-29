import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostCard from "components/PostCard/PostCard";
import { fetchPostList } from "store/modules/board";
import { viewMiddleware } from 'store/modules/view';
import * as S from "./Board.style";

const Board = ({ match, location }) => {

  let [viewRender, setViewRender] = useState(false);

  // let { post_view } = useSelector((state)=>state.board.data);

  // redux에서 데이터 fetch한 결과(성공하면 data에 배열로 담김)
  const { postList, error, loading, view } = useSelector((state) => ({
    postList: state.board.data,
    loading: state.board.loading,
    error: state.board.error,
    view: state.view.view,
  }));
  const dispatch = useDispatch();

  // categorylist에서 region에 따라서 놓여져있고 클릭하면 그에 맞게 검색
  useEffect(()=>{
    dispatch(fetchPostList(match.params.region));
  },[dispatch, match.params.region])

  // let arr;
  // arr.push(view);
  // useEffect(()=>{
    // postList.map((post)=>{
    //   dispatch(viewMiddleware(post.post_id, 'init'));
    // })
    // for(let i=0; i<postList.length; i++){
    //   arr.push(postList[i].post_view);
    // }
    // console.log(arr);
    // console.log(postList);
  // },[view]);

  if (loading) return <div>로딩중</div>;
  if (error) return <div>Error</div>;
  if (!postList) return null;

  return (
    <S.Container postlistLength={postList.length}>
      { 
        postList.map((post)=>{
          return <PostCard
            key={post.post_id}
            postData={post}
            location={location}
            view={view}
            viewRender={viewRender}
            setViewRender={setViewRender}/>
        })
      }
    </S.Container>
  );
};

export default Board;
