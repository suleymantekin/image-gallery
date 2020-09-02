import React, { useCallback } from "react";
import "./App.css";
import Gallery from "./components/Gallery";
import Dropzone from "./components/Dropzone";
import UploadInput from "./components/UploadInput";
import useMobileDetection from "./hooks/useMobileDetection";
const API = process.env.REACT_APP_API_URL;

function App() {
  const { isMobile } = useMobileDetection();
  const [isLoading, setIsLoading] = React.useState(false);
  const [images, setImages] = React.useState([]);

  React.useEffect(() => {
    fetch(`${API}/gallery`)
      .then((response) => response.json())
      .then((data) => {
        let imageUrls = data.map((url) => `${API}/${url}`).reverse();
        setImages(imageUrls);
      });
  }, []);

  const uploadPhoto = useCallback((acceptedFiles) => {
    console.log({ acceptedFiles });
    if (!acceptedFiles) {
      return;
    }
    const formData = new FormData();
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append("images", acceptedFiles[i]);
    }
    setIsLoading(true);
    fetch(`${API}/uploadmultiple`, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setImages((prevImages) => {
          return [...data.map((item) => `${API}/${item.path}`), ...prevImages];
        });
        console.log(data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1 className="heading">Softtech Image Gallery Case</h1>

        {isMobile ? (
          <UploadInput onChange={uploadPhoto} isLoading={isLoading} />
        ) : (
          <Dropzone onDrop={uploadPhoto} isLoading={isLoading} />
        )}
        <Gallery images={images} />
      </div>
    </div>
  );
}

export default App;
