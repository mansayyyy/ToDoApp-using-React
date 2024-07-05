import React from "react";
import styled from "styled-components";

const ListItem = styled.li`
  list-style-type: none;
  border: 2px solid rgb(161, 158, 158);
  color: white;
  padding: 3px;
  padding-left: 5px;
  border-radius: 5px;
  width: 100%;
  height: 30px;
  display: flex;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;

const Icons = styled.span`
  position: absolute;
  right: 10px;
`;

const Icon = styled.i`
  margin: 4px;
  font-size: large;
  cursor: pointer;
  transition: 0.1s;
  &:hover {
    transform: scale(1.2);
  }
`;

const IconDelete = styled(Icon)`
  &:hover {
    color: red;
  }
`;

const TodoList = (props) => {
  return (
    <ListItem>
      {props.item}
      <Icons>
        <IconDelete
          className="fa-solid fa-trash"
          onClick={(e) => {
            props.deleteItem(props.index);
          }}
        ></IconDelete>
      </Icons>
    </ListItem>
  );
};

export default TodoList;
