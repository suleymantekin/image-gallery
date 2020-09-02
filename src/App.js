import React, { useCallback } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Uploader from "./components/Uploader";

function App() {
  const [images, setImages] = React.useState([]);
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Softtech Image Gallery Case</h1>

        <Uploader
          images={images}
          setImages={useCallback((imgs) => setImages(imgs), [])}
        />
        <Gallery
          images={images}
          setImages={useCallback((imgs) => setImages(imgs), [])}
        />
      </div>
    </div>
  );
}

export default App;
