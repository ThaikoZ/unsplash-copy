import { styled } from "styled-components";

export const StyledSearchInput = styled.input`
  padding: 0 3rem 0 0.7rem;
  margin: 0;
  font-weight: 500;
  color: rgb(17, 17, 17);
  background-color: rgba(0, 0, 0, 0);
  outline: none;
  border: none;
  height: 100%;
  width: 100%;
  font-size: 0.85rem;

  &::placeholder {
    color: rgb(118, 118, 118);
  }

  &::after {
    position: absolute;
    right: 0;
    content: "x";
  }
`;

export const SearchInputContainer = styled.div`
  overflow: hidden;
  display: flex;
  height: 50px;
  width: 100%;
  background-color: rgb(238, 238, 238);
  color: rgb(118, 118, 118);
  fill: rgb(118, 118, 118);
  border-radius: 8px;
  transition: background-color 0.15s ease-in;
  border: 1px solid rgb(238, 238, 238);

  &:hover {
    background-color: rgb(231, 231, 231);
  }

  &:focus-within {
    background-color: rgb(255, 255, 255);
  }
`;

export const SubmitButton = styled.button<{
  $justify: string;
  $padding: string;
}>`
  display: flex;
  justify-content: ${(props) => props.$justify};
  align-items: center;
  height: 100%;
  width: 50px;
  padding: ${(props) => props.$padding};
  color: rgb(118, 118, 118);
  font-size: 1.25rem;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    color: rgb(17, 17, 17);
  }
`;
