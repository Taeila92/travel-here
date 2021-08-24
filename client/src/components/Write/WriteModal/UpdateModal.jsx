import { useRef, useState } from "react";
import * as S from "./WriteModal.style";
import { dbService, storageService } from "firebase.js";
import { v4 as uuidv4 } from "uuid";
import firebase from "firebase";

export default function UpdateModal({ visible, isVisible, postData, login }) {
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
  console.log(postData);
  const [post, setPost] = useState(post_content);
  const [title, setTitle] = useState(post_title);
  const [region, setRegion] = useState(post_region);
  const [attachment, setAttachment] = useState(post_photo);
  // const postRef = useRef();
  // const titleRef = useRef();
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
    e.preventDefault();
    let attachmentUrl = [];
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

    const ID = login.uid;

    // users collection의 user_write_posts에 post_id 추가
    await dbService
      .collection("users")
      .doc(ID)
      .update({
        user_write_posts: firebase.firestore.FieldValue.arrayUnion(post_id),
      });

    await dbService.collection("post").doc(post_id).set({
      post_title: title,
      post_content: post,
      post_writer,
      post_uid,
      post_date,
      post_id,
      post_photo: attachmentUrl,
      post_profile_img,
      post_region: region,
      post_view,
      post_like,
      post_update: true,
    });
    setPost("");
    setTitle("");
    setRegion("");
    setAttachment([]);
    isVisible();
  };

  const onFileChange = (e) => {
    const { files } = e.target;
    let file;
    let fileURLs = [];

    for (let i = 0; i < files.length; i++) {
      file = files[i];
      let reader = new FileReader();
      reader.onload = () => {
        fileURLs[i] = reader.result;
        setAttachment([...fileURLs]);
      };
      reader.readAsDataURL(file);
    }
    console.log(attachment);
  };

  const attach = () => {
    console.log(attachment);
  };
  const onClearAttachmentClick = () => {
    setAttachment(null);
  };

  return (
    <>
      <S.Overlay visible={visible} onClick={isVisible} />
      <S.Container visible={visible}>
        <i onClick={isVisible} className="fas fa-times" />

        {login && (
          <S.Wrapper>
            <img src={login.photoURL} alt="" />
            <S.Name> {login.displayName}</S.Name>
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
          <div>
            {attachment &&
              attachment.map((atta, i) => (
                <img key={i} src={atta} width="70px" height="70px" alt="" />
              ))}
          </div>
          <input
            type="button"
            value="이미지 모두 삭제"
            onClick={onClearAttachmentClick}
          />
          <input type="submit" value="수정" />
          <button onClick={attach}>asdfdfas</button>
        </form>
      </S.Container>
    </>
  );
}
