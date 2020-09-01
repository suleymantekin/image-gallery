import React from "react";
import "../App.css";

function Image({ src = "", alt = "" }) {
  return (
    <div className="gallery-item">
      <img className="gallery-image" src={src} alt={alt} />
    </div>
  );
}

export default Image;
