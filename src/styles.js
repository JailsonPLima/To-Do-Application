import styled, { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  body {
    background-color: #212121;
  }
`;

export const AppContainer = styled.section`
  width: min(100% - 2.5rem, 31.25rem);
  margin-inline: auto;
  margin-top: 2rem;
`;
