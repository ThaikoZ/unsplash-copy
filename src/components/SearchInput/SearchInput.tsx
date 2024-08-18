import { Ref } from "react";
import {
  SearchInputContainer,
  StyledSearchInput,
  SubmitButton,
} from "./SearchInput.styles";
import { IoSearch } from "react-icons/io5";
import { TbZoomScan } from "react-icons/tb";

interface Props {
  inputRef: Ref<HTMLInputElement>;
  onSubmit: (event: React.FormEvent) => void;
}

const SearchInput = ({ inputRef, onSubmit }: Props) => {
  return (
    <form onSubmit={onSubmit}>
      <SearchInputContainer>
        <SubmitButton $justify="end" type="submit" $padding="0 0.1rem 0 0.4rem">
          <IoSearch />
        </SubmitButton>
        <StyledSearchInput
          ref={inputRef}
          type="text"
          placeholder="Search photos and illustrations"
        />
        <SubmitButton $justify="center" $padding="0 0.8rem">
          <TbZoomScan size={32} />
        </SubmitButton>
      </SearchInputContainer>
    </form>
  );
};

export default SearchInput;
