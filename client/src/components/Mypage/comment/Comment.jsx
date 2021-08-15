import React from 'react';
import * as S from "./Comment.style";

const Comment = ({com, user}) => {
    return (
        <li>{com}</li>
    )
}

export default Comment;