import { useEffect, useRef, useState } from "react";
import * as S from "./WriteModal.style";
import { dbService, storageService } from "firebase.js";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router";
import firebase from "firebase";



export default function WriteModal({ visible, isVisible, userObj, location }) {
  const [post, setPost] = useState("");
  const [title, setTitle] = useState("");
  const [region, setRegion] = useState("");
  const [attachment, setAttachment] = useState([]);
  const postRef = useRef();
  const titleRef = useRef();
  const history = useHistory();

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

    const ID = userObj.uid;
    const uuid = uuidv4();

    // users collection의 user_write_posts에 post_id 추가
    await dbService.collection('users').doc(ID).update({
      user_write_posts: firebase.firestore.FieldValue.arrayUnion(uuid),      
    });


    await dbService.collection('post').doc(uuid).set({
      post_title: title,
      post_content: post,
      post_writer: userObj.name,
      post_uid: userObj.uid,
      post_date: Date.now(),
      post_id: uuid,
      post_photo: attachmentUrl,
      post_profile_img: userObj.user_image,
      post_region: region,
      post_view: 0,
      post_like: 0,
      uid: userObj.uid,
    });
    setPost("");
    setTitle("");
    setRegion("");
    setAttachment([]);
    isVisible();

    history.push({
      pathname: `/categorylist/${region}`,
      state: {uuid},
    });
  };


  useEffect(() => {}, []);
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

  const removeAttachment = (e) => {
    setAttachment((prev, index) => {});
  };


  return (
    <>
      <S.Overlay visible={visible} onClick={isVisible} />
      <S.Container visible={visible}>
        <i onClick={isVisible} className="fas fa-times" />

        {userObj && (
          <S.Wrapper>
            <img src={userObj.user_image} alt=""/>
            <S.Name> {userObj.name}</S.Name>
          </S.Wrapper>
        )}
        <form onSubmit={onSubmit}>
          <input
            name="title"
            type="text"
            ref={titleRef}
            onChange={onChange}
            placeholder="제목을 입력해 주세요."
          />
          <textarea
            name="textarea"
            ref={postRef}
            onChange={onChange}
            placeholder="내용을 입력해주세요."
            rows="10"
          />
          <select name="region" onChange={onChange}>
            <option selected value="">
              지역을 선택해 주세요.
            </option>
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
                <img key={i} src={atta} width="70px" height="70px" alt=""/>
              ))}
          </div>
          <input
            type="button"
            value="이미지 모두 삭제"
            onClick={onClearAttachmentClick}
          />
          <input type="submit" value="등록" />
        </form>
      </S.Container>
    </>
  );
}