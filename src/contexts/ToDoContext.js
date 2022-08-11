import React, { useState, createContext, useEffect } from "react";

export const ToDoContext = createContext();

const ToDoContextProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Make a to do", complete: false },
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
    if (Boolean(todos.length)) {
      const idsArr = todos.map((todo) => todo.id);
      const highestId = Math.max(...idsArr);

      return highestId + 1;
    } else {
      return 1;
    }
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

  const updateToDos = () => {
    const stringifiedToDos = JSON.stringify(todos);
    localStorage.setItem("tasks", stringifiedToDos);
  };

  useEffect(() => {
    if (Storage) {
      // For the first acess
      if (!localStorage.getItem("tasks")) {
        updateToDos();
      }

      const toDosArr = JSON.parse(localStorage.getItem("tasks"));
      setTodos(toDosArr);
    } else {
      alert("Your browser does not support using this applications");
    }
  }, []);

  useEffect(() => updateToDos(), [todos]);

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
