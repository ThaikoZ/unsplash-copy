import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";
import { Route } from "../routes/search/$query";

const SearchPage = () => {
  const { query } = Route.useParams();
  // TODO: Get href params

  return (
    <Container>
      {/* TODO: Show Header */}
      <p>{query}</p>
      {/* TODO: Show tags */}
      <PhotoGrid searchQuery={query} />
    </Container>
  );
};

export default SearchPage;
