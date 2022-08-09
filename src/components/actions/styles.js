import styled from "styled-components";

export const ActionsContainter = styled.div`
  display: flex;
  gap: 1rem;
  position: fixed;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
`;

export const ActionButton = styled.button`
  display: grid;
  place-items: center;
  position: relative;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  border: 0.125rem solid #9e9e9e;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    bottom: -0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 2rem;
    height: 0.75rem;
    background-color: rgba(158, 158, 158, 0.5);
    filter: blur(0.5rem);
    z-index: -1;
  }
`;

export const AddNewButton = styled(ActionButton)`
  border-color: #4ad66d;

  .icon {
    font-size: 2rem;
    color: #4ad664;
  }

  &::before {
    background-color: rgba(74, 214, 109, 0.5);
  }
`;

export const DeleteAllButton = styled(ActionButton)`
  border-color: #ef6f6c;

  .icon {
    font-size: 1.75rem;
    color: #ef6f6c;
  }

  &::before {
    background-color: rgba(239, 111, 108, 0.5);
  }
`;

export const Mask = styled.div`
  display: grid;
  place-items: center;
  position: fixed;
  inset: 0;
  background-color: rgba(66, 66, 66, 0.2);
  backdrop-filter: blur(0.25rem);
  z-index: 9;
`;
