import React from "react";
import ToDoContextProvider from "./contexts/ToDoContext";

import "./App.css";
import GlobalStyle from "./globalStyle";

import Header from "./components/header/Header";
import ToDosAreas from "./components/toDoArea/ToDosAreas";
import Actions from "./components/actions/Actions";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ToDoContextProvider>
        <ToDosAreas />
        <Actions />
      </ToDoContextProvider>
    </>
  );
}

export default App;
