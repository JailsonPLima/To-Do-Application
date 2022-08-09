import React, { useState } from "react";

import {
  ActionsContainter,
  AddNewButton,
  DeleteAllButton,
  Mask,
} from "./styles";

import { BiPlus, BiTrash } from "react-icons/bi";

import AddToDoForm from "../forms/AddToDoForm";
import DelAllToDosForm from "../forms/DelAllToDosForm";

const Actions = () => {
  const [formOnMask, setFormOnMask] = useState([false, false]);

  const clickOnMask = (event) => {
    const elementId = event.target.id;
    if (elementId && elementId === "mask") {
      setFormOnMask([false, false]);
    }
  };

  return (
    <>
      {(formOnMask[0] || formOnMask[1]) && (
        <Mask id="mask" onClick={(e) => clickOnMask(e)}>
          {formOnMask[0] && <AddToDoForm setFormOnMask={setFormOnMask} />}
          {formOnMask[1] && <DelAllToDosForm setFormOnMask={setFormOnMask} />}
        </Mask>
      )}
      <ActionsContainter>
        <AddNewButton onClick={() => setFormOnMask([true, false])}>
          <BiPlus className="icon" />
        </AddNewButton>
        <DeleteAllButton onClick={() => setFormOnMask([false, true])}>
          <BiTrash className="icon" />
        </DeleteAllButton>
      </ActionsContainter>
    </>
  );
};

export default Actions;
