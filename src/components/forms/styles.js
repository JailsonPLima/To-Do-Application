import styled from "styled-components";

// Add form styles

export const AddFormContainer = styled.form`
  display: flex;
  height: 2.25rem;
  width: 100%;
  max-width: 31.25rem;
`;

export const AddInput = styled.input`
  height: 100%;
  width: 100%;
  line-height: 2.25rem;
  padding-left: 0.75rem;
  border: 1px solid #fafafa;
  border-right: none;
  border-radius: 0.75rem 0 0 0.75rem;
  background-color: #212121;
  outline: none;
  font-size: 0.875rem;
  color: #fafafa;
`;

export const AddButton = styled.button`
  display: grid;
  place-items: center;
  min-width: 3rem;
  height: 100%;
  border: none;
  border-radius: 0 0.75rem 0.75rem 0;
  background-color: #4ad66d;
  color: #fafafa;
  outline: none;
  cursor: pointer;
  transition: background 0.15s ease-in;

  &:disabled {
    background-color: #9e9e9e;
  }

  .icon {
    font-size: 1.75rem;
  }
`;

// Delete all form styles

export const DelFormContainer = styled(AddFormContainer)`
  width: 100%;
  max-width: 15rem;
  flex-direction: column;
  gap: 0.75rem;
  height: auto;
  padding: 0.5rem 0.5rem 0.75rem;
  background-color: #212121;
  border-radius: 0.5rem;

  h2 {
    font-weight: normal;
    text-align: center;
    font-size: 0.875rem;
    color: #fafafa;
  }

  @media screen and (min-width: 48rem) {
    max-width: 20rem;
    gap: 1rem;
    padding: 0.5rem 0.5rem 1rem;

    h2 {
      font-size: 1rem;
    }
  }
`;

export const DelFormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
`;

export const DelFormButton = styled.button`
  width: 2.5rem;
  height: 1.5rem;
  border: none;
  border-radius: 0.5rem;
  background-color: ${(props) => (props.primary ? "#ef6f6c" : "transparent")};
  font-size: 0.875rem;
  color: #fafafa;
  cursor: pointer;

  @media screen and (min-width: 48rem) {
    font-size: 1rem;
    width: 3rem;
    height: 1.75rem;
  }
`;
