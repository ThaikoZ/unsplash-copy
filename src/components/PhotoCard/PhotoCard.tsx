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
import { downloadPhoto } from "../../utils/photos";

interface Props {
  photo: PhotoType;
}
interface PhotoCardContext {
  photo: PhotoType;
  handleDownload: () => void;
}

// Context
const PhotoCardContext = createContext<PhotoCardContext | undefined>(undefined);

// Hook
const usePhotoCard = () => {
  const context = useContext(PhotoCardContext);
  if (!context)
    throw new Error("usePhotoCard must be used within an PhotoCardProvider");
  return context;
};

// Main Component
const PhotoCard = ({ photo }: Props) => {
  const handleDownload = () => {
    downloadPhoto(photo.urls.full, photo.user.username);
  };

  return (
    <PhotoCardContext.Provider value={{ photo, handleDownload }}>
      <StyledPhotoCard>
        <SmallScreenComponent>
          <Header limit={40} />
        </SmallScreenComponent>
        <Img src={photo.urls.small} alt={photo.alt_description} />
        <SmallScreenComponent>
          <Footer>
            <UtilsButtons />
            <Flex>
              <Button primary="true" onClick={handleDownload}>
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

const Header = ({
  limit,
  titleColor,
}: {
  limit: number;
  titleColor?: string;
}) => {
  const { photo } = usePhotoCard();
  const title = shortener(photo.user.username, limit);
  const subtitle = shortener(photo.description || "", limit);

  return (
    <StyledHeader>
      <Avatar src={photo.user.profile_image.medium} />
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
  const { handleDownload } = usePhotoCard();

  return (
    <StyledOverlay>
      <AbsoluteContainer right="1rem" top="1rem">
        <UtilsButtons />
      </AbsoluteContainer>
      <AbsoluteContainer bottom="0.25rem" width="calc(100% - 1rem)">
        <Flex align="center">
          <Header limit={25} titleColor="white" />
          <Button onClick={handleDownload}>
            <ArrowDownIcon />
          </Button>
        </Flex>
      </AbsoluteContainer>
      <Blackout />
    </StyledOverlay>
  );
};

export default PhotoCard;
