import React, { useState, useRef } from "react";
import Container from "./components/Container";
import PhotoGrid from "./components/PhotoGrid/PhotoGrid";
// import photosData from "./data/photos.json";

function App() {
  const [searchQuery, setSearchQuery] = useState("luxury");
  const searchInputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (searchInputRef.current) {
      const query = searchInputRef.current.value;
      setSearchQuery(query);
      searchInputRef.current.value = "";
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <input ref={searchInputRef} type="text" placeholder="Search..." />
      </form>
      <PhotoGrid searchQuery={searchQuery} />
    </Container>
  );
}

export default App;
