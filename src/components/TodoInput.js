import React, { useState } from "react";
import styled from "styled-components";

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`;

const InputBox = styled.input`
  margin-left: 10px;
  width: 70%;
  height: 40px;
  border-radius: 14px;
  border: 1px solid black;
  padding-left: 10px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.3);
  outline: none;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  font-size: large;
`;

const AddButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #316fc1;
  color: white;
  font-weight: bolder;
  font-size: larger;
  margin-left: 10px;
  cursor: pointer;
  box-shadow: 0px 5px 10px rgba(11, 10, 10, 0.3);
  transition: 0.3s;
  &:active {
    box-shadow: none;
  }
`;

function TodoInput(props) {
  const [inputText, setInputText] = useState("");
  const handleEnterPress = (e) => {
    if (e.keyCode === 13) {
      props.addList(inputText);
      setInputText("");
    }
  };
  return (
    <InputContainer>
      <InputBox
        type="text"
        placeholder="Enter your To-Do"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value);
        }}
        onKeyDown={handleEnterPress}
      />
      <AddButton
        onClick={() => {
          props.addList(inputText);
          setInputText("");
        }}
      >
        +
      </AddButton>
    </InputContainer>
  );
}

export default TodoInput;
