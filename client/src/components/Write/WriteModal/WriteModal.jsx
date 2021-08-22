import { useRef, useState } from "react";
import * as S from "./WriteModal.style";
import { dbService, storageService } from "firebase.js";
import firebase from "firebase";
import { v4 as uuidv4 } from "uuid";

export default function WriteModal({ visible, isVisible, userObj }) {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [attachment, setAttachment] = useState([]);

  const postRef = useRef();
  const titleRef = useRef();
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
          .child(`${userObj.uid}/${uuidv4()}`);
        const response = await attachmentRef.putString(
          attachment[i],
          "data_url"
        );
        attachmentUrl.push(await response.ref.getDownloadURL());
      }
    }

    // let ID = Date.now().toString();
    let ID = userObj.uid;

    // users collection의 user_write_posts에 post_id 추가
    await dbService.collection('users').doc(ID).update({
      user_write_posts: firebase.firestore.FieldValue.arrayUnion(ID),      
    });

    await dbService.collection('post').doc(ID).set({
      post_title: title,
      post_content: post,
      post_writer: userObj.displayName,
      post_uid: userObj.uid,
      post_date: Date.now(),
      post_id: ID,
      post_photo: attachmentUrl,
      post_profile_img: userObj.photoURL,
      post_region: region,
      post_view: 0,
      post_like: 0,
    });
    setPost("");
    setTitle("");
    setRegion("");
    setAttachment([]);
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
  };
  const onClearAttachmentClick = () => {
    setAttachment(null);
  };
  return (
    <>
      <S.Overlay visible={visible} onClick={isVisible} />
      <S.Container visible={visible}>
        {userObj && <p>작성자 : {userObj.displayName}</p>}
        <p>{post}</p>
        <p>{region}</p>
        <form onSubmit={onSubmit}>
          제목 :
          <input name="title" type="text" ref={titleRef} onChange={onChange} />
          내용 : <textarea name="textarea" ref={postRef} onChange={onChange} />
          지역 : <input name="region" type="text" onChange={onChange} />
          <input
            multiple
            accept="image/*"
            type="file"
            onChange={onFileChange}
            name="fileNames[]"
          />
          {attachment && (
            <div>
              {attachment.map((atta, i) => (
                <img key={i} src={atta} width="50px" height="50px" />
              ))}
            </div>
          )}
          <button onClick={onClearAttachmentClick}>모두 삭제</button>
          <input type="submit" value="등록" />
        </form>
      </S.Container>
    </>
  );
}
