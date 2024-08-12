import { Photo as PhotoType } from "../../types/Photo";
import { shortener } from "../../utils/string";
import Avatar from "../Avatar";
import Flex from "../Flex";
import {
  ArrowDownIcon,
  HeartFilledIcon,
  LockOpen2Icon,
  PlusIcon,
} from "@radix-ui/react-icons";
import {
  Blackout,
  Button,
  Footer,
  StyledHeader,
  Img,
  StyledOverlay,
  StyledPhotoCard,
  Subtitle,
  Title,
  AbsoluteContainer,
  SmallScreenComponent,
} from "./PhotoCard.styles";
import { createContext, useContext } from "react";

interface Props {
  photo: PhotoType;
}

// Context
const PhotoCardContext = createContext<Props | undefined>(undefined);

// Hook
const usePhotoCard = () => {
  const context = useContext(PhotoCardContext);
  if (!context)
    throw new Error("usePhotoCard must be used within an PhotoCardProvider");
  return context;
};

// Main Component
const PhotoCard = ({ photo }: Props) => {
  return (
    <PhotoCardContext.Provider value={{ photo }}>
      <StyledPhotoCard>
        <SmallScreenComponent>
          <Header limit={40} />
        </SmallScreenComponent>
        <Img src={photo.link} alt={photo.title} />
        <SmallScreenComponent>
          <Footer>
            <UtilsButtons />
            <Flex>
              <Button primary>
                <LockOpen2Icon /> Download
              </Button>
            </Flex>
          </Footer>
        </SmallScreenComponent>
        <Overlay />
      </StyledPhotoCard>
    </PhotoCardContext.Provider>
  );
};

interface HeaderProps {
  limit: number;
  titleColor?: string;
}

const Header = ({ limit, titleColor }: HeaderProps) => {
  const { photo } = usePhotoCard();
  const title = shortener(photo.title, limit);
  const subtitle = shortener(photo.subtitle, limit);

  return (
    <StyledHeader>
      <Avatar src={photo.link} />
      <Flex direction="column" align="start">
        <Title color={titleColor}>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </Flex>
    </StyledHeader>
  );
};

const UtilsButtons = () => {
  return (
    <Flex gap={5}>
      <Button>
        <HeartFilledIcon />
      </Button>
      <Button>
        <PlusIcon />
      </Button>
    </Flex>
  );
};

const Overlay = () => {
  return (
    <StyledOverlay>
      <AbsoluteContainer right="1rem" top="1rem">
        <UtilsButtons />
      </AbsoluteContainer>
      <AbsoluteContainer left="1rem" bottom="0.25rem" width="calc(100% - 2rem)">
        <Flex align="center" justify="">
          <Header limit={25} titleColor="white" />
          <Button>
            <ArrowDownIcon />
          </Button>
        </Flex>
      </AbsoluteContainer>
      <Blackout />
    </StyledOverlay>
  );
};

export default PhotoCard;
