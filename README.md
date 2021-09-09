<style type='text/css'>
  .table {
    text-align: center;
  }
  .title {
    background: #eceff1;
  }
  .left {
    width: 50%;
  }
  .right {
    width: 40%;
  }
  .phj {
    background: #f1f8e9;
  }
  .khs {
    background: #e5ffff;
  }
  .jsw {
    background: #fffffb;
  }
  .isg {
    background: #fff1ff;    
  }
</style>

# Travel-here

✈ travel-here는 전 세계의 여행후기글을 볼 수 있는 여행후기 플랫폼입니다.

<br>

## 목차

1. [팀원 소개](#1)
2. [기술 스택](#2)
3. [프로젝트 설치 및 실행 방법](#3)
4. [폴더 디렉토리](#4)
5. [프로젝트 기능 설명](#5)
6. [버그](#6)
7. [아쉬운 점 / 개선할 점](#7)

<br>

## 1. 팀원 <a id="1"></a>

- 전상우(팀장)
- 김현수
- 박현정
- 임상기

<br>

## 2. 기술 스택 <a id="2"></a>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=black">
<img src="https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/Redux_Thunk-a88bd6?style=for-the-badge&logo=Redux&logoColor=black">
<img src="https://img.shields.io/badge/styled_Components-DB7093?style=for-the-badge&logo=styled-components&logoColor=black">
<img src="https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=Firebase&logoColor=black">

<br>
<br>

## 3. 프로젝트 설치 및 실행 방법 <a id="3"></a>

```js
$ npm update
$ yarn install
$ yarn start
```

<br>

## 4. 폴더 디렉토리 <a id="4"></a>

```
📦public
┗ 📜index.html
📦src
┣ 📂assets
┃ ┗ 📂images
┃ ┃ ┣ 📜background.jpeg
┃ ┃ ┣ 📜blur.png
┃ ┃ ┗ 📜logo.png
┣ 📂components
┃ ┣ 📂Category
┃ ┃ ┣ 📜Category.jsx
┃ ┃ ┣ 📜Category.style.js
┃ ┃ ┗ 📜CategorySkeleton.jsx
┃ ┣ 📂Comment
┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┣ 📜Comment.style.js
┃ ┃ ┣ 📜CommentList.jsx
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂GreetingCard
┃ ┃ ┣ 📜GreetingCard.jsx
┃ ┃ ┗ 📜GreetingCard.style.js
┃ ┣ 📂Header
┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┗ 📜Header.style.js
┃ ┣ 📂Loading
┃ ┃ ┗ 📜Loading.jsx
┃ ┣ 📂LoginHelp
┃ ┃ ┣ 📜LoginHelp.jsx
┃ ┃ ┗ 📜LoginHelp.style.js
┃ ┣ 📂LoginModal
┃ ┃ ┣ 📂footer
┃ ┃ ┃ ┣ 📜LoginFooter.jsx
┃ ┃ ┃ ┗ 📜LoginFooter.style.js
┃ ┃ ┣ 📂header
┃ ┃ ┃ ┣ 📜LoginHeader.jsx
┃ ┃ ┃ ┗ 📜LoginHeader.style.js
┃ ┃ ┣ 📜LoginModalOpen.jsx
┃ ┃ ┗ 📜LoginModalOpen.style.js
┃ ┣ 📂Logo
┃ ┃ ┣ 📜Logo.jsx
┃ ┃ ┗ 📜Logo.style.js
┃ ┣ 📂Mypage
┃ ┃ ┣ 📂bookmark
┃ ┃ ┃ ┣ 📜Bookmark.jsx
┃ ┃ ┃ ┗ 📜Bookmark.style.js
┃ ┃ ┣ 📂comment
┃ ┃ ┃ ┣ 📜Comment.jsx
┃ ┃ ┃ ┗ 📜Comment.style.js
┃ ┃ ┣ 📂info
┃ ┃ ┃ ┣ 📜Info.jsx
┃ ┃ ┃ ┗ 📜Info.style.js
┃ ┃ ┣ 📂Password
┃ ┃ ┃ ┣ 📜Password.jsx
┃ ┃ ┃ ┗ 📜Password.style.js
┃ ┃ ┣ 📂post
┃ ┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┃ ┗ 📜Post.style.js
┃ ┃ ┣ 📜Mypage.jsx
┃ ┃ ┣ 📜Mypage.style.js
┃ ┃ ┗ 📜styleConstatns.js
┃ ┣ 📂NavBar
┃ ┃ ┣ 📜NavBar.jsx
┃ ┃ ┗ 📜NavBar.style.js
┃ ┣ 📂NavLinks
┃ ┃ ┣ 📜NavLinks.jsx
┃ ┃ ┗ 📜NavLinks.style.js
┃ ┣ 📂Post
┃ ┃ ┣ 📂PostSlider
┃ ┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┃ ┣ 📜PostSlider.jsx
┃ ┃ ┃ ┗ 📜PostSlider.style.js
┃ ┃ ┣ 📜NoneMember.jsx
┃ ┃ ┣ 📜Post.jsx
┃ ┃ ┣ 📜Post.style.js
┃ ┃ ┗ 📜styleConstants.js
┃ ┣ 📂PostCard
┃ ┃ ┣ 📜ContentPlaceholder.js
┃ ┃ ┣ 📜PostCard.jsx
┃ ┃ ┗ 📜PostCard.style.js
┃ ┗ 📂Write
┃ ┃ ┣ 📂WriteBtn
┃ ┃ ┃ ┣ 📜WriteBtn.jsx
┃ ┃ ┃ ┗ 📜WriteBtn.style.js
┃ ┃ ┗ 📂WriteModal
┃ ┃ ┃ ┣ 📜UpdateModal.jsx
┃ ┃ ┃ ┣ 📜WriteModal.jsx
┃ ┃ ┃ ┗ 📜WriteModal.style.js
┣ 📂hooks
┃ ┗ 📜useAuth.js
┣ 📂pages
┃ ┣ 📂Board
┃ ┃ ┣ 📜Board.jsx
┃ ┃ ┗ 📜Board.style.js
┃ ┣ 📜CategoryList.jsx
┃ ┣ 📜Home.jsx
┃ ┣ 📜Login.jsx
┃ ┣ 📜LoginFind.jsx
┃ ┣ 📜MyPage.jsx
┃ ┣ 📜NotFound.jsx
┃ ┣ 📜NotFound.style.js
┃ ┗ 📜Write.jsx
┣ 📂store
┃ ┣ 📂apis
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜post.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┗ 📜userLike.js
┃ ┣ 📂modules
┃ ┃ ┣ 📜board.js
┃ ┃ ┣ 📜bookmark.js
┃ ┃ ┣ 📜category.js
┃ ┃ ┣ 📜comment.js
┃ ┃ ┣ 📜delete.js
┃ ┃ ┣ 📜login.js
┃ ┃ ┣ 📜mypageBookmark.js
┃ ┃ ┣ 📜mypageComment.js
┃ ┃ ┣ 📜mypagePost.js
┃ ┃ ┣ 📜nav.js
┃ ┃ ┣ 📜postLike.js
┃ ┃ ┣ 📜user.js
┃ ┃ ┣ 📜userLike.js
┃ ┃ ┗ 📜view.js
┃ ┗ 📜index.js
┣ 📂styles
┃ ┣ 📜Background.js
┃ ┗ 📜GlobalStyle.js
┣ 📂utils
┃ ┗ 📜getDate.js
┣ 📜App.js
┣ 📜auth_service.js
┣ 📜firebase.js
┣ 📜history.js
┗ 📜index.js
```

<br>

## 5. 프로젝트 기능 설명 <a id="5"></a>

<hr />

### 게시판 (Board)

<details>
  <summary>상세보기</summary>

#### 지역별 게시글 모아보기

![1](https://user-images.githubusercontent.com/68575268/132719758-2d850047-15f5-4ca7-aa17-906db95c3ff2.gif)

#### 보고 싶은 게시글 선택하여 살펴보기

![Animation](https://user-images.githubusercontent.com/68575268/132719768-569010ba-cf96-4f05-a61d-9e9cbdbde56c.gif)

</details>

<hr />

### 게시글 (Post)

<details>
  <summary>상세보기</summary>

#### 댓글, 좋아요, 북마크, 조회수 기능

![댓글 좋아요 북마크](https://user-images.githubusercontent.com/68575268/132719775-c3c39141-d7b4-4378-a15e-af001d826d67.gif)

#### 본인일 경우에만 수정, 삭제가 가능합니다.

![userCheck](https://user-images.githubusercontent.com/76847993/132731934-c1f3b034-435e-4598-a0c3-bcc31b1a0107.gif)

#### 게시글 수정, 삭제 기능

![게시글수정삭제](https://user-images.githubusercontent.com/76847993/132734801-c0b5a8ff-a8e9-48ea-85b5-ec7d9c40de0f.gif)

#### 댓글, 수정 삭제 기능

![댓글수정삭제!](https://user-images.githubusercontent.com/76847993/132733887-c9871c4c-8577-4604-b872-4fb3ed654c85.gif)

</details>

<hr />

### 마이페이지

<details>
  <summary>상세보기</summary>

#### 전체적인 디자인입니다. 왼쪽창에서 같은 목록, 또는 오른쪽 창에서 < 아이콘을 누르면 창이 닫힙니다.

![total_design](https://user-images.githubusercontent.com/76847993/132723722-3d5cf309-8c99-49fb-8d27-c646b82e1710.gif)

#### 닉네임, 프로필사진 수정 기능입니다. <br />프로필사진은 기본사진이 아닐 때 수정할 경우 '기본사진으로 변경' 버튼이 추가됩니다.

![change2!](https://user-images.githubusercontent.com/76847993/132722552-1ce85841-1b46-4d2b-88a0-cde033609535.gif)

#### 수정사항은 게시글쓰기, 게시글, 댓글에서 모두 바로 반영됩니다.

![즉시반영!](https://user-images.githubusercontent.com/76847993/132729254-6f2a93d3-24e0-4417-b5bb-00ccd9b8d19c.gif)

#### 내가 쓴 글, 댓글, 찜 목록을 클릭하면 해당 게시글로 이동합니다.

![move](https://user-images.githubusercontent.com/76847993/132723763-782ae28d-3753-4055-ba72-ef37a1d46860.gif)

#### 비밀번호 변경 시 현재 비밀번호로 재인증을 한 후 맞게 입력한 경우에만 변경이 가능합니다.

![password](https://user-images.githubusercontent.com/76847993/132725017-0a5abc0e-ecdc-4182-8765-101f6fed00ec.gif)

</details>

<hr />

### 비회원

<details>
  <summary>상세보기</summary>

#### 로그인하지않고 게시글을 클릭하면 다음과같은 창이 뜹니다.

![비회원](https://user-images.githubusercontent.com/76847993/132726677-781f23d7-49e4-4a4c-a93d-2878abeb101d.gif)

#### 또한 navBar에 mypage, 우측하단 게시글쓰기 버튼이 뜨지 않습니다.

</details>

<hr />

### 404 not Found

<details>
  <summary>상세보기</summary>

#### 404오류 화면입니다.

![notFound](https://user-images.githubusercontent.com/76847993/132727674-32ab58a5-332e-40a9-9131-af9b2c9b0750.gif)

</details>

<br>

## 6. 버그 <a id="6"></a>

##### 1. 마이페이지 - 내 정보 - 닉네임 변경이 간헐적으로 안되는 경우

<br>

## 7. 아쉬운 점 / 개선할 점 <a id="7"></a>

<!--
| 팀원   | 아쉬운 점                                                                                                                                                      | 개선할 점                                             |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------- |
| 박현정 | 역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.                                                                                     | 기능별로 역할 분배를 해야겠다고 느꼈습니다.           |
|        | 리덕스의 action이 너무 많아진 느낌입니다.                                                                                                                      | 중복되는 부분을 깔끔히 정리해야겠습니다.              |
|        | 데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.                                                               | 데이터 정의를 보다 정확하게 해야겠습니다.             |
|        | firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.                                                                                          | 상태 정리를 명확하게 해야겠습니다.                    |
|        | 코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다. | 서로간의 코드를 적극적으로 검토하고 리뷰해야겠습니다. |
|        | 개발 외 힘들었던 점 : 디자인 시안의 부재.. 디자이너의 필요성을 느꼈습니다.                                                                                     |                                                       | -->

<table class="table">
  <tr>
    <td class="title">팀원</td>
    <td class="title left">아쉬운 점</td>
    <td class="title right">개선할 점</td>
  </tr>
  <tr>
    <td rowspan="6" class="phj">박현정</td>
    <td>역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.</td>
    <td>기능별로 역할 분배를 해야겠다고 느꼈습니다.</td>
  </tr>
  <tr>
    <td>리덕스의 action이 너무 많아진 느낌입니다.</td>
    <td>중복되는 부분을 깔끔히 정리해야겠습니다.</td>
  </tr>
  <tr>
    <td>데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.</td>
    <td>데이터 정의를 보다 정확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.	</td>
    <td>상태 정리를 명확하게 해야겠습니다.</td>
  </tr>
  <tr>
    <td>코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다.</td>
    <td>서로간의 코드를 적극적으로 검토하고 리뷰해야겠습니다.</td>
  </tr>
  <tr>
    <td colspan="2">*** 개발 외 힘들었던 점 *** <br /> 디자인 시안의 부재.. 디자이너의 필요성을 느꼈습니다.</td>
  </tr>
  <tr>
    <td class="khs">김현수</td>
    <td>아쉬운 점</td>
    <td>개선할 점</td>
  </tr>
   <tr>
    <td class="jsw">전상우</td>
    <td>아쉬운 점</td>
    <td>개선할 점</td>
  </tr>
   <tr>
    <td class="isg">임상기</td>
    <td>아쉬운 점</td>
    <td>개선할 점</td>
  </tr>
</table>

<!-- - ## 현정

아쉽 : 역할 분배를 페이지별로 했더니 특정 사람에게 너무 많은 역할이 주어졌습니다.
개선 : 기능별로 역할 분배를 해야겠다고 느꼈습니다.

아쉽 : 리덕스의 action이 너무 많아진 느낌입니다.
개선 : 중복되는 부분을 깔끔히 정리해야겠습니다.

아쉽 : 데이터를 정의할 때 어떤 type의 값을 넣을건지를 정확히 정하지 않아 나중에 수정할 일이 많았습니다.
개선 : 데이터 정의를 보다 정확하게 해야겠습니다.

아쉽 : firebase와 redux상태간의 정확한 정리가 없어 헷갈리는 일이 많았습니다.
개선 : 상태 정리를 명확하게 해야겠습니다.

아쉽 : 코드리뷰가 적극적으로 이루어지지 않았던 것 같습니다. 제가 짠 코드가 괜찮은 코드인지 아닌지를 판단하기 어려웠고, 팀원이 짠 코드를 제대로 파악하기 힘들었습니다.
개선 : 서로간의 코드를 적극적으로 검토하고 리뷰해야겠습니다.

개발 외 힘들었던 점 : 디자인 시안의 부재.. 디자이너의 필요성을 느꼈습니다. -->
