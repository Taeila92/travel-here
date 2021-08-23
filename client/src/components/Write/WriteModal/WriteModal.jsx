import { useEffect, useRef, useState } from 'react';
import * as S from './WriteModal.style';
import { dbService, storageService } from 'firebase.js';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router';

export default function WriteModal({ visible, isVisible, userObj }) {
  const [post, setPost] = useState('');
  const [title, setTitle] = useState('');
  const [region, setRegion] = useState('');
  const [attachment, setAttachment] = useState([]);
  const postRef = useRef();
  const titleRef = useRef();
  const history = useHistory();
  console.log(userObj);

  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === 'textarea') {
      setPost(value);
    } else if (name === 'region') {
      setRegion(value);
    } else if (name === 'title') {
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
          'data_url'
        );
        attachmentUrl.push(await response.ref.getDownloadURL());
      }
    }
    const ID = userObj.uid;
    await dbService.collection('post').doc(ID).set({
      post_title: title,
      post_content: post,
      post_writer: userObj.displayName,
      post_date: Date.now(),
      post_id: ID,
      post_photo: attachmentUrl,
      post_profile_img: userObj.photoURL,
      post_region: region,
      post_view: 0,
      post_like: 0,
    });
    setPost('');
    setTitle('');
    setRegion('');
    setAttachment([]);
    isVisible();
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
            <img src={userObj.user_image} alt="" />
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
                <img key={i} src={atta} width="70px" height="70px" alt="" />
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
