import React, { useCallback, useState } from "react";
import "../App.css";
import useMobileDetection from "../hooks/useMobileDetection";
import UploadInput from "./UploadInput";
import Dropzone from "./Dropzone";
import Error from "./Error";
const API = process.env.REACT_APP_API_URL;

function Uploader({ setImages }) {
  const { isMobile } = useMobileDetection();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const createFormData = (acceptedFiles) => {
    const formData = new FormData();
    for (let i = 0; i < acceptedFiles.length; i++) {
      formData.append("images", acceptedFiles[i]);
    }
    return formData;
  };

  const uploadPhotos = useCallback(
    (acceptedFiles) => {
      if (!acceptedFiles) {
        return;
      }
      const formData = createFormData(acceptedFiles);
      setIsLoading(true);
      setError("");
      fetch(`${API}/uploadmultiple`, {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          setIsLoading(false);
          const newImageUrls = data.map((item) => `${API}/${item.path}`);
          setImages((prevImageUrls) => {
            return [...newImageUrls, ...prevImageUrls];
          });
        })
        .catch(() => {
          setIsLoading(false);
          setError(
            "Something went wrong when uploading your images please try uploading again!"
          );
        });
    },
    [setImages]
  );
  return (
    <>
      {isMobile ? (
        <UploadInput onChange={uploadPhotos} isLoading={isLoading} />
      ) : (
        <Dropzone onDrop={uploadPhotos} isLoading={isLoading} />
      )}
      <Error error={error} />
    </>
  );
}

export default Uploader;
