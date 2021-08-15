import React from 'react';
import * as S from "./Bookmark.style";

const Bookmark = ({bookmark, user}) => {
    return (
        <li>{bookmark}</li>
    )
}

export default Bookmark;