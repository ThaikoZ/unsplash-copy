import styled from "styled-components";

interface Props {
  src: string;
}

const StyledAvatar = styled.img`
  height: 100%;
  width: 100%;
  border-radius: 100%;
`;
const AvatarContainer = styled.div`
  height: 100%;
  width: 2.25rem;
`;

const Avatar = ({ src }: Props) => {
  return (
    <AvatarContainer>
      <StyledAvatar src={src} />
    </AvatarContainer>
  );
};

export default Avatar;
