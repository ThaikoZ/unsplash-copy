import { styled } from "styled-components";
import { StyledPhotoCard } from "./PhotoCard.styles";

// Create the shimmer animation
const shimmer = `
  @keyframes shimmer {
    0% {
      background-position: -100% 0;
    }
    100% {
      background-position: 100% 0;
    }
  }
`;

const Skeleton = styled(StyledPhotoCard)`
  background-color: rgb(245, 245, 245);
  height: 500px;
  overflow: hidden;
  position: relative;

  background-image: linear-gradient(
    90deg,
    rgb(245, 245, 245) 0%,
    rgba(230, 230, 230, 0.9) 50%,
    rgb(245, 245, 245) 100%
  );
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;

  ${shimmer}
`;

const PhotoCardSkeleton = () => {
  return <Skeleton />;
};

export default PhotoCardSkeleton;
