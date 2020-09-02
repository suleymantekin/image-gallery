import React from "react";
import { useDropzone } from "react-dropzone";

function Dropzone({ onDrop = () => null, isLoading = false }) {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragReject,
  } = useDropzone({
    accept: "image/jpeg, image/png",
    onDrop,
  });

  return (
    <div {...getRootProps()} className="dropzone">
      <input {...getInputProps()} disabled={isLoading} />
      {isLoading ? (
        <p>Uploading...</p>
      ) : isDragReject ? (
        <p>Some files will be rejected</p>
      ) : isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag and drop some files here, or click to select files</p>
      )}
    </div>
  );
}

export default Dropzone;
