import React, { useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import Image from "./Image";
import Error from "./Error";
import "../App.css";
const API = process.env.REACT_APP_API_URL;

function Gallery({ images = [], setImages }) {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  // Fetch previously added images when the app is mounted
  React.useEffect(() => {
    setError("");
    setIsLoading(true);
    fetch(`${API}/gallery`)
      .then((response) => response.json())
      .then((data) => {
        let imageUrls = data.map((relativeUrl) => `${API}/${relativeUrl}`);
        setImages(imageUrls);
        setIsLoading(false);
      })
      .catch(() => {
        setError(
          "Something went wrong when retrieving your previous images please try refreshing the page!"
        );
        setIsLoading(false);
      });
  }, [setImages]);
  return (
    <>
      {isLoading && <p>Loading your images...</p>}
      <Error error={error} />
      <AnimateSharedLayout>
        <motion.div
          className="gallery"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          layout
        >
          {images.map((image) => (
            <Image src={image} key={image} />
          ))}
        </motion.div>
      </AnimateSharedLayout>
    </>
  );
}

export default React.memo(Gallery);
