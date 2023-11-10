import styled from "styled-components";
import Button from "@/components/common/button/Button.jsx";
import BUTTON_TYPE from "@/constants/BUTTON_TYPE.js";
import { useRef } from "react";
import handleEnterKeyDown from "@/utils/handleEnterKeyDown.js";

const Styled = {
  Wrapper: styled.div`
    margin-bottom: 2rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  `,
  Input: styled.input`
    margin-right: 1rem;
    padding: 0.5rem 0.25rem;
    width: calc(100% - 2rem);
    font-size: 1rem;
    background-color: transparent;
    border: none;
    border-bottom: 1px solid ${({ theme }) => theme.color.inactive};

    transition: border 0.25s ease-in-out;

    &:focus {
      border-bottom: 1px solid ${({ theme }) => theme.color.mainRed};
    }
  `,
};

function CommentInput() {
  const inputRef = useRef();

  const postComment = () => {
    try {
      console.log(inputRef.current.value);
      inputRef.current.value = "";
    } catch (e) {}
  };

  return (
    <Styled.Wrapper>
      <Styled.Input
        ref={inputRef}
        type="text"
        onKeyDown={(event) => handleEnterKeyDown(event, postComment)}
      />
      <Button
        onClick={postComment}
        styleType={BUTTON_TYPE.PRIMARY}
        style={{ right: "1rem", top: "0.5rem", borderRadius: "9999px" }}
      >
        댓글
      </Button>
    </Styled.Wrapper>
  );
}

export default CommentInput;
