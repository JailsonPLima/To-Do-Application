import React, { useContext } from "react";
import { ToDoContext } from "../../contexts/ToDoContext";

import { DelFormContainer, DelFormActions, DelFormButton } from "./styles";

const DelAllToDosForm = ({ setFormOnMask }) => {
  const { deleteAllToDos } = useContext(ToDoContext);

  const onFormSubmit = (event) => {
    event.preventDefault();
    deleteAllToDos();
    setFormOnMask([false, false]);
  };

  return (
    <DelFormContainer onSubmit={(e) => onFormSubmit(e)}>
      <h2>Are you sure you want to delete all tasks?</h2>
      <DelFormActions>
        <DelFormButton
          primary
          type="button"
          onClick={() => setFormOnMask([false, false])}
        >
          No
        </DelFormButton>
        <DelFormButton type="submit">Yes</DelFormButton>
      </DelFormActions>
    </DelFormContainer>
  );
};

export default DelAllToDosForm;
