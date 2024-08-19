import { styled } from "styled-components";
import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";
import { searchRoute } from "../routes";

const Header = styled.h1`
  font-size: 1.75rem;
  margin-top: 3rem;
  font-weight: 700;
  padding: 0 1.25rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const SearchPage = () => {
  const { query } = searchRoute.useParams();
  // TODO: Get href params

  return (
    <Container>
      {/* TODO: Show Header */}
      <Header>{query}</Header>
      {/* TODO: Show tags */}
      <PhotoGrid searchQuery={query} />
    </Container>
  );
};

export default SearchPage;
