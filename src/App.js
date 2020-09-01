import React from "react";
import "./App.css";
import Image from "./components/Image";
import useMobileDetection from "./hooks/useMobileDetection";

const images = [];
function App() {
  const { isMobile } = useMobileDetection();
  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Softtech Image Gallery Case</h1>
        {isMobile ? (
          <button onClick={() => alert("hi")}>Upload</button>
        ) : (
          <div>Dropbox</div>
        )}
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
