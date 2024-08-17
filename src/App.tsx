import styled from "styled-components";
import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid";
import photos from "./data/photos.json";
import { fetchPhotos } from "./services/photoServices";
import { useQuery } from "@tanstack/react-query";

const CenterText = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;

function App() {
  // const {
  //   data: photos,
  //   error,
  //   isLoading,
  // } = useQuery({
  //   queryKey: ["photos"],
  //   queryFn: fetchPhotos,
  // });

  // if (isLoading) return <CenterText>Loading photos...</CenterText>;
  // if (error) return <CenterText>Unidentified error has occured.</CenterText>;

  return (
    <Container>
      <PhotoGrid photos={photos!} />
    </Container>
  );
}

export default App;
