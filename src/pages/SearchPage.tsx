import Container from "../components/layout/Container";
import PhotoGrid from "../components/PhotoGrid";

const SearchPage = () => {
  // TODO: Get href params

  return (
    <Container>
      {/* TODO: Show Header */}
      {/* TODO: Show tags */}
      <PhotoGrid searchQuery={"luxury"} />
    </Container>
  );
};

export default SearchPage;
