import { styled } from "styled-components";
import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";
import { searchRoute } from "../routes";
import { Link } from "@tanstack/react-router";

const Header = styled.h1`
  font-size: 1.75rem;
  margin-top: 3rem;
  font-weight: 700;
  padding: 0 1.25rem;

  &::first-letter {
    text-transform: capitalize;
  }
`;

const TagContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  padding: 0 1.25rem;
  margin: 1.5rem 1.25rem 2rem 0;
  overflow: hidden;
  flex-wrap: nowrap;
`;

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  font-weight: 600;
  font-size: 0.9rem;
  height: 25px;
  border-radius: 7px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  color: rgba(0, 0, 0, 0.55);
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    border-color: rgba(0, 0, 0, 0.8);
    color: rgba(0, 0, 0, 0.8);
  }

  &::first-letter {
    text-transform: capitalize;
  }
`;

const tags = [
  "Luxury",
  "Porshe",
  "Apple",
  "Poland",
  "Beach",
  "Deep house",
  "Horses",
  "El Cubano",
  "USA",
];

const SearchPage = () => {
  const { query } = searchRoute.useParams();

  return (
    <Container>
      <Header>{query}</Header>
      <TagContainer>
        {tags.map((tag) => (
          <StyledLink to="/search/$query" params={{ query: tag }}>
            {tag}
          </StyledLink>
        ))}
      </TagContainer>
      <PhotoGrid searchQuery={query} />
    </Container>
  );
};

export default SearchPage;
