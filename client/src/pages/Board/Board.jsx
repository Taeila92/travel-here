import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import PostCard from 'components/PostCard/PostCard';
import { fetchPostList } from 'store/modules/board';
import * as S from './Board.style'


const Board = ({match, history, location}) => {

  // redux에서 데이터 fetch한 결과(성공하면 data에 배열로 담김)
  const {postList, error, loading} = useSelector(state => ({
    postList : state.board.data,
    loading : state.board.loading,
    error : state.board.error
  }))
  const dispatch = useDispatch();

  // categorylist에서 religion에 따라서 놓여져있고 클릭하면 그에 맞게 검색
  useEffect(()=>{
    dispatch(fetchPostList(match.params.religion));
  },[dispatch, match.params.religion])

  if (loading) return <div>로딩중</div>
  if (error) return <div>Error</div>
  if (!postList) return null

  return (
    <S.Container>
      { 
        postList.map((post)=>{
          return <PostCard key={post.post_id} postData={post}/>
        })
      }
    </S.Container>
  )
}

export default Board
