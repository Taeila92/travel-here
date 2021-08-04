import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PostCard from 'components/PostCard/PostCard';
import { fetchPostList } from 'store/modules/board';

import * as S from './Board.style'


const Board = ({match, history, location}) => {

  const {postList,error, loading} = useSelector(state => ({
    postList : state.board.data,
    loading : state.board.loading,
    error : state.board.error
  }))
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchPostList(match.params.religion));
  },[dispatch, match.params.religion])

  // !!!lazy loading 도입!!!
  if (loading) return <div>로딩중</div>
  if (error) return <div>Error</div>
  if (!postList) return null
  
  return (
    <S.Container>
      { 
        postList.map((post)=>{
          return <PostCard key={post.post_id} data={post} test={postList}/>
        })
      }

    </S.Container>
  )
}

export default Board
