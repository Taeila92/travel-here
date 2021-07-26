import React, { useState, useEffect } from 'react'
import { dbService } from "firebase.js";
import Post from 'components/PostCard/Post';
import * as S from './Board.style'

const Board = ({match, history, location}) => {
  //console.log(match) // 상위 라우팅에서 넣어준 :religion이 match.params로 들어옵니다
  const [ postData , setPostData ] = useState([]);
  // !!!redux로 수정해주기!!!
  
  // !!!utils 함수로 빼주기!!!
  useEffect(()=>{
    const getData = async () => {
      const response = await dbService.collection("post").get();
      response.forEach(doc => {
        setPostData(prev => [doc.data(), ...prev])
        console.log(doc.data())
      })
    }
    getData();

  },[])

  // !!!redux에 loading 넣어주기!!!
  return (
    <S.Container>
      {!(postData.length) ? (
        console.log("loading")
      ) : (
        postData.map((post)=>{
          return <Post key={post.post_id} data={post}/>
        })
      )}
    </S.Container>
  )
}

export default Board
