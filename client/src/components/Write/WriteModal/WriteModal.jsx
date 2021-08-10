import { useRef, useState } from "react";
import * as S from "./WriteModal.style";

export default function WriteModal({ visible, isVisible }) {
  const [post, setPost] = useState("");
  const [religion, setReligion] = useState("");
  const postRef = useRef();
  const onChange = (e) => {
    const { value, name } = e.target;
    if (name === "textarea") {
      setPost(value);
    } else if (name === "religion") {
      setReligion(value);
    }
  };
  const onSubmit = async (e) => {
    e.preventEvennt();
  };
  return (
    <>
      <S.Overlay visible={visible} onClick={isVisible} />
      <S.Container visible={visible}>
        <p>name</p>
        <p>{post}</p>
        <p>{religion}</p>
        <form onSubmit={onSubmit}>
          <textarea name="textarea" ref={postRef} onChange={onChange} />
          <input name="religion" type="text" onChange={onChange} />
          <button>submit</button>
        </form>
      </S.Container>
    </>
  );
}
