import React, { useEffect, useState, useContext } from "react";

import { ToDoContext } from "../../contexts/ToDoContext";

import ToDoItem from "../toDoItem/ToDoItem";

import { AreaInput, AreaButton, AreaOptions } from "./styles";

const ToDosAreas = () => {
  const { todos } = useContext(ToDoContext);

  const [selectedArea, setSelectedArea] = useState({
    all: true,
    pending: false,
    complete: false,
  });

  const defineArea = (event) => {
    let newObject = {
      all: true,
      pending: false,
      complete: false,
    };

    if (event) {
      Object.keys(newObject).forEach((property) => {
        property === event.target.id
          ? (newObject[property] = true)
          : (newObject[property] = false);
      });
    }

    setSelectedArea(newObject);
  };

  useEffect(() => defineArea(), []);

  return (
    <>
      <AreaOptions>
        <AreaInput
          id="all"
          type="radio"
          name="area"
          checked={selectedArea.all}
          onChange={(e) => defineArea(e)}
        />
        <AreaButton htmlFor="all">All</AreaButton>
        <AreaInput
          id="pending"
          type="radio"
          name="area"
          checked={selectedArea.pending}
          onChange={(e) => defineArea(e)}
        />
        <AreaButton htmlFor="pending">Pending</AreaButton>
        <AreaInput
          id="complete"
          type="radio"
          name="area"
          checked={selectedArea.complete}
          onChange={(e) => defineArea(e)}
        />
        <AreaButton htmlFor="complete">Complete</AreaButton>
      </AreaOptions>
      <section>
        {selectedArea.all &&
          todos.map(({ id, text, complete }) => (
            <ToDoItem key={id} id={id} text={text} complete={complete} />
          ))}
        {selectedArea.pending &&
          todos
            .filter(({ complete }) => !complete)
            .map(({ id, text, complete }) => (
              <ToDoItem key={id} id={id} text={text} complete={complete} />
            ))}
        {selectedArea.complete &&
          todos
            .filter(({ complete }) => complete)
            .map(({ id, text, complete }) => (
              <ToDoItem key={id} id={id} text={text} complete={complete} />
            ))}
      </section>
    </>
  );
};

export default ToDosAreas;
