import { Photo as PhotoType } from "../types/Photo";
import styled from "styled-components";

interface Props {
  photo: PhotoType;
}

const StyledPhoto = styled.div`
  background-color: gray;
  height: 300px;
`;

const Photo = ({ photo }: Props) => {
  return <StyledPhoto>{photo.title}</StyledPhoto>;
};

export default Photo;
