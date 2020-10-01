import styled from "styled-components";

export const StyledInput = styled.input`
  border-radius: 5px;
  font-size: 1.2em;
  padding: 0.5em 0 0.5em 0.5em;
  border: 1px solid #ccc;
  background-color: #fff;
`;

export const StyledTextarea = styled.textarea`
  border-radius: 5px;
  font-size: 1.2em;
  padding: 0.5em;
  border: 1px solid #ccc;
  background-color: white;
  font-family: inherit;
`;

export const StyledButton = styled.button`
  padding: 0.5em;
  font-size: 1.2em;
  text-transform: uppercase;
  background-color: #0bf;
  color: #fff;
  border: 1px solid #888;
  border-radius: 5px;
  margin-top: 2em;
  cursor: pointer;
  &:hover {
    background-color: #0af;
  }
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 1.1em;
  margin: 0.5em 0;
  position: relative;
`;

export const StyledSection = styled.section`
  width: 100%;
  & > * {
    width: 100%;
    box-sizing: border-box;
  }
`;

export const StyledCameraButton = styled.div`
  background-color: #cdcdcd;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #888;
  border-radius: 5px;
  text-transform: uppercase;
  padding: 1em;
  font-size: 0.8em;
  font-weight: 500;
  cursor: pointer;
  i {
    margin-right: 0.5em;
  }
`;

export const StyledCheckboxWrapper = styled.div`
  padding: 0.2em;
  font-size: 1em;
`;

export const StyledSelect = styled.select`
  border-radius: 5px;
  padding: 0.5em;
  font-size: 1em;
  box-sizing: border-box;
`;
