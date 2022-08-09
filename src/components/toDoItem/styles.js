import styled from "styled-components";

export const ToDoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
  width: 100%;
  padding: 0.5rem;
  border-radius: 0.75rem;
  background-color: #424242;
  color: #fafafa;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.25rem;
    left: 0.625rem;
    width: calc(100% - 1.25rem);
    height: 0.5rem;
    background-color: rgba(97, 97, 97, 0.5);
    filter: blur(0.25rem);
    z-index: -1;
  }

  & + & {
    margin-top: 1rem;
  }

  &:hover > div {
    pointer-events: auto;
    opacity: 1;
  }

  &:hover > div > span {
    opacity: 1;
    transform: translateY(0);
  }

  @media screen and (min-width: 48rem) {
    padding: 0.375rem 0.5rem;
  }
`;

export const ToDoInput = styled.input`
  display: none;

  &:checked + label {
    border-color: #4ad66d;
  }

  &:checked + label .icon {
    opacity: 1;
    transform: scale(1);
  }
`;

export const ToDoLabel = styled.label`
  display: grid;
  place-items: center;
  min-width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid #fafafa;
  align-self: flex-start;
  cursor: pointer;
  transition: border 0.15s ease-out;

  & .icon {
    color: #4ad66d;
    opacity: 0;
    transform: scale(0.8);
    transition: all 0.2s ease-out;
  }

  @media screen and (min-width: 48rem) {
    margin-top: 0.125rem;
  }
`;

export const ToDoText = styled.p`
  font-size: 0.75rem;
  color: #fafafa;

  @media screen and (min-width: 48rem) {
    font-size: 0.9375rem;
  }
`;

export const ToDoBlur = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  max-width: 6rem;
  height: 100%;
  background-image: linear-gradient(90deg, rgba(66, 66, 66, 0.15), #212121);
  opacity: 0;
  pointer-events: none;

  transition: opacity 0.2s ease-in;
`;

export const ToDoDeleteBox = styled.span`
  display: grid;
  place-items: center;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  border: 1px solid #ef6f6c;
  margin-right: 0.5rem;
  color: #ef6f6c;
  font-size: 0.875rem;
  opacity: 0;
  transform: translateY(0.25rem);
  transition: opacity 0.2s 0.2s ease-out, transform 0.2s 0.2s ease-out;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    width: 1.5rem;
    height: 1.5rem;
    font-size: 1rem;
  }
`;
