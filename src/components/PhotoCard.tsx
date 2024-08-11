import { Photo as PhotoType } from "../types/Photo";
import styled from "styled-components";
import { shortener } from "../utils/string";
import Avatar from "./Avatar";
interface Props {
  photo: PhotoType;
}

const StyledPhotoCard = styled.div``;

const Img = styled.img`
  width: 100%;
`;

const Header = styled.header`
  display: flex;
  padding: 0.75rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  height: 2.25rem;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-items: center;
`;

const Title = styled.div`
  font-weight: 600;
  line-height: 1rem;
  font-size: 0.95rem;
`;
const Subtitle = styled.div`
  font-weight: 500;
  color: gray;
  font-size: 0.8rem;
`;

const PhotoCard = ({ photo }: Props) => {
  const title = shortener(photo.title, 40);
  const subtitle = shortener(photo.title, 40);

  return (
    <StyledPhotoCard>
      <Header>
        <Avatar src={photo.link} />
        <TextContainer>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </TextContainer>
      </Header>
      <Img src={photo.link} />
      <div>Download Bard</div>
    </StyledPhotoCard>
  );
};

export default PhotoCard;
