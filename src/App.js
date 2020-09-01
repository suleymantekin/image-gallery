import React, { useCallback } from "react";
import "./App.css";
import Image from "./components/Image";
import Dropzone from "./components/Dropzone";
import UploadInput from "./components/UploadInput";
import useMobileDetection from "./hooks/useMobileDetection";

const images = [];
function App() {
  const { isMobile } = useMobileDetection();
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Softtech Image Gallery Case</h1>
        {isMobile ? <UploadInput /> : <Dropzone onDrop={onDrop} />}
        <div className="gallery">
          {images.map((image) => (
            <Image src={image} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
