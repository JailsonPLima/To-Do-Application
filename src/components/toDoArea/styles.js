import styled from "styled-components";

export const AreaOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0.75rem 0 1rem;
`;

export const AreaInput = styled.input`
  display: none;

  &:checked + label {
    background-color: #616161;
  }
`;

export const AreaButton = styled.label`
  padding: 0.125rem 0.875rem;
  border: 1px solid #616161;
  border-radius: 0.5rem;
  font-family: "Poppins", sans-serif;
  font-size: 0.6875rem;
  color: #fafafa;
  background-color: transparent;
  outline: none;
`;
