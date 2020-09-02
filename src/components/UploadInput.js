import React from "react";
import "../App.css";

function UploadInput({ onChange = () => null, isLoading = false }) {
  return (
    <>
      <label htmlFor="custom-input" className="custom-input">
        {isLoading ? "Uploading..." : "Upload a photo"}
      </label>
      <input
        id="custom-input"
        type="file"
        accept="image/*"
        onChange={(event) => onChange(event.target.files)}
        disabled={isLoading}
        multiple
      />
    </>
  );
}

export default UploadInput;
