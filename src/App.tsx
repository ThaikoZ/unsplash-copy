import { useEffect, useState } from "react";
import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid";
import dataPhotos from "./data/photos.json";
import { PhotoList } from "./types/Photo";
// import { getPhotos } from "./api/getPhotos";
import { getPhotos } from "./services/photoServices";

function App() {
  const [photos, setPhotos] = useState<PhotoList>(dataPhotos);

  useEffect(() => {
    // getPhotos()
    //   .then((res) => setPhotos(res.data))
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <Container>
      <PhotoGrid photos={photos} />
    </Container>
  );
}

export default App;
