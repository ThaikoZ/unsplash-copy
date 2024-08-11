import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid";

const photos = [
  { title: "photo1" },
  { title: "photo2" },
  { title: "photo3" },
  { title: "photo4" },
  { title: "photo5" },
  { title: "photo6" },
  { title: "photo7" },
  { title: "photo8" },
];

function App() {
  return (
    <Container>
      <PhotoGrid photos={photos} />
    </Container>
  );
}

export default App;
