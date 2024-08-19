import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";
import { searchRoute } from "../routes";

const SearchPage = () => {
  const { query } = searchRoute.useParams();
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
