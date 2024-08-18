import { styled } from "styled-components";

const StyledAdBanner = styled.div`
  display: block;
  visibility: visible;
  min-width: calc(650px);
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 1050px) {
    display: none;
    visibility: hidden;
  }
`;

const AdBanner = () => {
  return <StyledAdBanner>Ad banner preview</StyledAdBanner>;
};

export default AdBanner;
