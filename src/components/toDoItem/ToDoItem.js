import React, { memo, useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";

import {
  ToDoBox,
  ToDoInput,
  ToDoLabel,
  ToDoText,
  ToDoBlur,
  ToDoDeleteBox,
} from "./styles";

import { BiCheck, BiTrash } from "react-icons/bi";

const ToDoItem = ({ id, text, complete }) => {
  const { defineToDoCheck, deleteToDo } = useContext(ToDoContext);

  return (
    <ToDoBox>
      <ToDoInput
        id={`todo-${id}`}
        type="checkbox"
        checked={complete}
        onChange={() => defineToDoCheck(id)}
      />
      <ToDoLabel htmlFor={`todo-${id}`}>
        <BiCheck className="icon" />
      </ToDoLabel>
      <ToDoText>{text}</ToDoText>
      <ToDoBlur>
        <ToDoDeleteBox onClick={() => deleteToDo(id)}>
          <BiTrash className="icon" />
        </ToDoDeleteBox>
      </ToDoBlur>
    </ToDoBox>
  );
};

export default memo(ToDoItem);
