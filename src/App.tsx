import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid";
import photos from "./data/photos.json";
import { fetchPhotos } from "./services/photoServices";
import { useQuery } from "@tanstack/react-query";

function App() {
  // const {
  //   data: photos,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["photos"],
  //   queryFn: fetchPhotos,
  // });

  // if (isLoading) return <p>Loading photos...</p>;
  // if (error) return <p>Unidentified error has occured.</p>;

  return (
    <Container>
      <PhotoGrid photos={photos!} />
    </Container>
  );
}

export default App;
