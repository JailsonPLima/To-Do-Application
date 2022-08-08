import React, { useState, createContext } from "react";

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    {
      id: 0,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      complete: false,
    },
    {
      id: 1,
      text: "Lorem Ipsum 1",
      complete: true,
    },
    {
      id: 2,
      text: "Lorem Ipsum 2",
      complete: false,
    },
  ]);

  const defineToDoCheck = (id) => {
    const newToDosArr = todos.map((todo) => {
      if (todo.id === id) {
        todo.complete = !todo.complete;

        return todo;
      }
      return todo;
    });

    setTodos(newToDosArr);
  };

  const generateNewId = () => {
    const idsArr = todos.map((todo) => todo.id);
    const highestId = Math.max(...idsArr);

    return highestId + 1;
  };

  const addNewToDo = (text) => {
    const newToDo = {
      id: generateNewId(),
      text: text,
      complete: false,
    };

    setTodos([newToDo, ...todos]);
  };

  const deleteToDo = (id) => {
    const newToDosArr = todos.filter((todo) => todo.id !== id);

    setTodos(newToDosArr);
  };

  const deleteAllToDos = () => setTodos([]);

  return (
    <ToDoContext.Provider
      value={{
        todos,
        defineToDoCheck,
        addNewToDo,
        deleteToDo,
        deleteAllToDos,
      }}
    >
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContextProvider;
