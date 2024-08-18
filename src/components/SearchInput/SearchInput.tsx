import { Ref } from "react";
import {
  SearchInputContainer,
  StyledSearchInput,
  Button,
  ResetButton,
} from "./SearchInput.styles";
import { IoSearch } from "react-icons/io5";
import { TbZoomScan } from "react-icons/tb";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";

interface Props {
  inputRef: Ref<HTMLInputElement>;
  onSubmit: (event: React.FormEvent) => void;
}

const SearchInput = ({ inputRef, onSubmit }: Props) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value);
  };

  const clearInput = () => {
    setInputValue("");
    if (inputRef && typeof inputRef !== "function") {
      inputRef.current?.focus();
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <SearchInputContainer>
        <Button $justify="end" type="submit" $padding="0 0.1rem 0 0.4rem">
          <IoSearch />
        </Button>
        <StyledSearchInput
          ref={inputRef}
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Search photos and illustrations"
        />
        {inputValue && (
          <ResetButton onClick={clearInput}>
            <IoIosClose size={24} />
          </ResetButton>
        )}
        <Button $justify="center" $padding="0 0.8rem">
          <TbZoomScan size={32} />
        </Button>
      </SearchInputContainer>
    </form>
  );
};

export default SearchInput;
