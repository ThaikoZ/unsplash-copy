import { Photo as PhotoType } from "../types/Photo";
import styled from "styled-components";
import { shortener } from "../utils/string";
import Avatar from "./Avatar";
import Flex from "./Flex";
import {
  HeartFilledIcon,
  LockOpen2Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { device } from "../styles/breakpoints";

interface Props {
  photo: PhotoType;
}

const StyledPhotoCard = styled.div``;

const Img = styled.img`
  width: 100%;
  cursor: zoom-in;
`;

const Header = styled.header`
  display: none;
  padding: 0.75rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  height: 2.25rem;

  @media ${device.md} {
    display: flex;
  }
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

const Footer = styled.div`
  display: none;
  justify-content: space-between;
  padding: 0.4rem 0.75rem;
  gap: 0.5rem;
  align-items: center;
  height: 2.25rem;

  @media ${device.md} {
    display: flex;
  }
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  background-color: ${(props) =>
    props.primary ? "black" : "rgb(253, 253, 253)"};
  border: 1px solid rgb(203, 203, 203);
  border-radius: 6px;
  padding: 0.45rem 0.8rem;
  height: 100%;
  font-size: 0.95rem;
  color: ${(props) => (props.primary ? "white" : "rgb(118, 118, 118)")};
  font-weight: 700;
  letter-spacing: -0.5px;
  cursor: pointer;
  transition: background-color 0.1s ease-in, color 0.1s ease-out,
    border-color 0.1s ease-out;

  &:hover {
    background-color: ${(props) =>
      props.primary ? "rgb(25, 25, 25)" : "white"};
    color: ${(props) => (props.primary ? "white" : "rgb(0, 0, 0)")};
    border-color: ${(props) =>
      props.primary ? "rgb(203, 203, 203)" : "rgb(0, 0, 0)"};
  }
`;

const PhotoCard = ({ photo }: Props) => {
  const title = shortener(photo.title, 40);
  const subtitle = shortener(photo.title, 40);

  return (
    <StyledPhotoCard>
      <Header>
        <Avatar src={photo.link} />
        <Flex direction="column">
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </Flex>
      </Header>
      <Img src={photo.link} />
      <Footer>
        <Flex gap={3}>
          <Button>
            <HeartFilledIcon />
          </Button>
          <Button>
            <PlusIcon />
          </Button>
        </Flex>
        <Flex>
          <Button primary>
            <LockOpen2Icon /> Download
          </Button>
        </Flex>
      </Footer>
    </StyledPhotoCard>
  );
};

export default PhotoCard;
