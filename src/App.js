import React from "react";
import ToDoContextProvider from "./contexts/ToDoContext";

import "./App.css";
import GlobalStyle, { AppContainer } from "./styles";

import Header from "./components/header/Header";
import ToDosAreas from "./components/toDoArea/ToDosAreas";
import Actions from "./components/actions/Actions";

function App() {
  return (
    <AppContainer>
      <GlobalStyle />
      <Header />
      <ToDoContextProvider>
        <ToDosAreas />
        <Actions />
      </ToDoContextProvider>
    </AppContainer>
  );
}

export default App;
