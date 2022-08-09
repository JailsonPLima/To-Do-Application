import React, { useState, useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";

import { BiPlus } from "react-icons/bi";

import { AddFormContainer, AddInput, AddButton } from "./styles";

const AddToDoForm = ({ setFormOnMask }) => {
  const [newToDo, setNewToDo] = useState("");

  const { addNewToDo } = useContext(ToDoContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    addNewToDo(newToDo);
    setFormOnMask([false, false]);
  };

  return (
    <AddFormContainer onSubmit={onFormSubmit}>
      <AddInput
        type="text"
        value={newToDo}
        onChange={(e) => setNewToDo(e.target.value)}
      />
      <AddButton type="submit">
        <BiPlus className="icon" />
      </AddButton>
    </AddFormContainer>
  );
};

export default AddToDoForm;
