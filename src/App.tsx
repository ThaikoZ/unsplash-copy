import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid";
import photos from "./data/photos.json";

function App() {
  return (
    <Container>
      <PhotoGrid photos={photos} />
    </Container>
  );
}

export default App;
