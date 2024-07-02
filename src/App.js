import React, { useState } from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #333;
`;

const CenterContainer = styled.div`
  height: 500px;
  width: 350px;
`;

const AppHeading = styled.h1`
  padding: 4px;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  text-transform: uppercase;
`;

function App() {
  const [listTodo, setListTodo] = useState([]);

  let addList = (inputText) => {
    if (inputText !== "") {
      setListTodo([...listTodo, inputText]);
    }
  };

  const deleteListItem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setListTodo([...newListTodo]);
  };

  return (
    <MainContainer>
      <CenterContainer>
        <TodoInput addList={addList} />
        <AppHeading>TO-DO</AppHeading>
        <hr />
        {listTodo.map((listItem, i) => {
          return (
            <TodoList
              key={i}
              index={i}
              item={listItem}
              deleteItem={deleteListItem}
            />
          );
        })}
      </CenterContainer>
    </MainContainer>
  );
}

export default App;
