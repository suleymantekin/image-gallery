import React from "react";
import "../App.css";

function UploadInput({ onChange = () => null }) {
  return (
    <>
      <label htmlFor="gallery-input" className="custom-input">
        Upload a photo
      </label>
      <input
        id="gallery-input"
        type="file"
        accept="image/*"
        onChange={onChange}
      />
    </>
  );
}

export default UploadInput;
