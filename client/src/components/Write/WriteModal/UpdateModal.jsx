import { useState } from "react";
import * as S from "./WriteModal.style";
import { dbService, storageService } from "firebase.js";
import { v4 as uuidv4 } from "uuid";
import Loading from "../../Loading/Loading";
export default function UpdateModal({
  visible,
  isVisible,
  postData,
  login,
  isHeight,
}) {
  const {
    post_date,
    post_region,
    post_title,
    post_content,
    post_photo,
    post_id,
    post_writer,
    post_uid,
    post_view,
    post_like,
    post_profile_img,
  } = postData;
  const [post, setPost] = useState(post_content);
  const [title, setTitle] = useState(post_title);
  const [region, setRegion] = useState(post_region);
  const [load, setLoad] = useState(false);

  const [attachment, setAttachment] = useState([]);

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "textarea") {
      setPost(value);
    } else if (name === "region") {
      setRegion(value);
    } else if (name === "title") {
      setTitle(value);
    }
  };

  const onSubmit = async (e) => {
    setLoad(true);
    e.preventDefault();
    let attachmentUrl = post_photo;
    if (attachment) {
      for (let i = 0; i < attachment.length; i++) {
        const attachmentRef = storageService
          .ref()
          .child(`${login.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(
          attachment[i],
          "data_url"
        );
        attachmentUrl.push(await response.ref.getDownloadURL());
      }
    }

    const updateData = {
      post_title: title,
      post_content: post,
      post_writer: post_writer,
      post_uid: post_uid,
      post_date: post_date,
      post_id: post_id,
      post_photo: attachmentUrl,
      post_profile_img: post_profile_img,
      post_region: region,
      post_view: post_view,
      post_like: post_like,
      post_update: true,
    };

    await dbService.collection("post").doc(post_id).set(updateData);
    setPost("");
    setTitle("");
    setRegion("");
    setAttachment([]);
    isVisible();
    setLoad(false);
  };

  const onFileChange = (e) => {
    const { files } = e.target;
    let file;
    let fileURLs = [];

    for (let i = 0; i < files.length; i++) {
      file = files[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs.push(reader.result);
        setAttachment([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
  };
  const onClearAttachmentClick = () => {
    setAttachment(null);
  };

  return (
    <>
      <S.Overlay visible={visible} onClick={isVisible} />
      <S.Container visible={visible} isHeight={isHeight}>
        <i onClick={isVisible} className="fas fa-times" />

        {login && (
          <S.Wrapper>
            {login.photoURL ? (
              <>
                <img src={login.photoURL} alt="프로필 이미지입니다"></img>
                <S.Name> {login.displayName}</S.Name>
              </>
            ) : (
              <>
                <i className="fas fa-user-circle"></i>
                <S.Name photo={Boolean(login.photoURL)}>
                  {login.displayName}
                </S.Name>
              </>
            )}
          </S.Wrapper>
        )}
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            value={title}
            // ref={titleRef}
            onChange={onChange}
            placeholder="제목을 입력해 주세요."
          />
          <textarea
            name="textarea"
            value={post}
            // ref={postRef}
            onChange={onChange}
            placeholder="내용을 입력해주세요."
            rows="10"
          />
          <select name="region" value={region} onChange={onChange}>
            <option value="">지역을 선택해 주세요.</option>
            <option value="asia">Asia</option>
            <option value="north_america">North America</option>
            <option value="south_america">South America</option>
            <option value="africa">Africa</option>
            <option value="europe">Europe</option>
            <option value="australia">Australia</option>
            <option value="antarctica">Antarctica</option>
          </select>
          <input
            multiple
            accept="image/*"
            type="file"
            onChange={onFileChange}
            name="fileNames[]"
          />
          <S.ImgWrapper>
            {post_photo &&
              post_photo.map((atta, i) => (
                <img key={i} src={atta} width="70px" height="70px" alt="" />
              ))}
            {attachment &&
              attachment.map((atta, i) => (
                <img key={i} src={atta} width="70px" height="70px" alt="" />
              ))}
          </S.ImgWrapper>
          <input
            type="button"
            value="이미지 모두 삭제"
            onClick={onClearAttachmentClick}
          />
          {load ? (
            <Loading width="30" height="30" />
          ) : (
            <input type="submit" value="수정" />
          )}
        </form>
      </S.Container>
    </>
  );
}
