import React, { useRef } from "react";
import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";
import Flex from "../components/layout/Flex";
import { styled } from "styled-components";
import AdBanner from "../components/AdBanner";
import SearchInput from "../components/SearchInput";
import { routeTree } from "../routes";

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: end;
  width: 100%;
  height: 275px;
`;

const Header = styled.h1`
  font-size: 2.5rem;
  line-height: 0rem;
  margin-bottom: 1rem;
  font-weight: 700;
`;

const Paragraph = styled.p`
  font-size: 1.15rem;
  font-weight: medium;
  margin-bottom: 1rem;
`;

const HomePage = () => {
  const navigate = routeTree.useNavigate();
  const initialQuery = "luxury apartament";
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const input = searchInputRef.current;
    if (input && input.value) {
      const query = input.value;
      navigate({ to: "/search/$query", params: { query } });
    }
  };

  return (
    <Container>
      <Flex direction="row" padding="2rem 1.25rem" gap={24}>
        <Box>
          <Header>Unsplash</Header>
          <Paragraph>
            The internet’s source for visuals. <br />
            Powered by creators everywhere
          </Paragraph>
          <SearchInput inputRef={searchInputRef} onSubmit={handleSubmit} />
        </Box>
        <AdBanner />
      </Flex>
      <PhotoGrid searchQuery={initialQuery} />
    </Container>
  );
};

export default HomePage;
