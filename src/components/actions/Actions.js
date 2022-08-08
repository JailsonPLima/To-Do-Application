import React from "react";

import {
  ActionsContainter,
  AddNewButton,
  DeleteAllButton,
  Mask,
} from "./styles";

import { BiPlus, BiTrash } from "react-icons/bi";

const Actions = () => {
  return (
    <>
      <Mask></Mask>
      <ActionsContainter>
        <AddNewButton>
          <BiPlus className="icon" />
        </AddNewButton>
        <DeleteAllButton>
          <BiTrash className="icon" />
        </DeleteAllButton>
      </ActionsContainter>
    </>
  );
};

export default Actions;
